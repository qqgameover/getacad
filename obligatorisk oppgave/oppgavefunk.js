let appen = document.getElementById("app");
let brukernavnfield = document.getElementById("brukernavn");
let passordfield = document.getElementById("passord");
let loggInnKnapp = document.getElementById("login");
let infotext = "";

function loggIn(username, passord) {
  let brukerNavn = "KasperL";
  let password = "GetErFlott!";

  if (!(username === brukerNavn && passord === password))
    if (username === "" || passord === "") {
      infotext =
        "Du har glemt å skrive passord og/eller brukernavn, vennligst legg det til!";
      loginupdate();
      return "mangler noe";
    } else if (username != brukerNavn || passord != password) {
      infotext = "Beklager men passordet og/eller brukernavnet er feil!";
      loginupdate();
      return "Feil";
    } else {
      infotext = "Dette skal ikke forekomme, noe gikk galt";
      loginupdate();
      return "error";
    }
  else {
    passordfield.remove();
    brukernavnfield.remove();
    loggInnKnapp.remove();
    updateView();
    return "loggedin";
  }
}

function tilfeldigBokstavNORSK() {
  var bokstav = tilfeldigTall(0, 28);
  if (bokstav === 28) return "å";
  if (bokstav === 27) return "ø";
  if (bokstav === 26) return "æ";
  else {
    const charCodeA = "a".charCodeAt(0);
    return String.fromCharCode(bokstav + charCodeA);
  }
}

function tilfeldigOrd() {
  let bokstav1 = tilfeldigBokstavNORSK();
  let bokstav2 = tilfeldigBokstavNORSK();
  let bokstav3 = tilfeldigBokstavNORSK();
  let bokstav4 = tilfeldigBokstavNORSK();
  let bokstav5 = tilfeldigBokstavNORSK();
  return bokstav1 + bokstav2 + bokstav3 + bokstav4 + bokstav5;
}

function tilfeldigTall(minimum, maksimum) {
  return minimum + Math.floor(Math.random() * (maksimum - minimum + 1));
}

function loginupdate() {
  appen.innerHTML = infotext;
}
function updateView() {
  appen.innerHTML =
    "<h1>Velkommen, du er nå logget inn!</h1>" +
    tilfeldigOrd() +
    "</br>" +
    '<button onclick="updateView()">Trykk på meg for et tilfeldig "ord"';
}
