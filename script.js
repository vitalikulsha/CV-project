/* Experience */

const experienceList = document.querySelectorAll(".card");
const experienceBtn = document.querySelector(".experience-btn");

experienceBtn.addEventListener("click", function () {
    if (experienceBtn.classList.contains("hide-btn")) {
        for (let i = 3; i < experienceList.length; i++) {
            experienceList[i].classList.add("hide");
        }
        experienceBtn.innerHTML = "Показать еще";
        experienceBtn.classList.remove("hide-btn");
    }
    let index = 0;
    for (let i = 0; i < experienceList.length; i++) {
        if (experienceList[i].classList.contains("hide")) {
            experienceList[i].classList.remove("hide");
            index = i;
            break;
        }
    };
    if (index == (experienceList.length - 1)) {
        experienceBtn.innerHTML = "Скрыть";
        experienceBtn.classList.add("hide-btn");
    }
});

/* Portfolio */

const portfolioCards = [
    {
        text: "Проект душевой кабинки Klassik, выполнен в Solid Works",
        imgs: [
            {
                img: "./assets/images/projects/project-dushkab-klassik.jpg",
                alt: "klassik"
            },
            {
                img: "./assets/images/projects/project-dushkab-klassik-2d.jpg",
                alt: "klassik"
            }
        ]
    },
    {
        text: "Проект душевой кабинки Moderne, выполнен в Solid Works",
        imgs: [
            {
                img: "./assets/images/projects/project-dushkab-moderne.jpg",
                alt: "moderne"
            }, {
                img: "./assets/images/projects/project-dushkab-moderne-2d.jpg",
                alt: "moderne"
            }
        ]
    },
    {
        text: "Проекты из листового металла под последующее написание управляющих программ для установки плазменной резки, выполнены в ProEngineer",
        imgs: [
            {
                img: "./assets/images/projects/ProE-Topor.jpg",
                alt: "topor"
            },
            {
                img: "./assets/images/projects/ProE-fluger.jpg",
                alt: "fluger"
            }
        ]
    },
    {
        text: "Проекты поковок и штампов под последующее написание управляющих программ для фрезерных станков с ЧПУ, выполнены в ProEngineer",
        imgs: [
            {
                img: "./assets/images/projects/ProE-rychag-pokovka.jpg",
                alt: "pokovka"
            },
            {
                img: "./assets/images/projects/ProE-shtamp-niz.jpg",
                alt: "shtamp"
            }
        ]
    },
    {
        text: "Проекты поковок и штампов под последующее написание управляющих программ для фрезерных станков с ЧПУ, выполнены в ProEngineer",
        imgs: [
            {
                img: "./assets/images/projects/ProE-pokovka-balka-7505.jpg",
                alt: "pokovka"
            },
            {
                img: "./assets/images/projects/ProE-shtamp-niz-7505.jpg",
                alt: "shtamp"
            }
        ]
    },
    {
        text: "Проекты шнека экструдера секционного, выполнены в Компасе",
        imgs: [
            {
                img: "./assets/images/projects/KOMPAS-shnek_130.jpg",
                alt: "shnek"
            }
        ]
    },
    {
        text: "Проекты оборудования и механизмов для пищевой промышленности, выполнены в Inventor",
        imgs: [
            {
                img: "./assets/images/projects/Inventor-uzel-dozirovanija.jpg",
                alt: "uzel-dozirovanija",
            },
            {
                img: "./assets/images/projects/Inventor-uzel-fasovki.jpg",
                alt: "uzel-fasovki",
            }
        ]
    },
    {
        text: "Проекты оборудования и механизмов для пищевой промышленности, выполнены в Inventor",
        imgs: [
            {
                img: "./assets/images/projects/Inventor-uzel-nanesenija-krasitelja.jpg",
                alt: "uzel-nanesenija-krasitelja",
            },
            {
                img: "./assets/images/projects/Inventor-konveer.jpg",
                alt: "konveer",
            }
        ]
    },
    {
        text: "Проекты металлоконструкций, выполнены в Inventor",
        imgs: [
            {
                img: "./assets/images/projects/Inventor-shkaf-dlja-ballonov.jpg",
                alt: "shkaf-dlja-ballonov",
            },
            {
                img: "./assets/images/projects/Inventor-pomost.jpg",
                alt: "pomost",
            }
        ]
    },
    {
        text: "Проекты для холодной штамповки металла, выполнены в Inventor",
        imgs: [
            {
                img: "./assets/images/projects/Inventor-prisposoblenie-gib.jpg",
                alt: "prisposoblenie-gib",
            },
            {
                img: "./assets/images/projects/Inventor-stamp-form.jpg",
                alt: "stamp-form",
            }
        ]
    },
    {
        text: "Проекты приспособлений для машиностроительного производства, выполнены в Inventor",
        imgs: [
            {
                img: "./assets/images/projects/Inventor-lunet.jpg",
                alt: "lunet",
            },
            {
                img: "./assets/images/projects/Inventor-rolgang.png",
                alt: "rolgang",
            }
        ]
    },
    {
        text: "Структура таблиц системы ERP на базе EXCEL",
        imgs: [
            {
                img: "./assets/images/projects/erp-excel.jpg",
                alt: "erp excel",
            },
            {
                img: "./assets/images/projects/erp-excel-1.jpg",
                alt: "erp excel",
            }
        ]
    }
]

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const card = document.querySelector(".portfolio-card_img");
const cardText = document.querySelector(".portfolio-card_text");
let index = 0;

function switchCard() {
    card.innerHTML = '';
    cardText.innerHTML = portfolioCards[index].text;
    for (let i = 0; i < portfolioCards[index].imgs.length; i++) {
        let cardImg = document.createElement("img");
        cardImg.src = portfolioCards[index].imgs[i].img;
        cardImg.alt = portfolioCards[index].imgs[i].alt;
        cardImg.onload = () => {
            card.append(cardImg);
        }
    }
}
switchCard();

next.addEventListener('click', function () {
    index = (index === (portfolioCards.length - 1) ? 0 : ++index);
    switchCard();
});

prev.addEventListener('click', function () {
    index = (index === 0) ? (portfolioCards.length - 1) : --index;
    switchCard();
})



