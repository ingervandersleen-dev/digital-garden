// Cookie-knoppen in de dialog. We selecteren ze op hun plek in de dialog
// (geen class nodig), zodat we niet met onclick-attributen in de HTML werken.
const cookieKnoppen = document.querySelectorAll("#cookieModal form button");
const [toestaanKnop, weigerKnop] = cookieKnoppen;

toestaanKnop.addEventListener("click", () => {
  document.cookie = "cookies-toegestaan=true; path=/; max-age=31536000";
});

weigerKnop.addEventListener("click", () => {
  document.cookie = "cookies-toegestaan=false; path=/; max-age=31536000";
});

// Het sluiten van de dialog gebeurt vanzelf door method="dialog" op het form,
// daar is geen JS voor nodig.
