const inputBox = document.getElementById("task-input")
const listContainer = document.getElementById("list-container")
const taskCounter = document.createElement('span');
taskCounter.textContent = `Task : 0`;
listContainer.appendChild(taskCounter);

 function Add(){
    if( inputBox.value === ''){
    alert("Please Add Your Task");
 }
 else 
 {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; 
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    taskCounter.textContent = `Task : ${listContainer.querySelectorAll("li").length}`;
 }
 inputBox.value = "";
}
 

listContainer.addEventListener("click", function(e){
   if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
   }
   else if (e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      taskCounter.textContent = `Task: ${listContainer.querySelectorAll('li').length}`;
   }

}, false);


var input = document.getElementById("task-input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

