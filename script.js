var t2yped = new Typed(".me", {
  strings: ["Fullstack Developer","MERN Stack developer", "UI/UX Designer", "web Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

var menu_btn = document.getElementById("one");

// newdiv.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m420.48 121.81-30.29-30.29L256 225.92 121.81 91.52l-30.29 30.29L225.92 256 91.52 390.19l30.29 30.29L256 286.08l134.19 134.4 30.29-30.29L286.08 256z" fill="#ffff" fill-rule="evenodd"/></svg>`;

menu_btn.addEventListener("click", function () {
  var click = document.getElementById("click");
  var img = document.querySelector(".img");
  if (click.style.display === "block") {
    click.style.display = "none";

    menu_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256">
                <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8.53333,8.53333)"><path d="M3,7c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM3,21c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h24c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587z"></path></g></g>
                </svg>`;
  } else {
    click.style.display = "block";
    menu_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="m420.48 121.81-30.29-30.29L256 225.92 121.81 91.52l-30.29 30.29L225.92 256 91.52 390.19l30.29 30.29L256 286.08l134.19 134.4 30.29-30.29L286.08 256z" fill="#ffff" fill-rule="evenodd"/></svg>`;
    // img.style.Top = "5000px";
  }
});

var one = document.getElementById("btn-one");
var two = document.getElementById("btn-two");
var three = document.getElementById("btn-3");
var four = document.getElementById("btn-4");
var five = document.getElementById("btn-5");
var six = document.getElementById("btn-6");

one.addEventListener("click", function () {
  window.open("https://github.com/Sundhar-1/portfolio", "_blank");
});

two.addEventListener("click", function () {
  window.open("https://github.com/Sundhar-1/study-flow", "_blank");
});

three.addEventListener("click", function () {
  window.open("https://github.com/Sundhar-1/E-commerse-MERN-Stack", "_blank");
});

four.addEventListener("click", function () {
  window.open(
    "https://www.figma.com/design/AE95CO8rmkVxbiJMe0zcHq/Sundhar-Sms-s-team-library?node-id=3350-409&t=06A7HHPS5a4gmiFJ-1",
    "_blank"
  );
});

five.addEventListener("click", function () {
  window.open(
    "https://www.figma.com/design/nlqXgq6trnh58dJYWvSgYF/Untitled?node-id=0-1&t=pm3MCq696wS9Uq1y-1",
    "_blank"
  );
});

six.addEventListener("click", function () {
  window.open(
    "https://github.com/Sundhar-1/quiz-app",
    "_blank"
  );
});

document.querySelector("footer").style.backgroundColor = "#01081a";
document.querySelector("footer").style.marginTop = "50px";
document.querySelector("footer").style.padding = "10px";

document.getElementById("flex").style.display = "flex";
document.getElementById("flex").style.justifyContent = "center";
document.getElementById("flex").style.paddingBottom = "20px";
document.getElementById("flex").style.backgroundColor = "#01081a";

// document.getElementById("profile").style.display = "grid";
// document.getElementById("profile").style.gridTemplateColumns = "1fr 1fr";

document.getElementById("header").style.position = "sticky";
document.getElementById("header").style.top = "0";
document.getElementById("header").style.zIndex = "1000";
document.getElementById("header").style.boxShadow =
  "5px 5px 10px rgba(0, 0, 0, 0.1)";

var mail = document.getElementById("mail");

mail.addEventListener("click", function () {
  window.open("mailto:sundharsms309@gmail.com", "_blank");
});

var chat = document.getElementById("chat");
chat.addEventListener("click", function () {
  window.open(
    "https://api.whatsapp.com/send?phone=+919344980469&text=Hello%20Sundhar",
    "_blank"
  );
});

let c1 = document.getElementById("c-2");
c1.innerText =
  "Converted Figma UI design into fully responsive and semantic HTML/CSS pages. Ensured layout accuracy and accessibility. ";

let c2 = document.getElementById("c-3");
c2.innerText =
  "Developed a full-stack(MERN) E-Commerce platform with product listing, cart management, and user authentication.Implemented RESTful APIs for CRUD operations and integrated MongoDB for efficient data storage.";

let c3 = document.getElementById("c-4");
c3.innerText =
  "Designed a travel app UI/UX in Figma. Focused on user-friendly navigation and visually appealing layout. Created interactive prototypes for user testing.";

let c4 = document.getElementById("c-5");
c4.innerText =
  "Created a Figma design for a study app. Focused on user-friendly interface and intuitive navigation. Developed interactive prototypes for user testing.";

let c5 = document.getElementById("c-6");
c5.innerText =
  " Built a JavaScript Quiz App with a countdown timer, real-time score calculation, and instant correctness feedback.";

// Function to send email using EmailJS

emailjs.init("qkzmhKC6otSO9tfQK"); // Replace with your EmailJS public key

function sendemail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const templateParams = {
    title: "Portfolio Contact", // optional
    name: name,
    email: email,
    message: message,
  };

  emailjs.send("service_1wrc11d", "template_t5utbdl", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      document.getElementById("overlay").style.display = "flex";
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.error("FAILED...", error);
      alert("❌ Failed to send message. Try Again!");
    }
  );
}

document.querySelector(".dismiss").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

document.getElementById("ok").addEventListener("click", function () {
  document.getElementById("overlay").style.display = "none";
});

document.getElementById("l-1").addEventListener("click", function () {
  window.open("https://sundharesan.netlify.app/", "_blank");
});

document.getElementById("l-2").addEventListener("click", function () {
  window.open("https://study-flow1.netlify.app/", "_blank");
});

document.getElementById("l-3").addEventListener("click", function () {
  window.open("https://github.com/Sundhar-1/E-commerse-MERN-Stack", "_blank");
});
document.getElementById("01").addEventListener("click", function () {
  window.open("https://jquizeapps.netlify.app/", "_blank");
});