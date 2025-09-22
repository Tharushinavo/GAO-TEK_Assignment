// DOM helper
const $ = (sel) => document.querySelector(sel);

// Show login/signup boxes
function showLoginBox() {
  $("#signupForm").classList.remove("active");
  $("#loginForm").classList.add("active");
}
function showSignupBox() {
  $("#loginForm").classList.remove("active");
  $("#signupForm").classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {

  // ================= Tab Switch =================
  const tabs = document.querySelectorAll('.tab-btn');
  const forms = document.querySelectorAll('.auth-form');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      forms.forEach(f => f.classList.remove('active'));
      document.getElementById(tab.dataset.target).classList.add('active');
    });
  });

  // ================= Signup Form =================
  $("#signupForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🎉 Account created successfully!");
    $("#signupForm").reset();
    // Automatically switch to login form after signup
    document.querySelector('.tab-btn[data-target="loginForm"]').click();
  });

  // ================= Login Form =================
  $("#loginForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🔑 Logged in successfully!");
    $("#loginForm").reset();
  });

  // ================= CTA Button =================
  $("#getStarted")?.addEventListener("click", () => {
    document.querySelector("#features")?.scrollIntoView({behavior: "smooth"});
  });

  // ================= Social Login (Twitter) =================
  document.querySelectorAll(".btn-social.twitter").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("🔁 Redirecting to Twitter login (placeholder).");
    });
  });

  // ================= Show Auth Section on Load =================
  document.querySelector('.auth-section')?.scrollIntoView({behavior: "smooth"});
});
