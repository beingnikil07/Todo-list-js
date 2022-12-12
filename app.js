const item = document.querySelector("#item");
const todoBox = document.querySelector("#todo-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (item) => {
  const listItem = document.createElement("li"); // Created list item element
  listItem.innerHTML = `                  
                       ${item}                   
                       <i class="fa-solid fa-xmark"></i>`; //item refer to input box

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", () => {
    listItem.remove();           
  });

  todoBox.appendChild(listItem);
};
