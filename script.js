           /* variable */
const empty=''
const UpperCase='QWERTYUIOPASDFGHJKLZXCVBNM'
const LowerCase='qwertyuiopasdfghjklzxcvbnm'
const Number=1234567890
const symbols="<,>.?/:;'+=_-%^@"
  
               /* html Div Id */
const password=document.querySelector('#password') 
const UserNumber=document.querySelector('#p-usernumber')
const pUpperCase=document.querySelector('#p-upperCase')
const pLowerCase=document.querySelector('#p-lowerCase')
const pNumber=document.querySelector('#p-number')
const 
pSymbols=document.querySelector('#p-symbols')
const 
CreatePassword=document.querySelector('#createPassword')

              /* function event */
CreatePassword.addEventListener('click',() => {
let intialPassword=empty;

(pUpperCase.checked) ? intialPassword += UpperCase : "" ;
(pLowerCase.checked) ? intialPassword += LowerCase : "" ;
(pNumber.checked) ? intialPassword += Number : "" ;
(pSymbols.checked) ?  intialPassword += symbols: "" ;
password.value=generatepassword(UserNumber.value,intialPassword)
if (UserNumber.value == "") {
				alert("Total Number Is Empty !")
}
})
const generatepassword=(U,intialPassword) => {
let pass="";
for (i = 0; i < U; i++) {
pass+=intialPassword.charAt(Math.floor(Math.random() * intialPassword.length))
}return pass;
}
      
            /* Copy and aleert */
const copyC=document.querySelector("#copy")
copyC.addEventListener('click',() => {
			if (password.value === "") {
						 alert("Please Generate The Password !")
			}else {
					password.select()
					document.execCommand("copy")
					alert("Password Copied !!")
			}
})