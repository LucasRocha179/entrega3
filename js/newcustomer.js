document.addEventListener("DOMContentLoaded", () => {
    $(document).ready(function() {
        $('#telefone').mask('(00) 0000-0000');
        // $('#cep').mask('00000-000');
    });
});

function navigate(page) {
  window.location = `../${page}.html`;
}

function validate() {
  const form = document.querySelector("form");
  const nomeInput = form.querySelector("#nome");
  const emailInput = form.querySelector('input[type="email"]');
  const cidadeInput = form.querySelector("#cidade");
  const enderecoInput = form.querySelector("#endereco");
  const telefoneInput = form.querySelector("#telefone");

  if (!nomeInput.value) {
    alert("Por favor, preencha o campo nome completo.");
    return;
  }

  if (!emailInput.value) {
    alert("Por favor, preencha o campo email.");
    return;
  }

  if (!cidadeInput.value) {
    alert("Por favor, preencha o campo cidade.");
    return;
  }

  if (!enderecoInput.value) {
    alert("Por favor, preencha o campo endereço.");
    return;
  }

  if (!telefoneInput.value) {
    alert("Por favor, preencha o campo telefone.");
    return;
  }

  form.submit();
  this.navigate("customers");
}
