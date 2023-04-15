const validUsernamePasswords = [
  {
    username: "user1",
    password: "user1",
  },
  {
    username: "user2",
    password: "user2",
  },
  {
    username: "user3",
    password: "user3",
  },
  {
    username: "user4",
    password: "user4",
  },
];

// html nodes
const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");

// Clears the error when data in inputs are changed
usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

// will prevent the user to come to login page from resume list page
window.history.forward();
function noBack() {
  window.history.forward();
}

// Clears the error
function clearError() {
  passwordTag.innerText = "";
}

// calls on LoginClick when submit on the login page is clicked
loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

// validates the info entered by user
function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "User Doesn't Exist";
  } else if (currentUser.password === password) {
    // Save Creds In Local Storage
    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);
    
    window.location.href = "./resume-page.html";
  } else {
    passwordTag.innerText = "Invalid Credentials";
  }
}
