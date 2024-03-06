let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function(event) {
  event.preventDefault(); // submete o formulario sem recarregar a pagina
  if(!elementoFormulario.checkValidity()){
    alert("por favor, preencha todos os campos da transação");
    return;
  }
});