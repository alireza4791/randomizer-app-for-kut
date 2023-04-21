const loginForm = document.querySelector("form");

const submitForm = () => {
//   fetch("https://massively.herokuapp.com/location", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     }),
//   })
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => console.log(data));
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitForm();
  // handle submit
});
