// Elementi da HTML

const emailList = document.getElementById("email-list");
const errorMessage = document.getElementById("error-message");
const finallyMessage = document.getElementById("finally-message");
const newEmailButton = document.getElementById("new-emails-btn");

//Api

const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mail";

//Generazione email

emailGeneration(10);

newEmailButton.addEventListener("click", () => {
  emailGeneration(10);
});

//Funzioni

function emailGeneration(numeroEmail) {
  emailList.innerHTML = "";
  finallyMessage.classList.add("d-none");

  let c = 0;

  for (let i = 0; i < numeroEmail; i++) {
    axios
      .get(emailGenerator)
      .then((response) => {
        emailList.innerHTML += `<li class="list-group-item">${response.data.response}</li>`;
      })
      .catch((error) => {
        errorMessage.classList.remove("d-none");
        newEmailButton.addEventListener("click", () => {
          emailGeneration(10);
        });
      })
      .finally(() => {
        c++;
        if (c >= numeroEmail) {
          finallyMessage.classList.remove("d-none");
        }
      });
  }
}
