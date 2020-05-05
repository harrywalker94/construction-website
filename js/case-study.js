const menu = [
    {
        id: 1,
        title: "Heathrow",
        category: "Heathrow",
        img: "./assets/images/heathrow.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Leicester",
        category: "Leicester",
        img: "./assets/images/leicester.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Cambridge",
        category: "Cambridge",
        img: "./assets/images/rosebury-av2.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    }
];

const csSection = document.querySelector(".cs-section");
const filterBtns = document.querySelector(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
    displayCsItems(menu);
});

// filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        console.log(e.currentTarget.dataset);
    });
});

function displayCsItems(csItems) {
    menu.splice(1);
    let displayCs = csItems.map(function (item) { // map() takes each element from an original array, transforms it with a function that you specify, and adds the result to a new array in the same order.
        return ` <section class="cs-section">
         <div class="cs-img">
        <img src=${item.img} alt=${item.title}>
        <div class="cs-header">
            <h1 class="cs-title">Case Studies</h1>
            <div class="cs-title-underline"></div>
            <div class="scroll-down-div">
                <a href="#case-study" class="scroll-down-arrow"><i class="fas fa-chevron-down"></i></a>
            </div>
        </div>
    </div>

    <main class="flex-container">

        <section class="main-content blue">
            <div id="corner"></div>
            <div class="cs-box">
                <div id="corner"></div>

                <h6>${item.title}</h6>
                <p>${item.desc}</p>
            </div>
        </section>

        <aside class="sidebar green">
            <h2>Sidebar</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti temporibus recusandae nisi, ipsa esse
                tempore aperiam laborum libero ipsum at? Accusamus nostrum, atque amet, fugiat voluptate iusto maiores
                quam similique dolorum vel, voluptatum rerum dignissimos accusantium modi perferendis quidem in! Eum
                velit aut voluptate ea rerum. Mollitia possimus aut itaque!
            </p>

        </aside>

    </main>
    </section>`;
    });
    displayCs = displayCs.join("");
    csSection.innerHTML = displayCs;
}