const navSlide = () => {
  const burguer = document.querySelector(".burguer-button");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burguer.addEventListener("click", () => {
    // Toggle Nav
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation){
          link.style.animation = '';
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    // Burguer Animation
    burguer.classList.toggle('toggle');
  });
};

const app = () => {
  navSlide();
};

app();
