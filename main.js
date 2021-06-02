const payment_form = document.querySelector("#payment_form");

payment_form.addEventListener('submit', function (event) {
  event.preventDefault();
  //alert("hola!");


  validateCard();
  validateTypeCard();
  validateCVC();
  validateFirstName();
  validateLastName();
  validateCity();
  validateAmount();
  validateState();
  validatePostalCode();
});

function validateCard() {
  let number_card = document.querySelector("#number_card");
  let regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
  if (!regex.test(number_card.value.trim())) {
    alert("Error, el numero de tarjeta no coincide con el formato");
  } else if (number_card.value.trim() === '') {
    alert("Error, el numero de tarjeta está vacio");
  }
}
function validateCVC() {
  let number_cvc = document.querySelector("#number_cvc");
  let regex_cvc = /^[0-9]{3,4}$/;
  if (number_cvc.value.trim() === '') {
    alert("Error, el CVC está vacio");
  } else if (!regex_cvc.test(number_cvc.value.trim())) {
    alert("Error, el CVC no coincide con el formato");
  }
}
function validateAmount() {
  let number_amount = document.querySelector("#number_amount");
  if (number_amount.value <= 0) {
    alert("Error, el campo amount debe ser mayor a 0");
  } else if (/^[0-9]*$/.test(number_amount.value) == false) {
    alert("Error, el campo amount debe ser numerico");
  }
}
function validateTypeCard() {
  let chk_master = document.querySelector("#mastercard");
  let chk_visa = document.querySelector("#visa");
  let chk_diners = document.querySelector("#diners_club");
  let chk_american = document.querySelector("#amex");

  let regex_visa = /^4[0-9]{12}(?:[0-9]{3})?$/;
  let regex_master = /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/;
  let regex_diners = /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/;
  let regex_american = /^3[47][0-9]{13}$/;

  if (regex_visa.test(number_card.value.trim())) {
    //alert("es una visa");
    chk_visa.checked = true;
  } else if (regex_master.test(number_card.value.trim())) {
    //alert("es una mastercard");
    chk_master.checked = true;
  } else if (regex_diners.test(number_card.value.trim())) {
    //alert("es una diners club");
    chk_diners.checked = true;
  } else if (regex_american.test(number_card.value.trim())) {
    //alert("es una american");
    chk_american.checked = true;
  }
}
function validateFirstName() {
  let txt_first_name = document.querySelector("#txt_first_name");

  if (txt_first_name.value.trim() === '') {
    alert("Error, el First name está vacio.");
  } else if (txt_first_name.value.trim().length < 3) {
    alert("Error, el First name debe ser minimo 3 caracteres.");
  } else if (/^[a-zA-Z]*$/.test(txt_first_name.value.trim()) == false) {
    alert("Error, el First name contiene numero.s");
  }
}
function validateLastName() {
  let txt_last_name = document.querySelector("#txt_last_name");

  if (txt_last_name.value.trim() === '') {
    alert("Error, el Last name está vacio.");
  } else if (txt_last_name.value.trim().length < 3) {
    alert("Error, el Last name debe ser minimo 3 caracteres.");
  } else if (/^[a-zA-Z]*$/.test(txt_last_name.value.trim()) == false) {
    alert("Error, el Last name contiene numeros.");
  }
}
function validateCity() {
  let txt_city = document.querySelector("#txt_city");
  if (txt_city.value.trim() === '') {
    alert("Error, el campo city está vacio.");
  } else if (txt_city.value.trim().length < 3) {
    alert("Error, el campo city debe ser minimo 3 caracteres.");
  } else if (/^[a-zA-Z]*$/.test(txt_city.value.trim()) == false) {
    alert("Error, el campo city contiene numeros.");
  }
}
function validateState() {
  let slc_state = document.querySelector("#slc_state");
  let opt_state = document.getElementsByTagName("option")[slc_state.selectedIndex].value;
  if (opt_state == '0') {
    alert("Error, debe seleccionar una opcion en el campo State");
  }
}
function validatePostalCode() {
  let txt_postal_code = document.querySelector("#txt_postal_code");
  if (txt_postal_code.value.trim() === '') {
    alert("Error, el campo Postal Code está vacio.");
  } else if (txt_postal_code.value.trim().length < 2) {
    alert("Error, el campo Postal Code debe ser minimo 2 caracteres.");
  } else if (/^[a-zA-Z0-9\-]*$/.test(txt_postal_code.value.trim()) == false) {
    alert("Error, el campo Postal Code contiene caracteres no permitidos.");
  }
}