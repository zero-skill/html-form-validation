const payment_form = document.querySelector("#payment_form");

payment_form.addEventListener('submit', function (event){
event.preventDefault();
//alert("hola!");


validateCard();
});

function validateCard(){
    let number_card = document.querySelector("#number_card");
    let regex = /[0-9]/
    if (number_card.value===''||!regex.test(number_card.value)) {
      alert("error") ; 
    }
}
