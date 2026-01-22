// Elementi da HTML

const emailList = document.getElementById("email-list");
const errorMessage = document.getElementById("error-message");

//Api

const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mails";

for (let i = 0; i < 10; i++) {
  axios
    .get(emailGenerator)
    .then((response) => {
      emailList.innerHTML += `<li>${response.data.response}</li>`;
    })
    .catch((error) => {
      errorMessage.classList.remove("d-none");
    })
    .finally(() => {});
}
