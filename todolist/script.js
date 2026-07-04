let header=document.getElementById("heading")
header.textContent= " AGENDA MAP✍️"

let button=document.querySelector("#addbtn")
let unorder=document.getElementsByTagName("ul")[0];

button.addEventListener("click",()=>{
    let inputvalue =document.getElementById("input-list");
    let task=inputvalue.value.trim()


    if(task !==""){
        let li=document.createElement("li");
        li.textContent= task
        unorder.appendChild(li)

        alert("TASK ADDED ! " +" "+ task)

        inputvalue.value="";
       

    }
     else{
            alert("Please Enter Any task")
        }

})

    const finalaction=button.getAttribute("data-action")
    console.log("Final Output",finalaction)
    button.setAttribute("data-action", "text-added")