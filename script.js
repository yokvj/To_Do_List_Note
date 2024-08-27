const inputBox = document.getElementById("input-box");
const list = document.getElementById("list-container");


function Addtask(){
    if(inputBox.value === '')
    {
        alert("Must Wright Something!!!!")
    }
    else{
        let li = document.createElement("li")
        li.innerHTML=inputBox.value;
        list.appendChild(li);
        let  span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span)
        

    }
    inputBox.value='';
    savedata()

}


list.addEventListener("click",function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata()

    }else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata()
    }

},false)

function savedata(){
    localStorage.setItem("data", list.innerHTML)
}
function show()
{
   list.innerHTML= localStorage.getItem("data")
}
show();