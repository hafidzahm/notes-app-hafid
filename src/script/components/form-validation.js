const formValidation = () => {
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  form.addEventListener("submit", (event) => event.preventDefault());

  const inputValidationHandler = (event) => {
    event.target.setCustomValidity("");
    if (event.target.validity.valueMissing) {
      event.target.setCustomValidity("Wajib diisi, jangan dikosongin yak!");
      return;
    }

    if (event.target.validity.tooShort) {
      event.target.setCustomValidity("Diisi minimal 3 karakter yak!");
      return;
    }
  };

  input.addEventListener("change", inputValidationHandler);
  input.addEventListener("invalid", inputValidationHandler);
  input.addEventListener("blur", (event) => {
    const isValid = event.target.validity.valid;
    const errorMessage = event.target.validationMessage;
    const connectedValidationEl = inputValidation
      ? document.getElementById("inputValidation")
      : null;

    if (connectedValidationEl && errorMessage && !isValid) {
      connectedValidationEl.innerText = errorMessage;
      console.log(errorMessage);
    } else {
      connectedValidationEl.innerText = "";
    }
  });
};

export default formValidation;
