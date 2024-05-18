const menuBtn = document.querySelector(".menu__btn");
const link = document.querySelector(".header__link");
const list = document.querySelector(".header__list");
const restaurantsList = document.querySelector(".restaurants__list");
const dishesList = document.querySelector(".dishes__list");
const purchasesList = document.querySelector(".purchases__list");
const customersSay = document.querySelector(".customersay__list");
const swiperWrapper = document.querySelector(".swiper-wrapper");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  list.classList.toggle("active");
});

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const customersScroll = () => {
  const section = document.querySelector(".customers__list");
  if (isElementInViewport(section)) {
    section.classList.add("customers__animation");
    window.removeEventListener("scroll", customersScroll);
  }
};

window.addEventListener("scroll", customersScroll);
customersScroll();

const qualityScroll = () => {
  const section = document.querySelector(".quality__inner");
  console.log(section);
  if (isElementInViewport(section)) {
    section.classList.add("quality__animation");
    window.removeEventListener("scroll", qualityScroll);
  }
};
window.addEventListener("scroll", qualityScroll);
qualityScroll();

const restaurantScroll = () => {
  const section = document.querySelector(".restaurants__inner");
  if (isElementInViewport(section)) {
    section.classList.add("restaurants__animation");
    window.removeEventListener("scroll", restaurantScroll);
  }
};

window.addEventListener("scroll", restaurantScroll);
restaurantScroll();

const dishScroll = () => {
  const section = document.querySelector(".dishes__inner");
  if (isElementInViewport(section)) {
    section.classList.add("dishes__animation");
    window.removeEventListener("scroll", restaurantScroll);
  }
};
window.addEventListener("scroll", dishScroll);
dishScroll();

const restaurantsData = [
  {
    id: 1,
    imgageUrl: "./img/RestaurantImage3.jpg",
    title: "The Chicken King",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    saved: "./img/healthy-saved.svg",
  },
  {
    id: 2,
    imgageUrl: "./img/RestaurantImage2.jpg",
    title: "The Burger King",
    deliveryTime: "24min •",
    rating: 4.9,
    status: "Trending",
    saved: "./img/healthy-saved.svg",
  },
  {
    id: 3,
    imgageUrl: "./img/RestaurantImage1.jpg",
    title: "The Chicken King",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    saved: "./img/healthy-saved.svg",
  },
];

const createRestaurantsList = restaurantsData
  .map((restaurant) => {
    const statusClass = restaurant.status === "Healthy" ? "healthy" : "treding";
    return `
  <li class="restaurants__item">
  <img class="restaurants__img"  src="${restaurant.imgageUrl}" alt="image">
  <ul class="restaurants__list_2">
  <span class="restaurants__status ${statusClass}">${restaurant.status}</span>
  <h3 class="restaurants__h3">${restaurant.title}</h3>
  <div class="healhty__div">
  <div>
  <span class="restaurants__time">${restaurant.deliveryTime}</span>
  <span class="restaurants__reting">${restaurant.rating}</span>
  </div>
  <img class="restaurants__saved" src="${restaurant.saved}" alt="">
  </div>
  </ul>
</li>
`;
  })

  .join("");
restaurantsList.innerHTML = createRestaurantsList;

