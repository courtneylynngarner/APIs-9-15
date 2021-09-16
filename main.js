const { default: axios } = require("axios");

let button = document.querySelector("#button-1");

function buttonClicked() {
  console.log("Button clicked");
  axios.get("https://swapi.dev/api/planets?search=Alderaan").then((res) => {
    console.log(res.data.results);
  });

  let alderaanList = res.data.results[0];
  console.log(alderaanList.residents);

  let residentArr = alderaanList.residents;

  console.log(residentArr);

  for (i = 0; i < residentArr.length; i++) {
    axios.get(residentArr[i]).then((res) => {
      console.log(res.data.name);

      let h2 = document.createElement("div");
      h2.innerHTML = `<h2>${res.data.name}</h2>`;
      h2.style.textShadow = "2px, 2px, 2px";
      body.appendChild(h2);
    });
  }
}

button.addEventListener("click", buttonClicked);
