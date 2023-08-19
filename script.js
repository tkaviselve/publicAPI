const url = "https://jsonplaceholder.typicode.com/users";
const userContainer = document.getElementById("user-container");
let user = [];
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
  if (data.length > 0) {
    user = [...data];
    renderCards(user);
  }
}
fetchData();
function renderCards(data = []) {
  let cards = [];
  for (let i = 0; i < data.length; i++) {
    cards.push(createCard(data[i]));
  }
  userContainer.innerHTML = "";
  userContainer.append(...cards);
}
function createCard(data = {}) {
  let card = document.createElement("div");
  let title = document.createElement("h4");
  let subHeading1 = document.createElement("p");
  let subHeading2 = document.createElement("p");
  let subHeading3 = document.createElement("p");
  card.setAttribute("class", "card");
  const { name = "", email = "", address = "" } = data;
  title.innerText = name;
  subHeading1.innerText = email;
  subHeading2.innerText = address.street;
  subHeading3.innerText = address.city;
  card.append(title, subHeading1, subHeading2, subHeading3);
  return card;
}
