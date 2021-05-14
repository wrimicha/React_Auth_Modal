export default function ConditionalNav(user) {
  let loggedin = document.querySelectorAll(".logged-in");
  let loggedout = document.querySelectorAll(".logged-out");

  if (user) {
    console.log(loggedin);
    loggedin.forEach((item) => (item.style.display = "block"));
    loggedout.forEach((item) => (item.style.display = "none"));
  } else {
    console.log(loggedout);
    loggedin.forEach((item) => (item.style.display = "none"));
    loggedout.forEach((item) => (item.style.display = "block"));
  }
}
