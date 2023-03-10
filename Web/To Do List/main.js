// Create a "close" button and append it to each list item
const myNodeList = document.getElementsByTagName("li");

for (let i = 0; i < myNodeList.length; i++) {
  const span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
const closeBtn = document.getElementsByClassName("close");
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].onclick = function () {
    const div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// // Create a new list item when clicking on the "Add" button
function newElement() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("myInput").value;
  const text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  // agar title kembali kosong
  document.getElementById("myInput").value = "";

  let span = document.createElement("span");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}
