let userForm=document.getElementById("User-registerform");
const retrieveEntries=()=>{
    let data=localStorage.getItem("user-entries");
    if(data){
      data=JSON.parse(data);
    }
    else{
      data=[];
    }
    return data;
}

window.onload = function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    minYear = year - 55; 
    maxYear = year - 18; 

    var min = minYear + "-" + month + "-" + day;
    var max = maxYear + "-" + month + "-" + day;

    document.getElementById("dob").setAttribute("min", min);
    document.getElementById("dob").setAttribute("max", max);
  };


let dataEntries=retrieveEntries();
const output=()=>{
    const entries=retrieveEntries();
    const rowData=entries.map((e)=>{
        const sname=`<td class='border px-4 py-2'>${e.name}</td>`;
        const semail=`<td class='border px-4 py-2'>${e.email}</td>`;
        const spwd=`<td class='border px-4 py-2'>${e.password}</td>`;
        const sdob=`<td class='border px-4 py-2'>${e.dob}</td>`;
        const sat=`<td class='border px-4 py-2'>${e.acceptTermsandconditions}</td>`;
        const row=`<tr>${sname} ${semail} ${spwd} ${sdob} ${sat}</tr>`;
        return row;
    }).join("\n");
    const table=`<table class="table-auto w-full"><tr>
    <th class="px-4 py-2">Name</th>
    <th class="px-4 py-2">Email</th>
    <th class="px-4 py-2">Password</th>
    <th class="px-4 py-2">dob</th>
    <th class="px-4 py-2">accepted terms?</th>
    </tr>${rowData}</table>`;
    document.getElementById("user-entries").innerHTML=table;
}
const save=(event)=>{
event.preventDefault();
const entry={
  name : document.getElementById("name").value,

email: document.getElementById("email").value,
  
password: document.getElementById("password").value,
  
  dob : document.getElementById("dob").value,
  
  acceptTermsandconditions : document.getElementById("acceptTerms").checked,
};
dataEntries.push(entry);
  localStorage.setItem("user-entries",JSON.stringify(dataEntries));
  output();
}
userForm.addEventListener("submit",save);
output();
// 
let userForm = document.getElementById("user_form");
var userEntries=[];

let errors=[]
const retieveEntries = ()=>{
    let entries = localStorage.getItem('userEntries')
    if(entries){
        entries=JSON.parse(entries)
    }else{
        entries=[]
    }
    return entries
}
const displayEnries = ()=>{
let entries=retieveEntries()
const tbleEntries = entries.map((entry)=>{
const nameCell = `<td class='border px-4 py-2'>${entry.FullName}</td>`
const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`
const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`
const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`
const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`
const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`
return row

}).join('\n')
const table =` <table class='table-auto w-full'>
    <tr>
    <th class='px-4 py-2 '>Name </th>
    <th class='px-4 py-2 '>Email </th>
    <th class='px-4 py-2 '>Password </th>
    <th class='px-4 py-2 '>Dob </th>
    <th class='px-4 py-2 '>Accepted terms? </th>
    </tr>${tbleEntries}
</table>`
let details = document.getElementById('user-entries')
details.innerHTML=table
}

const saveUserForm = (event)=>{
event.preventDefault();
const FullName = document.getElementById('name').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const dob = document.getElementById('dob').value
const acceptTerms = document.getElementById('acceptTerms').checked
var currentYear = new Date().getFullYear();
var birthYear = dob.split("-");
let year=birthYear[0]
var age = currentYear-year
console.log({age,currentYear,birthYear})
if(age < 18 || age > 55){
    document.getElementById('dob').style='border:1px solid red'
  return  alert("Age must be between 18 and 55")

}else{
    document.getElementById('dob').style='border:none'

    const entry ={
        FullName,
        email,
        password,
        dob,
        acceptTerms
     }
     userEntries=retieveEntries()
     userEntries.push(entry);
     localStorage.setItem("userEntries",JSON.stringify(userEntries))
    displayEntries()
    userForm.reset()
   
}
 
}
userForm.addEventListener('submit',saveUserForm)
displayEntries();