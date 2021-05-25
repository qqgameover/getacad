const appen = getDiv("app");
const brukernavnfield = getDiv("brukernavn");
const passordfield = getDiv("passord");
const loggInnKnapp = getDiv("login");
let infotext = "";
let html = "";
let passordText = "";
let brukerNavnText = "";
let page = "login";
let html2 = "";


function loggIn(username, passord) {
  const brukerNavn = "KasperL";
  const password = "GetErFlott!";

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
    page = "mainpage";
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
    let charCodeA = "a".charCodeAt(0);
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
  html = `
  <div class="container">
  <div class="login-page">
  <input class="logininfo" type="text" id="brukernavn" placeholder="Brukernavn" oninput="brukerNavnText = this.value "value="${
    brukerNavnText}"/>
  </br> <input type="password" placeholder="Passord" id="passord" oninput="passordText = this.value "value ="${
    passordText}"/>
  </br> <button id="login" onclick="loggIn(brukernavn.value, passord.value)">Logg inn</button>
  </div> ${infotext}
  `;
  appen.innerHTML = html;
}

function mainpage() {
  appen.innerHTML  =     
  '<div class="container">' +
  "<h1>Velkommen, du er nå logget inn!</h1>" +
  "<p>" +
  tilfeldigOrd() +
  "</p>" +
  "</br>" +
  '<button onclick="updateView()">Trykk på meg for et tilfeldig "ord"' +
  "</div>";
}

updateView();
function updateView() {
  if (page === "mainpage") {
    mainpage();
  } if (page === "login") {
    loginupdate();
  }
}

function getDiv(id) {
  return document.getElementById(id);
}
