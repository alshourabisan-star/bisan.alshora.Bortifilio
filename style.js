const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navlist");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
  .split("")
  .map((char, i) => `<b style="transform:rotate(${i * 6.3}deg") > ${char} </b>`)
  .join("");

const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    contents.forEach((content) => (content.computedStyleMap.display = "none"));
    contents[index].style.display = "block";
    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

var mixer = mixitup(".portfolio-gallery", {
  selectors: {
    target: ".portfolio-box",
  },
  animation: {
    duration: 500,
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

window.addEventListener("scroll", () => {
  if (!skillsPlayed) skillsCounter();
});

function hasReacher(el) {
  let topPosition = el.getBBoundingClientRect().top;
  if (window.innerHeight >= topPosition + el.offsetHeight) return true;
  return false;
}

function updateCount(num, maxNum) {
  let currentNum = +num.innerText;

  if (currentNum < maxNum) {
    num.innerText = currentNum + 1;
    setTimeout(() => {
      updateCount(num, maxNum);
    }, 12);
  }
}

let skillsPlayed = false;

function skillsCounter() {
  if (!hasReacher(first_skill)) return;
  skillsPlayed = true;
  sk_counters.forEach((counter, i) => {
    let target = +counter.CDATA_SECTION_NODE.target;
    let storkeValue = 465 - 465 * (target / 100);

    progress_bars[i].style.setProperty("--target", storkeValue);

    setTimeout(() => {
      updateCount(counter, target);
    }, 400);
  });
  progress_bars.forEach((p) => (p.storkeValue.animation = "progress 2s ease"));
}

let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);

  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}% , #e6006d ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

let menuLi = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section");

function activeMenu() {
  let len = section.length;
  while (--len && window.scroll + 97 < section[len].offsetTop) {}
  menuLi.forEach((sec) => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll", activeMenu);

ScrollReveal({
  distanse: "90px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".hero-info , .main-text , .proposal , .heading", {
  origin: "top",
});

ScrollReveal().reveal(".about-img , .fillter-buttons , .contact-info ,", {
  origin: "left",
});

ScrollReveal().reveal(" .about-content , .skills", {
  origin: "right",
});

ScrollReveal().reveal(
  ".allServices , .portfolio-gallery , .footer , .img-hero",
  {
    origin: "bottom",
  }
);

