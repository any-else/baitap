let divElement = document.querySelector("#root");
let inputElement = document.querySelector("#item-todo");
let buttonElement = document.querySelector("#submit-item");
let ulElement = document.querySelector("#list");

//day la phan bai tap
//xu ly thang khi no thay doi
inputElement.addEventListener("change", (e) => {
  console.log(e.target.value);
});

function addItem() {
  if (!buttonElement && !inputElement && !ulElement) return;
  console.log("value", inputElement.value);

  if (inputElement.value !== "") {
    let liElement = document.createElement("li");
    liElement.innerText = inputElement.value;
    ulElement.appendChild(liElement);

    inputElement.value = "";
    inputElement.value === "" &&
      (inputElement.style.backgroundColor = "yellow");
  } else {
    inputElement.style.backgroundColor = "yellow";
  }
}
