const scrollContainer = document.querySelector(".scrollsection");
const leftButton = document.querySelector(".leftButton");
const rightButton = document.querySelector(".rightButton");


rightButton.addEventListener("click",()=>{
    // scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft += 650;

})

leftButton.addEventListener("click", ()=>{
    // scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -= 650;
})

// header Scrolling Script..............

window.addEventListener("scroll", ()=>{
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// ........ Hamburger Menu Scripting ............
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const cross = document.querySelector(".cross i");
const menuLines = document.querySelector(".menuLines i");
const menu = document.querySelector(".menuLines");
hamburgerMenu.classList.add("hidden")
cross.addEventListener("click",(e)=>{
    hamburgerMenu.classList.add("hidden");
    menu.classList.remove("hidden");
})

menuLines.addEventListener("click",(e)=>{
    hamburgerMenu.classList.remove("hidden");
    // menuLines.classList.add("hidden");
    menu.classList.add("hidden");

    
})


// .......... Testimonial2 Script ...............

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// departured .......

! function() {
  "use strict";
  let e = (e, t = !1) => (e = e.trim(), t) ? [...document.querySelectorAll(e)] : document.querySelector(e),
      t = (t, l, i, o = !1) => {
          let s = e(l, o);
          s && (o ? s.forEach(e => e.addEventListener(t, i)) : s.addEventListener(t, i))
      },
      l = (e, t) => {
          e.addEventListener("scroll", t)
      },
      i = e("#navbar .scrollto", !0),
      o = () => {
          let t = window.scrollY + 200;
          i.forEach(l => {
              if (!l.hash) return;
              let i = e(l.hash);
              i && (t >= i.offsetTop && t <= i.offsetTop + i.offsetHeight ? l.classList.add("active") : l.classList.remove("active"))
          })
      };
  window.addEventListener("load", o), l(document, o);
  let s = t => {
          let l = e("#header"),
              i = l.offsetHeight;
          l.classList.contains("header-scrolled") || (i -= 20);
          let o = e(t).offsetTop;
          window.scrollTo({
              top: o - i,
              behavior: "smooth"
          })
      },
      a = e("#header");
  if (a) {
      let n = () => {
          window.scrollY > 100 ? a.classList.add("header-scrolled") : a.classList.remove("header-scrolled")
      };
      window.addEventListener("load", n), l(document, n)
  }
  let r = e(".back-to-top");
  if (r) {
      let c = () => {
          window.scrollY > 100 ? r.classList.add("active") : r.classList.remove("active")
      };
      window.addEventListener("load", c), l(document, c)
  }
  t("click", ".mobile-nav-toggle", function(t) {
      e("#navbar").classList.toggle("navbar-mobile"), this.classList.toggle("bi-list"), this.classList.toggle("bi-x")
  }), t("click", ".navbar .dropdown > a", function(t) {
      e("#navbar").classList.contains("navbar-mobile") && (t.preventDefault(), this.nextElementSibling.classList.toggle("dropdown-active"))
  }, !0), t("click", ".scrollto", function(t) {
      if (e(this.hash)) {
          t.preventDefault();
          let l = e("#navbar");
          if (l.classList.contains("navbar-mobile")) {
              l.classList.remove("navbar-mobile");
              let i = e(".mobile-nav-toggle");
              i.classList.toggle("bi-list"), i.classList.toggle("bi-x")
          }
          s(this.hash)
      }
  }, !0), window.addEventListener("load", () => {
      window.location.hash && e(window.location.hash) && s(window.location.hash)
  }), new Swiper(".testimonials-slider", {
      speed: 600,
      loop: !0,
      autoplay: {
          delay: 5e3,
          disableOnInteraction: !1
      },
      slidesPerView: "auto",
      pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: !0
      },
      breakpoints: {
          320: {
              slidesPerView: 1,
              spaceBetween: 20
          },
          1200: {
              slidesPerView: 2,
              spaceBetween: 20
          }
      }
  }), window.addEventListener("load", () => {
      let l = e(".portfolio-container");
      if (l) {
          let i = new Isotope(l, {
                  itemSelector: ".portfolio-item",
                  layoutMode: "fitRows"
              }),
              o = e("#portfolio-flters li", !0);
          t("click", "#portfolio-flters li", function(e) {
              e.preventDefault(), o.forEach(function(e) {
                  e.classList.remove("filter-active")
              }), this.classList.add("filter-active"), i.arrange({
                  filter: this.getAttribute("data-filter")
              }), i.on("arrangeComplete", function() {
                  AOS.refresh()
              })
          }, !0)
      }
  }), GLightbox({
      selector: ".portfolio-lightbox"
  }), new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: !0,
      autoplay: {
          delay: 5e3,
          disableOnInteraction: !1
      },
      pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: !0
      }
  }), window.addEventListener("load", () => {
      AOS.init({
          duration: 1e3,
          easing: "ease-in-out",
          once: !0,
          mirror: !1
      })
  }), new PureCounter
}();
