const express=require("express")
const nodemailer=require("nodemailer")
const keys=require("./config/keys")
const app=express()
const PORT=process.env.PORT||4000

app.use(express.static('public'))

app.set("view engine",'ejs')

app.use(express.json())

app.get('/',(req,res)=>{
    res.render("contact")

})

app.post('/',(req,res)=>{
    console.log(req.body)

    const transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:[keys.users.user],
            pass:[keys.users.pass]
        }
    })
    const mailOptions={
        from:req.body.email,
        to:[keys.users.user],
        subject:`message from ${req.body.email}: ${req.body.subject}`,
        text:req.body.message
    }  
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error);
            res.send('error')
        }
        else{
            console.log('email is send')
            res.send("success")
        }
    })
})

app.listen(PORT,()=>{
    console.log(`listen on port ${PORT}`)
})
