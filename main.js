//import from bookingmodule.js to test modal booking
//import bookingTimes from './bookingmodule.js';
//import modalSection from './bookingmodule.js';
import { default as modalSection1 } from './bookingAmodule.js';
import { createChallengeBox, runOpenMenu, runCloseMenu, runOpenAndClose } from './modules.js';
//Selectors
const menuBg = document.querySelector(".nav__mobile--bg");
const mobileMenu = document.querySelector(".nav__mobile--menu");
const hamburgerButton = document.querySelector(".nav__mobile--openMenu");
const closeMobileMenu = document.querySelector(".nav__mobile--closeMenu");
const queryHtmlEle = document.querySelector("html");
const hamburgerMenuLinks = document.querySelectorAll(".hamburgerLink");


//Open and close mobile menu
hamburgerButton.addEventListener("click", runOpenMenu);
closeMobileMenu.addEventListener("click", runCloseMenu);
hamburgerMenuLinks.forEach(link => {
  link.addEventListener("click", runCloseMenu);
});

///// FUNKTIONS \\\\\
// function runOpenMenu() {
//   queryHtmlEle.style.overflow = "hidden"
//   runOpenAndClose("flex");
// }

// function runCloseMenu() {
//   runOpenAndClose("none");
//   queryHtmlEle.style.removeProperty("overflow");
// }

// function runOpenAndClose(property) {
//   menuBg.style.display = property;
//   mobileMenu.style.display = property;
// }

function onlineLink(){
  const onlines = document.querySelectorAll(".Online");
  console.log(onlines.length)
  onlines.forEach(button =>{
    button.addEventListener('click', () => {
      window.location.replace('/filter.htm?online')

    })
  });
  console.log('online links done')
}
onlineLink()

function onsiteLink(){
  const onsites = document.querySelectorAll(".OnSite");
  console.log(onsites.length)
  onsites.forEach(button => {
    button.addEventListener('click', () => {
      window.location.replace('/filter.htm?onsite')

    })
    
  });
  console.log('onsite links done')
}
onsiteLink();

function seeAllChallengeLink(){
  document.querySelector("#seeAll").addEventListener('click', () => window.location.replace('./filter.htm'))
}
seeAllChallengeLink();

async function topThree() {
  const url = 'https://lernia-sjj-assignments.vercel.app/api/challenges';
  const response = await fetch(url);
  const data = await response.json();
  const sortedData = JSON.parse(JSON.stringify(data.challenges)).sort((x, y) => y.rating - x.rating);

  for (let i = 0; i < 3; i++) {
    const challengeBox = createChallengeBox(sortedData[i])
    document.querySelector('.main__slider').appendChild(challengeBox);
  };
}

topThree()

