// PURCHASE THE TEMPLATE FOR DESCREPTIVE JAVASCRIPT FILES
var typed = $(".typed"); function scrollFunction() { document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? document.getElementById("navigation-bar").style.top = "0" : document.getElementById("navigation-bar").style.top = "-140px" } $(function () { var e = $(".typed-items").text(); e = (e = $(".typed-items").data("typed-person") + "," + e).split(","), typed.typed({ strings: e, typeSpeed: 100, loop: !0 }) }), burger = document.querySelector(".burger"), navbar = document.querySelector(".navbar"), navlist = document.querySelector(".nav-list"), burger.addEventListener("click", () => { navbar.classList.toggle("h-nav-resp"), navlist.classList.toggle("v-class-resp") }), navlist.addEventListener("click", () => { navbar.classList.toggle("h-nav-resp"), navlist.classList.toggle("v-class-resp") }), window.onscroll = function () { scrollFunction() }; const username = document.getElementById("name"), email = document.getElementById("email"), contact = document.getElementById("contact"), message = document.getElementById("message"); let validName = !1, validEmail = !1, validContact = !1; $("#success").hide(), $("#fail").hide(), username.addEventListener("blur", () => { let e = username.value; /^[a-zA-Z ]{2,30}$/.test(e) ? (username.classList.remove("is-invalid"), username.classList.add("is-valid"), validName = !0) : (username.classList.add("is-invalid"), validName = !1) }), email.addEventListener("blur", () => { let e = email.value; /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/.test(e) ? (email.classList.remove("is-invalid"), email.classList.add("is-valid"), validEmail = !0) : (email.classList.add("is-invalid"), validEmail = !1) }), contact.addEventListener("blur", () => { let e = contact.value; /^([0-9]){10,15}$/.test(e) ? (contact.classList.remove("is-invalid"), contact.classList.add("is-valid"), validContact = !0) : (contact.classList.add("is-invalid"), validContact = !1) }); let submit = document.getElementById("submit"); submit.addEventListener("click", e => { if (validContact && validEmail && validName) { document.getElementById("fail"); document.getElementById("success").classList.add("show"), $("#fail").hide(), $("#success").show(), alert("Message has been sent successfully!!") } else { e.preventDefault(); let t = document.getElementById("fail"); document.getElementById("success"); t.classList.add("show"), $("#success").hide(), $("#fail").show() } });
// PROJECTS
const templates = [{ tname: "TemplatesBySam", template_link: "https://templates-by-sam.web.app/", image: "assets/img/templatesbysam.png" }, { tname: "Fitness", template_link: "https://fitnesstemplate.web.app/", image: "assets/img/fitness.png" }, { tname: "MyPortr", template_link: "https://samarthsubhash-chitley.web.app/", image: "assets/img/myport.png" }, { tname: "Education", template_link: "https://educationbusinesstemplate.web.app/", image: "assets/img/education-template.PNG" }, { tname: "THF", template_link: "...", image: "assets/img/thf.png" }]; document.getElementById("my-projects").innerHTML = `${templates.map(function (e) { return `\n<a class="template-links" href="">\n<div class="card">\n    <a href="${e.template_link}">\n    <img class="card-img-top" src="${e.image}" alt="Card image cap">\n    </a>\n</div>\n` }).join("")}\n`;