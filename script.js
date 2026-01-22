// Elementi da HTML

const emailList = document.getElementById("email-list");
const errorMessage = document.getElementById("error-message");
const finallyMessage = document.getElementById("finally-message");
const newEmailButton = document.getElementById("new-emails-btn");

//Api

const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mail";
let c = 0;

for (let i = 0; i < 10; i++) {
  axios
    .get(emailGenerator)
    .then((response) => {
      emailList.innerHTML += `<li>${response.data.response}</li>`;
    })
    .catch((error) => {
      errorMessage.classList.remove("d-none");
    })
    .finally(() => {
      c++;
      if (c >= 10) {
        finallyMessage.classList.remove("d-none");
      }
    });
}

newEmailButton.addEventListener("click", () => {
  emailList.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    axios
      .get(emailGenerator)
      .then((response) => {
        emailList.innerHTML += `<li>${response.data.response}</li>`;
      })
      .catch((error) => {
        errorMessage.classList.remove("d-none");
      })
      .finally(() => {
        c++;
        if (c >= 10) {
          finallyMessage.classList.remove("d-none");
        }
      });
  }
});
