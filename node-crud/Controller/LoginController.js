const req = require("express/lib/request");
const res = require("express/lib/response");

const { body, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const express = require("express");
const User = require("../Model/User");

const registerValidation = [
    body("name").notEmpty().isString(),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
];

const register = async (req, res) => {
    //validation error message
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password, confirmPassword } = req.body;

    try {
        const exitingUser = await User.findOne({ email });
        if (exitingUser) {
            return res.status(401).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword, confirmPassword: hashedPassword });

        await newUser.save();
        res.status(200).json({ message: "User created successfully" });

    } catch (error) {
        console.log('error', error)
        res.status(500).json({ message: "Error registering user" });
    }

}

const loginValidation = [
    body("email").notEmpty().isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
];

//login 
const login = async (req, res) => {
    const { email, password } = req.body;
    const signedUpUser = await User.findOne({ email });

    if (!signedUpUser) {
        return res.status(401).json({ message: "User does not exist" });
    }
    const hashedPassword = signedUpUser.password;
    const token = jwt.sign({ email: signedUpUser.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "User logged in successfully", token });
}

//export modules
module.exports = {
    registerValidation,
    register,
    loginValidation,
    login,
}