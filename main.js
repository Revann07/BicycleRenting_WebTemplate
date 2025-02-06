const bikeData = [
  {
    name: "DualSport2",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-1.png",
    tag: "Free Cancellation",
  },
  {
    name: "MadoneSL5",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-2.png",
    tag: "Free Cancellation",
  },
  {
    name: "FuelEX5-24",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-3.png",
    tag: "Free Cancellation",
  },
  {
    name: "FX1 21",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-4.png",
    tag: "Free Cancellation",
  },
  {
    name: "MadoneSL5",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-5.png",
    tag: "Free Cancellation",
  },
  {
    name: "MadoneSL7",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-6.png",
    tag: "Free Cancellation",
  },
  {
    name: "MadoneSL7",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-7.png",
    tag: "Free Cancellation",
  },
  {
    name: "MadoneSLR7",
    type: "ADVENTURE",
    price: 17,
    image: "images/bike-8.png",
    tag: "Free Cancellation",
  },
];
// Fuction to create bike box element 
const createBikeBox = (bike) => `
 <div class="bike-box">
                <img src="${bike.image}" alt="" class="box-img">
                <div class="title-price">
                    <div class="title-data">
                        <h2>${bike.name}</h2>
                        <p>${bike.type}</p>
                    </div>
                    <h3 class="bike-price">$${bike.price}<span>/hours</span></h3>
                </div>
                <a href="#" class="book-btn">Book Bike</a>
                 <span class="tag">${bike.tag}</span>
            </div>
`;

const bikeContent = document.querySelector('.bikes-content');
// create bike box and show in bike content div
bikeData.forEach((bike) =>{
  const bikeBoxHtml = createBikeBox(bike);
  bikeContent.insertAdjacentHTML('beforeend',bikeBoxHtml);
})
// swiper
var swiper = new Swiper(".destination-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  
  breakpoints: {
    280: {
      slidesPerView: 1,
      spaceBetween: 10, 
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10, 
    },
    510: {
      slidesPerView: 2,
      spaceBetween: 15, 
    },
    750: {
      slidesPerView: 3,
      spaceBetween: 10, 
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 20, 
    },
  }
});


// Menu
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  navbar.classList.toggle("open-menu")
  menu.classList.toggle("move");
}; 
