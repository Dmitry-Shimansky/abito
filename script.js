const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWrapper = document.querySelector(".content-main__list");

const cardArray = [
    {
        id: 0,
        title: "ПВХ материалы 1-й сорт",
        price: "170 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    },
    {
        id: 1,
        title: "ПВХ материалы 2-й сорт",
        price: "171 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    },
    {
        id: 2,
        title: "ПВХ материалы 3-й сорт",
        price: "172 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    },
    {
        id: 3,
        title: "ПВХ материалы 4-й сорт",
        price: "173 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    },
    {
        id: 4,
        title: "ПВХ материалы 5-й сорт",
        price: "174 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    },
    {
        id: 5,
        title: "ПВХ материалы 6-й сорт",
        price: "175 ₽",
        address: "Казань, р-н Вахитовский",
        date: "10 июля 11:39",
        img: "./image/card-image.png"
    }
];

const render = (cardList) => {
    cardWrapper.innerHTML = "";

    cardList.forEach((item) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="card-image">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>
            </a>
        `)
    });
};

const filteredArray = (array, value) => {

    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value);
    });
};

cardWrapper.style.justifyContent = "flex-start";
cardWrapper.style.rowGap = "normal";
cardWrapper.style.gap = "30px";

render(cardArray);

searchBtn.addEventListener("click", () => {
    render(filteredArray(cardArray, searchInput.value));
});