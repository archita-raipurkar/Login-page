// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the tabs and forms
var tabs = document.querySelectorAll(".tab");
var forms = document.querySelectorAll(".form");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Toggle between tabs
tabs.forEach((tab) =>
  tab.addEventListener("click", function () {
    var activeTab = document.querySelector(".active-tab");
    activeTab.classList.remove("active-tab");
    tab.classList.add("active-tab");

    var activeForm = document.querySelector(".active-form");
    activeForm.classList.remove("active-form");

    var formId = tab.id.slice(0, -3) + "Form";
    var form = document.getElementById(formId);
    form.classList.add("active-form");
  })
);

// Handle form submissions
const handleFormSubmit = (event, form) => {
  event.preventDefault();

  const name = form.querySelector("input[name='name']").value;
  const email = form.querySelector("input[name='email']").value;
  const password = form.querySelector("input[name='password']").value;

  // Here you can send the form data to a server with an AJAX request
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  // Clear form inputs
  form.reset();

  // Switch to login tab
  var activeTab = document.querySelector(".active-tab");
  activeTab.classList.remove("active-tab");
  var loginTab = document.getElementById("loginTab");
  loginTab.classList.add("active-tab");

  var activeForm = document.querySelector(".active-form");
  activeForm.classList.remove("active-form");

  var loginForm = document.getElementById("loginForm");
  loginForm.classList.add("active-form");
};

const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupForm.addEventListener("submit", (event) =>
  handleFormSubmit(event, signupForm)
);

loginForm.addEventListener("submit", (event) =>
  handleFormSubmit(event, loginForm)
);

// Switch between signup and login forms
const signupLink = document.getElementById("signupLink");
const loginLink = document.getElementById("loginLink");

signupLink.addEventListener("click", function () {
  var activeTab = document.querySelector(".active-tab");
  activeTab.classList.remove("active-tab");
  var signupTab = document.getElementById("signupTab");
  signupTab.classList.add("active-tab");

  var activeForm = document.querySelector(".active-form");
  activeForm.classList.remove("active-form");

  var signupForm = document.getElementById("signupForm");
  signupForm.classList.add("active-form");
});

loginLink.addEventListener("click", function () {
  var activeTab = document.querySelector(".active-tab");
  activeTab.classList.remove("active-tab");
  var loginTab = document.getElementById("loginTab");
  loginTab.classList.add("active-tab");

  var activeForm = document.querySelector(".active-form");
  activeForm.classList.remove("active-form");

  var loginForm = document.getElementById("loginForm");
  loginForm.classList.add("active-form");
});

