const cookieKnop = document.querySelector("footer button");
const cookieDialoog = document.getElementById("cookieModal");
const sluitKnop = cookieDialoog.querySelector("form button");

// Knop verbergen als iemand de popup al eerder heeft gezien
if (localStorage.getItem("cookieInfoGezien") === "true") {
  cookieKnop.style.display = "none";
}

// Onthouden zodra iemand op "Sluiten" klikt
sluitKnop.addEventListener("click", () => {
  localStorage.setItem("cookieInfoGezien", "true");
  cookieKnop.style.display = "none";
});
