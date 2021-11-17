const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    checkInputs();
});
function checkInputs(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password2Value=password2.value.trim();
    if(usernameValue ===''){
        setErrorFor(username,'Username cannot be blank');
    }else if(!usernameValue){
        setErrorFor(username,'Enter a valid Username');
    }
    else{
        setSuccessFor(username);
    }
    if(emailValue===''){
        setErrorFor(email,'Email-ID cannot be blank');
    }
    else if(!isEmail(emailValue)) {
        setErrorFor(email,'Email-ID is not Valid');
    }else{
        setSuccessFor(email);

    }
    if(passwordValue ===''){
        setErrorFor(password,'Password1 cannot be blank');
    }
    else{
        setSuccessFor(password);
    }
    if(password2Value ===''){
        setErrorFor(password2,'Password2 cannot be blank');
    }else if(passwordValue!==password2Value){
        setErrorFor(password2,'Password2 did not match');
    }
    else{
        setSuccessFor(password2);
    }

}
function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=formControl.querySelector('small');
    small.innerText=message;
    formControl.className='form-control error';

}
function setSuccessFor(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function isEmail(email){
    return /^([A-Za-z0-9_\.\-]+)@([A-Za-z]+).([A-za-z]{2,3})$/.test(email);
}
function isUsername(password){
    return /^([a-z])/.test(username);
} 