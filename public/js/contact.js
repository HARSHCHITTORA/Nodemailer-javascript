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