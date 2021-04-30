const URL = "https://www.datos.gov.co/resource/2f4v-3fb7.json";
const container = document.getElementById("container");
const buildURL = (key, value) => {
  return `${URL}?${key}=${value}`;
};
let i;

function createNode(el) {
  return document.createElement(el);
}

function append(parent, el) {
  return parent.appendChild(el);
}

function buildTable() {
  fetch(URL)
    .then((respt) => respt.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(element);
        minicipio=element.municipio;
        if (element.no != undefined) {
          let tr = createNode("tr");
          tr.innerHTML = `<th scope="row">${i}</th>
      <td>${element.municipio}</td>
      <td>${element.establecimiento_educativo}</td>
      <td>${element.sede}</td>`;
          append(container, tr);
          i++
        }
      });
    })
    .catch((error) => {
      console.log(`It had an error: ${error}`);
    });
}

document
  .getElementById("loadTable")
  .addEventListener("click",()=>{
    i=1;  
    let tbody = document.getElementById("container");
    tbody.innerHTML ="";
    buildTable();
  }, false);
