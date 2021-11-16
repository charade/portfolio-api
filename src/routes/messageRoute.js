require('dotenv').config();
const router = require('express').Router();
const emailCheck = require('email-validator');
const nodemailer = require('nodemailer');

router.post('/',(req, res) => {
    const { message, email } = req.body;

    isValidEmail  = emailCheck.validate(email);

    if(isValidEmail){
        const transport  = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user: process.env.EMAIL,
                pass : process.env.EMAIL_PASSWORD
            }
        });
        const emailOption = {
            from : email,
            to : process.env.EMAIL,
            subject : "I saw your portfolio",
            html : `<h2>${email}</h2><p>${message}</p>`
        };
        transport.sendMail(emailOption, (error, response) => {
            if(error){
                res.status(400)
                return;
            }
            res.status(200).json(response)
        });
        return;
    };
    //email not valid
    res.status(400).json({error : "bad email"})
});

module.exports = router;
