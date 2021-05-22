let appen = document.getElementById("app");
let brukernavnfield = document.getElementById("brukernavn");
let passordfield = document.getElementById("passord");
let loggInnKnapp = document.getElementById("login");
let infotext = "";

updateView();

function robotcheck() {}

function loggIn(username, passord) {
  let brukerNavn = "KasperL";
  let password = "GetErFlott!";

  if (!(username === brukerNavn && passord === password))
    if (username === "" || passord === "") {
      infotext =
        "Du har glemt å skrive passord eller brukernavn, vennligst legg det til!";
      updateView();
      return "mangler noe";
    } else if (username != brukerNavn || passord != password) {
      infotext = "Beklager men passordet og/eller brukernavnet er feil!";
      updateView();
      return "Feil";
    } else {
      infotext = "Dette skal ikke forekomme, noe gikk galt";
      updateView();
      return "error";
    }
  else {
    infotext = "Velkommen til blabla! Du er nå logget inn";
    passordfield.remove();
    brukernavnfield.remove();
    loggInnKnapp.remove();
    updateView();
    return "loggedin";
  }
}

function updateView() {
  appen.innerHTML = infotext;
}
