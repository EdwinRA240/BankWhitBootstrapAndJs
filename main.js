let users = [
  {
    id: 1,
    name: "John",
    email: "john@example.com",
    password: "123456",
    saldo: 220,
  },
  {
    id: 2,
    name: "Jane",
    email: "jane@example.com",
    password: "123456",
    saldo: 180,
  },
  {
    id: 3,
    name: "Doe",
    email: "doe@example.com",
    password: "123456",
    saldo: 640,
  },
];

//add at localStorage
let jsonUsers = JSON.stringify(users);
localStorage.setItem("allUsers", jsonUsers);
// console.log(jsonUsers); /* JSON */

//add at arrUsers
let allUsers = localStorage.getItem("allUsers");
let arrUsers = JSON.parse(allUsers);
// console.log(arrUsers); /* Array */

const btnLogin = document.getElementById("btnLogin");

btnLogin.addEventListener("click", () => {
  event.preventDefault();

  const inputEmail = document.getElementById("inputEmail");
  const inputPass = document.getElementById("inputPassword");
  let b = 0;

  const validation = arrUsers.some(
    (user) =>
      inputEmail.value === user.email && inputPass.value === user.password
  );

  if (validation) {
    inputEmail.value = "";
    inputPass.value = "";
    alert("Inicio de seccion correcto");
    // let url = `http://127.0.0.1:5500/Proyectos/Bank/ingeBank.html`;
    // window.open(url, "_self");
    location.href = ("./ingeBank.html");
} else {
    inputEmail.value = "";
    inputPass.value = "";
    alert("Email or Password incorrect");
  }
});


