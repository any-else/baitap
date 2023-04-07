/**
 * get ELement Div co id la baitap-1
 * sau do tu element minh se mua ra cai giao dien day
 */

let divElement = document.querySelector("#baitap-1");
console.log(" divElement", divElement);
if (!divElement) {
  console.log("Nghi choi");
}
//create span
let spanElement = document.createElement("span");
spanElement.innerText = "Nhập nội dung tìm kiếm";

//create input
let inputElement = document.createElement("input");

//create a
let linkElement = document.createElement("a");
linkElement.innerText = "Tìm kiếm nâng cao";
linkElement.setAttribute("href", "#");
linkElement.addEventListener("click", (e) => {
  linkElement.style.display = "none";
  linkElement2.style.display = "inline-block";
  selectElement.style.display = "block";
});

//create a replace
let linkElement2 = document.createElement("a");
linkElement2.innerText = "Ấn tìm kiếm nâng cao";
linkElement2.setAttribute("href", "#");
linkElement2.style.display = "none";
linkElement2.addEventListener("click", (e) => {
  selectElement.style.display = "none";
  linkElement2.style.display = "none";
  linkElement.style.display = "inline-block";
});
//create select
let selectElement = document.createElement("select");

let optionElement = document.createElement("option");
optionElement.text = "Quan Ao";
let optionElement2 = document.createElement("option");
optionElement.text = "Dien Thoai";

//add option vao select
selectElement.add(optionElement);
selectElement.add(optionElement2);
selectElement.style.display = "none";

//textContent
//innerHTML
//innerText

//diem giong nhau deu cho phep ghi de lai doan text co tu truoc
//textContent: nó sẽ chỉ lấy doạn text cuả thẻ đấy
//innerText: nó lấy cả những đoạn text bên trong tất cả các thẻ con
//innerHTML: nó lấy ra toàn bộ những gì mà bên trong thẻ đó có

//create button
let buttonELement = document.createElement("button");

buttonELement.innerHTML = "Tìm kiếm";
buttonELement.style.display = "block";

divElement.appendChild(spanElement);
divElement.appendChild(inputElement);
divElement.appendChild(linkElement);
divElement.appendChild(linkElement2);
divElement.appendChild(selectElement);
divElement.appendChild(buttonELement);
