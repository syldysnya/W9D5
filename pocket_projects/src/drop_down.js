const dogListEl = document.querySelector(".drop-down-dog-list");
const nav = document.querySelector(".drop-down-dog-nav");

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

  return dogLinks;
}

function handleEnter() {
  dogListEl.style.display = 'block';
  
}

function handleLeave() {
  dogListEl.style.display = 'none';
}

const htmlGenerator = (string, htmlElement) => {
    string.forEach( function(li) {
      htmlElement.append(li);
    });
};


nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave)

htmlGenerator(attachDogLinks(), dogListEl);