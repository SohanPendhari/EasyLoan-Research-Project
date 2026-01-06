function toggleMenu() {
  document.getElementById("accountMenu").classList.toggle("show");
}
window.onclick = function (e) {
  if (!e.target.matches(".fa-user-circle")) {
    let menu = document.getElementById("accountMenu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
    }
  }
};

function sendMail(event) {
  event.preventDefault(); // stop form reload

  let parms = {
    title: document.getElementById("subject").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    time: new Date().toLocaleString(),
  };

  emailjs
    .send("service_w5ms93r", "template_ibfgbwr", parms)
    .then(() => {
      alert("✅ Email Sent Successfully!");
      document.querySelector("form").reset();
    })
    .catch((err) => {
      console.error("❌ Error details:", err);
      alert("Failed to send email. Check console for details.");
    });
}
