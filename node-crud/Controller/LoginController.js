const req = require("express/lib/request");
const res = require("express/lib/response");
const User = require("../Model/User");


const register = async (req, res) => {
    try {
        const { name, email, phoneNo, password, confirmPassword, profileImage } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
                   
        }

    } catch (error) {
        
    }
}