// setting the body content below the header

const header = document.querySelector('.header');
const gridContainer = document.querySelector('.grid-container');

function setBodyMargin() {
  gridContainer.style.marginTop = header.offsetHeight + "px";
  console.log(gridContainer.style.marginTop);
}

setBodyMargin();

window.addEventListener("resize", setBodyMargin);

const selectedToggle = document.querySelectorAll('.button');
const filterLinks = document.querySelectorAll('.project-filter');
const allLinks = document.querySelectorAll('.project');
const all = document.querySelector('.all');
const commas = document.querySelectorAll('.comma');

// toggle
function clearFilters() {
    filterLinks.forEach((filter) => {
        filter.classList.remove("removed");
        filter.classList.remove("selected");
    });

    commas.forEach((comma) => comma.classList.remove("removed"));
    all.classList.add("removed");

    allLinks.forEach((link) => {
        link.classList.remove("removed");
    });
}

selectedToggle.forEach(el => el.addEventListener('click', event => {
    let oldSection = document.querySelector('.on-section');
    oldSection.classList.add('removed');
    oldSection.classList.remove('on-section');
    let newSection = document.querySelector('.section.' + event.target.classList[1]);
    newSection.classList.remove('removed');
    newSection.classList.add('on-section');

    document.querySelector('.on-button').classList.remove('on-button');
    event.target.classList.add('on-button');
    window.scrollTo(0, 0);
}));

// header hide/show

const body = document.body;
const nav = document.querySelector(".page-header nav");
const menu = document.querySelector(".page-header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down 
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains(scrollDown)
  ) {
    // up 
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});


// filters

filterLinks.forEach(el => el.addEventListener('mousemove', event => {
  let category = "." + event.target.classList[1];
  let links = document.querySelectorAll(category);
  links.forEach(link => link.classList.add("hover"));
}));

filterLinks.forEach(el => el.addEventListener('mouseleave', event => {
  let category = "." + event.target.classList[1];
  let links = document.querySelectorAll(category);
  links.forEach(link => link.classList.remove("hover"));
}));

filterLinks.forEach(el => el.addEventListener('click', event => {
  let category = "." + event.target.classList[1];
  
  if (category == ".all") { // clearing filters
      clearFilters();
  } else { // filtering
      let links = document.querySelectorAll(category);
      allLinks.forEach((link) => link.classList.add("removed"));
      links.forEach((link) => {
          link.classList.remove("removed");
          link.classList.remove("hover");
      });

      filterLinks.forEach((filter) => filter.classList.add("removed"));
      event.target.classList.add("selected");
      commas.forEach((comma) => comma.classList.add("removed"));
      event.target.classList.remove("removed");
      all.classList.remove("removed");
  }
}));

window.onload = (event) => {
  document.querySelector('.grid-container').classList.remove('hidden');
};