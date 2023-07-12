import "./styles.css";
const button = document.getElementById("submit-data");
button.addEventListener("click", clickSubmit);
const username = document.getElementsByName("input-username");
const email = document.getElementsByName("input-email");
const address = document.getElementsByName("input-address");
const admin = document.getElementsByName("input-admin");
const table = document.getElementById("table");

const buttonEmpty = document.getElementById("empty-table");
buttonEmpty.addEventListener("click", clickEmpty);

function clickEmpty() {
  var table = document.getElementById("table");
  table.innerHTML = "";
}

function clickSubmit() {
  let table = document.getElementById("table");

  let row = document.createElement("tr");
  let c1 = document.createElement("td");
  let c2 = document.createElement("td");
  let c3 = document.createElement("td");
  let c4 = document.createElement("td");

  c1.innerText = "Elon";
  c2.innerText = "42";
  c3.innerText = "Houston";
  c4.innerText = "C++";

  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  table.appendChild(row);
}
