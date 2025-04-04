class ValidateForm {
  constructor() {
    this.form = document.querySelector(".formulario");
    this.events();
  }

  events() {
    this.form.addEventListener("submit", (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const fields = this.checkFields();
    const password = this.validPassword();
    if (fields && password) alert("Formulário Enviado!");
  }

  checkFields() {
    const inputs = document.querySelectorAll(".validar");
    const errors = document.querySelectorAll(".error-text");
    let valid = true;

    for (let err of errors) {
      err.remove();
    }

    for (let field of inputs) {
      const label = field.previousElementSibling.innerText;

      if (!field.value) {
        this.createError(
          field,
          `* O campo ${label.slice(0, -1)} não pode estar em branco.`
        );
        valid = false;
      }

      if (field.classList.contains("cpf")) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains("usuario")) {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validPassword() {
    let valid = true;

    const password = document.querySelector(".senha");
    const repeatPassword = document.querySelector(".repetir-senha");

    if (password.value !== repeatPassword.value) {
      valid = false;
      this.createError(
        password,
        "* Campos senha e repetir senha precisa ser iguais"
      );
      this.createError(
        repeatPassword,
        "* Campos senha e repetir senha precisa ser iguais"
      );
    }

    if (password.value.length < 6 || password.value.length > 12) {
      this.createError(
        password,
        "* Senha precisa estar entre 6 e 12 caracteres."
      );
    }

    return valid;
  }

  validUser(field) {
    let valid = true;
    const userName = field.value;

    if (userName.length < 3 || userName.length > 12) {
      this.createError(field, "* Usuário precisa ter entre 3 e 12 caracteres");
      valid = false;
    }

    if (!userName.match(/[a-zA-Z0-9]+/g)) {
      this.createError(
        field,
        "* Nome do usuário precisa conter apenas letras ou números."
      );
      valid = false;
    }

    return valid;
  }

  validCPF(field) {
    const valid = new ValidaCPF(field.value);

    if (!valid.valida()) {
      this.createError(field, "* CPF Inválido");
      return false;
    }

    return true;
  }

  createError(field, msg) {
    const p = document.createElement("p");
    p.classList.add("error-text");
    p.innerHTML = msg;
    field.insertAdjacentElement("afterend", p);
  }
}

const validate = new ValidateForm();
console.log(validate);
