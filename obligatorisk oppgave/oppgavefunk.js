const appen = getDiv("app")
var page = "login";

updateView()
function loginupdate() {
  html = `
    <div class="container">
    <div class="login-page">
    <input class="logininfo" type="text" id="brukernavn" placeholder="Brukernavn" oninput="brukerNavnText = this.value "value="${brukerNavnText}"/>
    </br> <input type="password" placeholder="Passord" id="passord" oninput="passordText = this.value "value ="${passordText}"/>
    </br> <button id="login" onclick="loggIn(brukernavn.value, passord.value)">Logg inn</button>
    </div> ${infotext}
    `;
  appen.innerHTML = html;
}

function mainpage() {
  html =
    '<div class="container">' +
    "<h1>Velkommen, du er nå logget inn!</h1>" +
    "<p>" +
    tilfeldigOrd() +
    "</p>" +
    "</br>" +
    '<button onclick="updateView()">Trykk på meg for et tilfeldig "ord"' +
    "</div>";
  appen.innerHTML = html;
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
