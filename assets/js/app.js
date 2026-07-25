// ===========================
// ヘッダー
// ===========================

const header = document.querySelector(".header");
const menuButton = document.getElementById("menuButton");
const headerNav = document.querySelector(".header-nav");


// ===========================
// ギャラリーの写真一覧
// ===========================

const galleries = {

    house1: [
        "../assets/image/house1/1.jpeg",
        "../assets/image/house1/2.jpeg",
        "../assets/image/house1/3.jpeg",
        "../assets/image/house1/4.jpg",
        "../assets/image/house1/5.jpg"
    ],

    house2: [
    "../assets/image/house2/23.JPG",
    "../assets/image/house2/24.JPG",
    "../assets/image/house2/25.JPG",
    "../assets/image/house2/26.JPG",
    "../assets/image/house2/21.JPG",
    "../assets/image/house2/22.JPG"
],

    house3: [
        "../assets/image/house3/31.JPG",
        "../assets/image/house3/32.JPG"
    ],

    house4: [
        "../assets/image/house4/41.jpg",
        "../assets/image/house4/42.jpg",
        "../assets/image/house4/43.jpeg"
    ],

    house5: [
    "../assets/image/house5/51.JPG",
    "../assets/image/house5/52.JPG",
    "../assets/image/house5/53.JPG",
    "../assets/image/house5/54.JPG",
    "../assets/image/house5/55.JPG",
    "../assets/image/house5/56.JPG"
],

    house6: [
        "../assets/image/house6/61.JPG",
        "../assets/image/house6/62.JPG"
    ],

    house7: [
        "../assets/image/house7/71.JPG",
        "../assets/image/house7/72.JPG",
        "../assets/image/house7/73.JPG",
        "../assets/image/house7/74.JPG"
    ],

    house8: [
        "../assets/image/house8/81.JPG"
    ]

};


let currentGallery = [];
let currentIndex = 0;


// ===========================
// スクロール時
// ===========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 550) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});


// ===========================
// ハンバーガーメニュー
// ===========================

menuButton.addEventListener("click", () => {

    headerNav.classList.toggle("open");
    header.classList.toggle("menu-open");

});


// ===========================
// 施工事例ギャラリー
// ===========================

const galleryModal = document.getElementById("galleryModal");
const galleryMainImage = document.getElementById("galleryMainImage");
const workLinks = document.querySelectorAll(".work-link");
const closeButton = document.querySelector(".gallery-close");
const prevButton = document.querySelector(".gallery-prev");
const nextButton = document.querySelector(".gallery-next");
const galleryThumbnails = document.querySelector(".gallery-thumbnails");


// 写真をクリック
workLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const galleryName = this.dataset.gallery;

        currentGallery = galleries[galleryName];

        if (!currentGallery || currentGallery.length === 0) {
    alert("写真を準備中です。");
    return;
}

        currentIndex = 0;

        galleryMainImage.src = currentGallery[currentIndex];
        galleryMainImage.alt = this.querySelector("img").alt;

        createThumbnails();

        galleryModal.style.display = "flex";

    });

});


// ×で閉じる
closeButton.addEventListener("click", function () {

    galleryModal.style.display = "none";

});


// 背景クリックで閉じる
galleryModal.addEventListener("click", function (e) {

    if (e.target === galleryModal) {

        galleryModal.style.display = "none";

    }

});

// 次の写真
nextButton.addEventListener("click", function () {

    if (currentGallery.length === 0) return;

    currentIndex++;

    if (currentIndex >= currentGallery.length) {
        currentIndex = 0;
    }

    galleryMainImage.src = currentGallery[currentIndex];
createThumbnails();

});

// 前の写真
prevButton.addEventListener("click", function () {

    if (currentGallery.length === 0) return;

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentGallery.length - 1;
    }

    galleryMainImage.src = currentGallery[currentIndex];
    createThumbnails();

});

// ===========================
// サムネイルを表示
// ===========================

function createThumbnails() {

    galleryThumbnails.innerHTML = "";

    currentGallery.forEach((image, index) => {

        const thumb = document.createElement("img");

        thumb.src = image;
        thumb.classList.add("gallery-thumbnail");

        if (index === currentIndex) {
            thumb.classList.add("active");
        }

        thumb.addEventListener("click", function () {

            currentIndex = index;
            galleryMainImage.src = currentGallery[currentIndex];

            createThumbnails();

        });

        galleryThumbnails.appendChild(thumb);

    });

}