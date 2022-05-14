<h1>Nodemailer</h1>

<h3>In this we see how to send mail using javascript and nodemailer</h3>

<hr>

* step 1:- Make one contact page
* step 2:- Make one js file in which you fetch the data of user 
* step 3:- In app.js crete route for contact.
* step 4:- in contact.js fetxh the user data from form then send it to app.js using XMLHttpRequest.<br>
(XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming)

```
const Form=document.querySelector('#my-form');
let name_=document.getElementById('name')
let email=document.getElementById('email')
let subject=document.getElementById('subject')
let message=document.getElementById('message')

Form.addEventListener('submit',(e)=>{
e.preventDefault();
let formData={
    name:name_.value,
    email:email.value,
    subject:subject.value,
    message:message.value
}
let xhr=new XMLHttpRequest()
xhr.open('POST','/')
xhr.setRequestHeader('content-type','application/json')
xhr.onload=function(){
    console.log(xhr.responseText)
    if(xhr.responseText=='success'){
        alert('email sent')
        name_.value='';
        email.value='';
        subject.value='';
        message.value='';
        
    }else{
        alert("something went wrong")
    }
}
xhr.send(JSON.stringify(formData))



})

```

* step 5:- in app.js create app.post to post the mail from the contact to admin.
* step 6: Now here we use NODEMAILER to send the mail.
* step 7: create the transport variable in which you give the service which you use in my case it is gmail.
* step 8: then give the user id and password on which you want mail came.
* step 9: then create mailOption in which it shows the format from where mail came and it is send to whome and what is the subject.
* step 10: then check if mail send or nor if not send send error in javascript then it shows the alert message .
* step 11: same with success.

```
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

```


