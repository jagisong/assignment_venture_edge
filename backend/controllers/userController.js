const express = require("express");
const { config } = require("dotenv");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/users.js");
const SECRET = process.env.SECRET;
config();
const userSignup = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const securePassword = await bcrypt.hash(req.body.password, salt);
    try {
        await User.create({
            name: req.body.name,
            password: securePassword,
            email: req.body.email,
        });

        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}


const userLogin = async (req, res) => {
    let email = req.body.email;
    try {
        let userData = await User.findOne({ email });
        if (!userData) {
            return res
                .status(400)
                .json({ errors: "Try logging with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(
            req.body.password,
            userData.password
        );

        if (!passwordCompare) {
            return res
                .status(400)
                .json({ errors: "Try logging with correct credentials" });
        }

        const data = {
            user: {
                id: userData.id
            }
        }
        const authToken = jwt.sign(data, SECRET);
        // console.log(authToken);
        return res.json({ success: true, authToken });
    } catch (error) {
        console.log(error);
        res.json({ success: false });
    }
}


module.exports = {
    userSignup,
    userLogin
}