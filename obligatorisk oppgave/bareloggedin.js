function loggIn(username, passord) {
  let brukerNavn = "KasperL";
  let password = "GetErFlott!";

  if (!(username === brukerNavn && passord === password))
    if (username === "" || passord === "") {
      return "mangler noe";
    } else if (username != brukerNavn || passord != password) {
      return "Feil";
    } else {
      return "error";
    }
  else {
    return "loggedin";
  }
}
