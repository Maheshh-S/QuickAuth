import express, { Request, Response } from "express";
import User from "../models/userModel";
import bcryptjs from 'bcryptjs'
const router = express.Router();

router.post("/signup", async (req: Request, res: Response , next) => {
    try {
        const {username , email, password} = req.body;

const hasedPass = bcryptjs.hashSync(password,10);



        const newUser = new User({
            username,
            email,
            password : hasedPass
        });

        await newUser.save();

        res.status(201).json({
            message : " user created sucessfullly",
            user : newUser
        })

    } catch (error) {
        next(error)  
    }


});

export default router;
