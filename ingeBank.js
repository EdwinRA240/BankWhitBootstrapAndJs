let users = [
  {
    id: 0,
    name: "John",
    email: "john@example.com",
    password: "123456",
    saldo: 320,
  },
  {
    id: 1,
    name: "Jane",
    email: "jane@example.com",
    password: "123456",
    saldo: 180,
  },
  {
    id: 2,
    name: "Doe",
    email: "doe@example.com",
    password: "123456",
    saldo: 640,
  },
];

//Update at localStorage
if (localStorage === undefined) {
  localStorage.setItem("allUsers", JSON.stringify(users));
}; 
// console.log(jsonUsers); /* JSON */