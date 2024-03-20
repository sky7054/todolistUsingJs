let inputValue = document.getElementById("inputField");
let addBtn = document.querySelector(".btn");
let todoListElem = document.querySelector(".todoListEle");

// const getTodoListFromLocal = () => {
//     return JSON.parse(localStorage.getItem("todoListInfo"));
// }

// const addDataToDynamic = (currEle) => {
   
// }


addBtn.addEventListener("click",()=>{
    let pElem = document.createElement("p");
    pElem.textContent = inputValue.value.trim();
    todoListElem.append(pElem);
    inputValue.value= "";


    // // add data on local storage
    // localTodoList.push(todoListValue);
    // localTodoList = [...new Set(localTodoList)];
    // localStorage.setItem("todoListInfo",JSON.stringify(localTodoList));
    // addDataToDynamic(todoListValue);

});

todoListElem.addEventListener("click",(e) => {
    const currEle = e.target;
    console.log(currEle);
    currEle.remove();
})
