// Dashboard & Logout
const token = localStorage.getItem("token");
const welcomeMsg = document.getElementById("welcomeMsg");
const logoutBtn = document.getElementById("logoutBtn");

if (welcomeMsg && logoutBtn) {
  if (!token) {
    window.location.href = "login.html"; // agar token nahi hai → login page
  } else {
    // simple welcome message
    welcomeMsg.innerText = "Welcome! You are logged in.";

    // logout
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.href = "login.html";
    });
  }
}