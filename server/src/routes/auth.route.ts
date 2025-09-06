import express, { Request, Response } from "express";
import User from "../models/userModel";
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';
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


router.post('/signin' , async (req,res,next) => {
    
    try {
        const {
            email,
            password
        } = req.body;
        
        const validUser = await User.findOne({email});

        if(!validUser) return res.status(404).json({
            message : " invaied user or user not found"
        })
      
       // @ts-ignore
        const vaildPassword = bcryptjs.compareSync(password, validUser.password)


        if(!vaildPassword) return res.status(401).json({
            message : " invaild credentials"
        })
        
//change here evn ehile hosting
//@ts-ignore

const{password: hasedPass, ...rest} = validUser._doc;

        const token = jwt.sign({id : validUser._id},process.env.JWT_SECRET || "fallback_secret",
        {expiresIn : "1h"}
        );

        res.cookie("access_token", token, 
            {httpOnly: true,
            maxAge : 60 * 60 * 1000
    });

        res.status(200).json({
            message : "LoginSuccessfull",
            token,
            rest
            // access_token
        })

    } catch (error) {
        next(error);
    }

})



export default router;
