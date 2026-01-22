// Elementi da HTML

const emailList = document.getElementById("email-list");

//Api

const emailGenerator = "https://flynn.boolean.careers/exercises/api/random/mail";

for (let i = 0; i < 10; i++) {
  axios.get(emailGenerator).then((response) => {
    emailList.innerHTML += `<li>${response.data.response}</li>`;
  });
}
