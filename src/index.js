import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";

const breedSelect = document.querySelector(".breed-select");
const loader = document.querySelector(".loader");
const error = document.querySelector(".error");
const catInfo = document.querySelector(".cat-info");

function populateBreedOptions(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement("option");
    option.value = breed.id;
    option.text = breed.name;
    breedSelect.appendChild(option);
  });
}

// Function to display cat information
function displayCatInfo(cat) {
  catInfo.innerHTML = `
    <img src="${cat[0].url}" alt="Cat Image" />
    <h3>${cat[0].breeds[0].name}</h3>
    <p><b>Description:</b> ${cat[0].breeds[0].description}</p>
    <p><b>Temperament:</b> ${cat[0].breeds[0].temperament}</p>
  `;
}

// Function to handle the breed select change event
function handleBreedSelectChange() {
  const breedId = breedSelect.value;
  loader.style.display = "block";
  catInfo.style.display = "none";
  error.style.display = "none";

  fetchCatByBreed(breedId)
    .then(cat => {
      displayCatInfo(cat);
      loader.style.display = "none";
      catInfo.style.display = "block";
    })
    .catch(() => {
      loader.style.display = "none";
      error.style.display = "block";
    });
}

// Event listener for breed select change event
breedSelect.addEventListener("change", handleBreedSelectChange);

// Fetch breeds and populate the breed select options on page load
loader.style.display = "block";
fetchBreeds()
  .then(breeds => {
    populateBreedOptions(breeds);
    loader.style.display = "none";
    breedSelect.style.display = "block";
  })
  .catch(() => {
    loader.style.display = "none";
    error.style.display = "block";
  });










// const BASE_URL = "https://api.thecatapi.com/v1";
// const END_POINT_BREEDS = "/breeds";
// const END_POINT_IMAGES_SEARCH = "/images/search";
// const API_KEY = "live_umVm6hCSVptKOGJfjECOkLIjHhql4q0og41A1ClkOkjBFq9MNjViDOHD4QNDsUti";
// const select = document.querySelector(".breed-select");

// select.addEventListener("change", onChange);

// function getBreed() {
//     const URL = `${BASE_URL}${END_POINT_BREEDS}`;
//     return fetch(URL).then((resp) => {
//         console.log(resp);
//         if (!resp.ok) { // resp.ok === false
//             throw new Error(resp.statusText);
//         }
//         return resp.json();
//     });
// }


// function onChange(breeds) {
//  breeds.forEach(breed => {
//     const option = document.createElement('option');
//     option.value = breed.id;
//     option.textContent = breed.name;
//     breedSelect.appendChild(option);
//  });
    
// }




