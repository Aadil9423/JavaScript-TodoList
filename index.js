let addTodo = document.getElementById("add");
let inputf = document.getElementById("inputfild");
let List = document.getElementById("List");

addTodo.addEventListener("click", function () {
  var pargraph = document.createElement("p");
  pargraph.innerHTML = inputf.value;
  pargraph.classList.add("para");
  List.appendChild(pargraph);
  inputf.value = "";
  pargraph.addEventListener("click", function () {
    pargraph.style.textDecoration = "line-through";
  });
  pargraph.addEventListener("dblclick", function () {
    List.removeChild(pargraph);
  });
});
