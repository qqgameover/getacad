function epostCheck(epost) {
  let verdiEpost = epost.indexOf("@");
  let mellomRomEpost = epost.indexOf(" ");
  let punktumEpost = epost.indexOf(".");

  if (parseInt(verdiEpost) <= 1 || mellomRomEpost >= 1 || punktumEpost <= 1) {
    return false;
  } else if (parseInt(verdiEpost) >= 1) {
    return true;
  }
}
