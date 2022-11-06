let items=[];    
function register(){
    console.log("register function");
    //store in a var the input text *document.getElementById()

let item = document.getElementById("txtTask").value;
console.log(item);
items.push(item);
console.log(items);
    //display in the items section *document.getElementById ()
let tasks="";
    for(let i=0;i<items.length;i++){
    console.log(items[i]);
    tasks+=`
    <li>${items[i]}</li>
    `;
}
document.getElementById("items").innerHTML=tasks;

//clear the input
document.getElementById("txtTask").value="";
}