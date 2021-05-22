let appen = document.getElementById("app");
let brukernavnfield = document.getElementById("brukernavn");
let passordfield = document.getElementById("passord");
let loggInnKnapp = document.getElementById("login");
let infotext = "";

updateView();
function robotTest() {}

function loggIn(username, passord) {
  let brukerNavn = "KasperL";
  let password = "GetErFlott!";

  if (username === brukerNavn && passord === password) {
    appen.innerHTML = "Velkommen til blabla! Du er nå logget inn";
    passordfield.remove();
    brukernavnfield.remove();
    loggInnKnapp.remove();
    updateView();
  } else if (username === "" || passord === "") {
    infotext =
      "Du har glemt å skrive passord eller brukernavn, vennligst legg det til!";
    updateView();
  } else if (username != brukerNavn || passord != password) {
    infotext = "Beklager men passordet og/eller brukernavnet er feil!";
    updateView();
  } else {
    infotext = "Dette skal ikke forekomme, noe gikk galt";
    updateView();
    return "error";
  }
}

function updateView() {
  appen.innerHTML = html;
}
