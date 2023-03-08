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