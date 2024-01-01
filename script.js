let inputbox=document.getElementById("input-box");
let listcontainer=document.getElementById("list-container");
function addTask(){
    if(inputbox.value == ""){
        alert("You must write something");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML =inputbox.value;
        listcontainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="" ;
    savedata();
}
listcontainer.addEventListener("click",function(e)
{
    if(e.target.tagName == "Li"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName == "span"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
functionshowTask()
    {listcontainer.innerHTML=localStorage.getItem("data");

}
showTask();