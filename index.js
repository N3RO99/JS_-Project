
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submitBtn = document.getElementById('submit');
const eyeIcons = document.getElementById('show-eyeIcons')


// showError
function showError(input, msg){
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
     small.innerHtml= msg
}


// showSuccess
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
}
// // getFieldNam
//  function getFieldName(input)
//  {
//     console.log(input.name);
//     return input.name
// }

// checkEmailValidity
function checkEmail(input) {
const re = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2, 7}{2,7}$/;
}

if(re.test(input.value.trim())){
    showSuccess(input);
}
else{
    showError(input, 'Email is not valid');
}


// // checkRequired


// function checkRequired(inputArray) {
//     let allValid = true;
//     inputArray.forEach((input)=>{
//         if (input.value.trim() === "" ) {
//             showError(input, `${getFieldName(input)} is required`)
//         }
//     });
//     return allValid

// }

// checkLength
function checkLength(input,min,max){
    if (input.value.length<min){
        showError(input, `${input.name} must be atleast ${min} characters` );
    } else if( input.value.length>max){
        showError( input, ` ${input.name} must be less than ${max} characters `);
    } else{
        showSuccess(input);
    }
}
// comparePasswordMatch
function checkPasswordsMatch(input1, input2){
    const password1 = input1.value.trim();
    const password2 = input2.value.trim();
    if (password1 !==password2){
        showError(input2, 'Passwords do not match');
    }else{
        showSuccess(input2);
   }
}


//function to enable submit button
function enableButton(){
    console.log('Button is enabled');
    submitBtn.disabled = false;
    submitBtn.classList.remove('disable');
} 

//function to disable submit button
function disableButton(){
    console.log('Button is disabled');
    submitBtn.disabled = true;
    submitBtn.classList.add('disable');
} 
// function to update submit button nodelist
function updateSubmitButton(){
    const inputs = form.querySelectorAll('input');
     const isValid = array.from(inputs).every(input=>
     input.parentElement.classList.contains('success'));
     isValid?enableButton(): disableButton();
}
// function to toggle password visibility
function showPassword(inputField, eyeIcon){
    const inputType = inputField.getAttribute('type');
    if(inputType === "password"){
        inputField.setAttribute('type', "text");

    eyeIcon.src ='./img/eye.png';
}else{
    inputField.setAttribute('type', 'password');
    eyeIcon.src='./img/eye.png';
}
}
// Event listener for eye icons
eyeIcons.forEach(function(icon){
    icon.addEventListener('click', function() {
        const inputId = this.dataset.target;
        const inputField = document.getElementById(inputId);
        showPassword(inputField, this);
    });
});

// Event listener for input validation
form.addEventListener('input', function (e) {
if (e.target.tagName === 'INPUT'){
    const input = e.target;
    if(input.value.trim()=== ' '){
        showError(input,`${input.name} is required`);
    }else if (input.id==='username'){
        checkLength(input, 3, 15);
    }else if(input.id==='email'){
        checkEmail(input);
    } else if(input.id==='password'){
        checkLength(input, 6, 15);
}else if(input.id==='password' || input.id ==='password2'){
// const passwordInput = document.getElementById('password');

checkPasswordsMatch(password, input);
}
else{
    showSuccess(input);
}
    updateSubmitButton();
}
});



const url = "https://fragrancehubbe.onrender.com/api/v1/register"

// handleFormSubmit function
async function handleFormSubmit(e){
    e.preventDefault();
}
// get Value from input fields
const formData ={
name: username.value,
emaill: email.value,
}
try{
    const response = await axios.post(url, formData);
    const user = response.data;
    console.log('Registration Successful', user);
    form.reset()
} catch (err){
   console.log('error registering a user ', err);
}

form.addEventListener('submit', handleFormSubmit);











// //  handleFormSubmit function
// function handleFormSubmit(e){
//     e.preventDefault();
//     // logic for form submit
// }
// // Event listener for form submission
// form.addEventListener('submit', handleFormSubmit)