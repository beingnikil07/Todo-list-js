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
    addToDo(this.value);
    //Here this refers to item and item is the id of input box
    // and we are geetting value through value property
    //addToDo is a function that is called and passing the value to the addToDo function
    this.value = "";
    // After getting the value we have to delete it from input box so that our input box can be empty
  }
});

const addToDo = (item) => {
  // For creating a new list
  //item is a parameter which is receiving the value from input box
  const listItem = document.createElement("li");
  listItem.innerHTML = ` 
                       ${item}    
                       <i class="fa-solid fa-xmark"></i>`;
  // item is the content of input box so here input text would be embedded.
  
  todoBox.appendChild(listItem);  
  //todoBox contains the id to unorder list so we append child on todoBox
  // listItem contains the new list that's why we have given it to the appendChild
};
