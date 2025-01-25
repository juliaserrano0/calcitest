// Gestion du menu déroulant de langue
function toggleLanguageDropdown(version) {
  const dropdownId = version === 'mobile' ? 'languageDropdownMobile' : 'languageDropdownDesktop';
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
}

// Masquer le menu déroulant si clic en dehors
document.addEventListener("click", function (event) {
  const mobileDropdown = document.getElementById("languageDropdownMobile");
  const desktopDropdown = document.getElementById("languageDropdownDesktop");
  const languageSelectors = document.querySelectorAll(".language-selector");

  let isClickInside = false;
  languageSelectors.forEach(selector => {
    if (selector.contains(event.target)) {
      isClickInside = true;
    }
  });

  if (!isClickInside) {
    if (mobileDropdown) mobileDropdown.style.display = "none";
    if (desktopDropdown) desktopDropdown.style.display = "none";
  }
});

// Changement de langue
function changeLanguage(lang) {
  alert('Langue changée en ' + (lang === 'fr' ? 'Français' : 'English'));
  const mobileDropdown = document.getElementById("languageDropdownMobile");
  const desktopDropdown = document.getElementById("languageDropdownDesktop");
  if (mobileDropdown) mobileDropdown.style.display = "none";
  if (desktopDropdown) desktopDropdown.style.display = "none";
}

// Affichage du contenu des animaux
function showContent(animal, event) {
  event.preventDefault();
  const contentSection = document.getElementById("content-section");
  if (contentSection) {
    let content = "";
    
    switch (animal) {
      case "mouton":
        content = `
          <div class="animal-content" data-aos="fade-up" data-aos-duration="800">
            <img src="images/Mouton.png" alt="Mouton" data-aos="zoom-in" data-aos-duration="800">
            <p data-aos="fade-left" data-aos-duration="800">Tout ce dont vous avez besoin afin de soigner vos moutons.</p>
          </div>
        `;
        break;
      case "bovins":
        content = `
          <div class="animal-content" data-aos="fade-up" data-aos-duration="800">
            <img src="images/Bovin.png" alt="Bovins" data-aos="zoom-in" data-aos-duration="800">
            <p data-aos="fade-left" data-aos-duration="800">Nous avons toute une panoplie de produits bovins pour les vaches laitières ou de viande.</p>
          </div>
        `;
        break;
      case "poules":
        content = `
          <div class="animal-content" data-aos="fade-up" data-aos-duration="800">
            <img src="images/Poule.png" alt="Poules" data-aos="zoom-in" data-aos-duration="800">
            <p data-aos="fade-left" data-aos-duration="800">Pondeuses ou poules de chair, nous vous fournirons des produits de qualité afin d’accroître votre rendement.</p>
          </div>
        `;
        break;
      case "dindes":
        content = `
          <div class="animal-content" data-aos="fade-up" data-aos-duration="800">
            <img src="images/Dinde.png" alt="Dindes" data-aos="zoom-in" data-aos-duration="800">
            <p data-aos="fade-left" data-aos-duration="800">Tout ce dont la dinde a besoin afin de produire une chair de bonne qualité.</p>
          </div>
        `;
        break;
      default:
        content = "";
    }

    contentSection.innerHTML = content;
    contentSection.classList.add("visible");
    AOS.init();
  }
}

// Gestion du bouton flottant de contact
const floatingButton = document.querySelector(".floating-contact-button");
if (floatingButton) {
  floatingButton.addEventListener("click", function () {
    window.location.href = "contact.html";
  });
}

// Gestion du footer (animation lors du défilement)
window.addEventListener("scroll", function () {
  const footer = document.querySelector("footer");
  const scrollPosition = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  if (footer) {
    if (documentHeight - (scrollPosition + windowHeight) < 100) {
      footer.classList.add("visible");
    } else {
      footer.classList.remove("visible");
    }
  }
});

// Gestion du menu hamburger
function toggleMenu() {
  const navContainer = document.querySelector('.nav-container');
  const hamburger = document.querySelector('.hamburger');
  navContainer.classList.toggle('active');
  hamburger.classList.toggle('active');
}

// Initialisation au chargement de la page
document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.querySelector('.nav-container');
  if (navContainer) {
    navContainer.classList.remove('active');
  }
});

// Gestion du diaporama (slideshow)
let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 8000); // Change de slide toutes les 8 secondes
}

document.addEventListener("DOMContentLoaded", function () {
  showSlides();
});

// Initialisation de Swiper (carrousel)
const swiper = new Swiper('.swiper-container', {
  loop: true,
  grabCursor: true,
  spaceBetween: 10,
  slidesPerView: 1,
  centeredSlides: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 4 },
  },
});