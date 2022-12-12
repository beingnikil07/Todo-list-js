const item = document.querySelector("#item");
const todoBox = document.querySelector("#todo-box");

/* 
     *****Below code shows you what actually what keyup event does ****** 
item.addEventListener("keyup",function(event){    
    console.log(event.key);
});

*/

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    console.log(this.value); //Here ,This refers to the item id that is the id of input box
    this.value = "";
  }
});
