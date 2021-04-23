import { htmlGenerator } from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogName, dogLink) {
  const a = document.createElement('a');
  a.innerHTML = dogName;
  a.href = dogLink;
  const li = document.createElement('li');
  li.classList.add('dog-link');
  li.append(a);
  return li;
}

function attachDogLinks() {
  const dogLinks = [];

  for (let k in dogs) {
    const dogLink = dogLinkCreator(k, dogs[k]);
    dogLinks.push(dogLink);
  }

  dogLinks.forEach( function(li) {
    const ul = document.querySelector("ul");

    ul.append(li);
    debugger
  });
}
const dogListEl = document.querySelector(".drop-down-dog-list");
htmlGenerator(attachDogLinks(), dogListEl);