const dishesData = [
  {
    id: 1,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage1.jpg",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
  {
    id: 2,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage2.jpg",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Trending",
    price: "$19.99",
    saved: "",
  },
  {
    id: 3,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage3.jpg",
    title: "Swe Dish",
    deliveryTime: "34min •",
    rating: 4.9,
    status: "Supreme",
    price: "$19.99",
    saved: "",
  },
  {
    id: 4,
    imgageUrl2: "./img/icons/eatly-heart.svg",
    imgageUrl: "./img/FoodImage1.jpg",
    title: "Chicken Hell",
    deliveryTime: "24min •",
    rating: 4.8,
    status: "Healthy",
    price: "$12.99",
    saved: "",
  },
];

const createDishesList = dishesData
  .map((dish) => {
    return `
      <li class="dishes__item">
      <button class="dishes__heart__btn">
      <img class="dishes__img__heart"  src="${dish.imgageUrl2}" alt="image">
      </button>
      <img class="dishes__img"  src="${dish.imgageUrl}" alt="image">
      <div class="dishes__item__inner">
      <span class="dishes__status ${dish.status.toLowerCase()}">${
      dish.status
    }</span>
      <h3 class="dishes__title">${dish.title}</h3>
      <div class="time__wrapper">
      <span class="dishes__time">${dish.deliveryTime}</span>
      <span class="dishes__reting">${dish.rating}</span>
      </div>
      <div class="price__wrapper">
      <span class="dishes__price">${dish.price}</span>
      <button class="dishes__add__btn">+</button>
      </div>
      </div>
    </li>
    `;
  })

  .join("");
dishesList.innerHTML = createDishesList;

const purchasesData = [
  {
    id: 1,
    imgageUrl: "./img/FoodImage1.jpg",
    title: "Chicken Hell",
    time: "On The Way",
    endTime: "3:09 PM",
    saved: "",
  },
  {
    id: 2,
    imgageUrl: "./img/FoodImage2.jpg",
    title: "Swe Dish",
    time: "Delivered",
    endTime: "Yesterday",
    saved: "",
  },
  {
    id: 3,
    imgageUrl: "./img/FoodImage3.jpg",
    title: "Swe Dish",
    time: "Cancelled",
    endTime: "Yesterday",
    saved: "",
  },
];

const createPurchasesList = purchasesData
  .map((purchas) => {
    const timeClass = purchas.time === "Cancelled" ? "cancelled" : "usuall";
    return `
      <li class="purchases__item">
      <img class="purchases__img"  src="${purchas.imgageUrl}" alt="image">
      <div class="purchases__item__inner">
      <h3 class="purchases__title">${purchas.title}</h3>
      <div class="purchases__wrapper">
      <span class=" ${timeClass} purchases__time ">${purchas.time}</span>
    </div>
    <span class="purchases__endtime">${purchas.endTime}</span>
      </div>
    </li>
    `;
  })

  .join("");
purchasesList.innerHTML = createPurchasesList;


const swiperData = [
  {
    id: 1,
    imgageUrl: "./img/customersa-haed.jpg",
    title: "Alexander R.",
    time: "01 Year With Us ",
    imgageUrl2: "./img/icons/Pathcustomersay.svg",
    stroke:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    star: "./img/icons/customersayStars.svg",
  },

  {
    id: 2,
    imgageUrl: "./img/customersa-haed.jpg",
    title: "Alexander R.",
    time: "01 Year With Us ",
    imgageUrl2: "./img/icons/Pathcustomersay.svg",
    stroke:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    star: "./img/icons/customersayStars.svg",
  },

  {
    id: 3,
    imgageUrl: "./img/customersa-haed.jpg",
    title: "Alexander R.",
    time: "01 Year With Us ",
    imgageUrl2: "./img/icons/Pathcustomersay.svg",
    stroke:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    star: "./img/icons/customersayStars.svg",
  },
  {
    id: 4,
    imgageUrl: "./img/customersa-haed.jpg",
    title: "Alexander R.",
    time: "01 Year With Us ",
    imgageUrl2: "./img/icons/Pathcustomersay.svg",
    stroke:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    star: "./img/icons/customersayStars.svg",
  },
  {
    id: 5,
    imgageUrl: "./img/customersa-haed.jpg",
    title: "Alexander R.",
    time: "01 Year With Us ",
    imgageUrl2: "./img/icons/Pathcustomersay.svg",
    stroke:
      "“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”",
    star: "./img/icons/customersayStars.svg",
  },
];

const createSwiperList = swiperData
  .map((swiper) => {
    return `
    <div class="swiper-slide">
      <div class="swiper__item">
      <div class="customersay__wrapper">
      <img class="swiper__img"  src="${swiper.imgageUrl}" alt="image">
      <div class="swiper__item__inner">
          <h3 class="swiper__title">${swiper.title}</h3>
          <span class="swiper__p">${swiper.time}</span>
        </div>
        </div>
        <span class="swiper__stroke">${swiper.stroke}</span>
        <img class="swiper__star"   src="${swiper.star}" alt="image">
      </div>
    </div>
    `;
  })

  .join("");
swiperWrapper.innerHTML = createSwiperList;

const newSwiper = new Swiper(".mySwiper", {
  breakpoints: {
    368: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});