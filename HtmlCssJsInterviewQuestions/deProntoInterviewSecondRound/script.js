let data = [
  {
    lastName: "Doe",
    firstName: "John",
    "phone number": 9078723233,
    userid: "doehn",
    password: "asdsadasf",
    degree: {
      specialization: "cse",
      isCompleted: true,
    },
  },
  {
    lastName: "Dohn",
    firstName: "Sam",
    "phone number": 9078723233,
    userid: "doehn",
    password: "asdsadasf",
    degree: {
      specialization: "cse",
      isCompleted: true,
    },
  },
  {
    lastName: "Dan",
    firstName: "Bezz",
    "phone number": 9078723233,
    userid: "doehn",
    password: "asdsadasf",
    degree: {
      specialization: "cse",
      isCompleted: true,
    },
  },
];

const username = document.getElementById("username");
const password = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

let isCredentialsCorrect = false;
let usernameValue = "";
let passwordValue = "";

const showJsonDataMarkup = () => {
  document.getElementById("json").innerHTML = "";
  data.forEach((name) => {
    document.getElementById("json").innerHTML += `
          <ul>
          <li>${name.firstName} ${name.lastName} <button id="editUser">Edit User</button> <button id="deleteUser">Delete User</button></li>
          </ul>
          `;
  });
};

username.addEventListener("change", (e) => {
  usernameValue = e.target.value;
});

password.addEventListener("change", (e) => {
  passwordValue = e.target.value;
});

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  data.forEach((name) => {
    const user = `${name.firstName} ${name.lastName}`;
    if (user === usernameValue && name.password === passwordValue) {
      localStorage.setItem("username", usernameValue);
      localStorage.setItem("password", passwordValue);
      isCredentialsCorrect = true;
    }
  });

  if (!isCredentialsCorrect) {
    document.getElementById(
      "incorrectCredentialsMessage"
    ).textContent = `Entered username and password are incorrect. Please try again.`;
  } else if (isCredentialsCorrect) {
    showJsonDataMarkup();

    const deleteButtons = document.querySelectorAll("#deleteUser");
    console.log(deleteButtons.length);
    for (let i = 0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener("click", (e) => {
        e.preventDefault();

        console.log(deleteButtons[i].closest("li").textContent);

        data = data.filter((name) => {
          const user = `${name.firstName}`;
          return (
            user !== deleteButtons[i].closest("li").textContent.split(" ")[0]
          );
        });

        showJsonDataMarkup();
      });
    }
  }
});

document.getElementById("addUser").addEventListener("click", (e) => {
  e.preventDefault();

  document.getElementById("incorrectCredentialsMessage").textContent = "";
  const [firstName, lastName] = usernameValue.split(" ");
  const userData = {
    lastName: lastName,
    firstName: firstName,
    password: passwordValue,
  };
  data.push(userData);

  showJsonDataMarkup();
});
