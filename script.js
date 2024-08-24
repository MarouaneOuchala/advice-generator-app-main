const api = "https://api.adviceslip.com/advice";
const dice = document.getElementById('icon');

dice.addEventListener('click', getAdvice);
function getAdvice() {
  fetch(api)
    .then((response) => {
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error("can't get advice");
      }
      return response.json(); // Parse the JSON data
    })
    .then((data) => {
      // Access the specific advice text
      const advice = data.slip.advice;
      const id = data.slip.id;

      // Select the container where data will be displayed
      const adv = document.getElementById("adv");
      const num = document.getElementById("num");

      // Display the advice text
      adv.innerText = `“ ${advice} ”`;
      num.innerText = `Advice #${id}`;

      console.log(advice);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
