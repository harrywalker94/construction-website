const menu = [
    {
        id: 1,
        title: "Heathrow",
        category: "Heathrow",
        price: 15.99,
        img: "./assets/images/heathrow.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "Leicester",
        category: "Leicester",
        price: 13.99,
        img: "./assets/images/leicester.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "Hollis",
        category: "Hollis",
        price: 6.99,
        img: "./assets/images/hollis.jpg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "London",
        category: "London",
        price: 13.99,
        img: "./assets/images/leicester-plain.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 5,
        title: "Harlow",
        category: "Harlow",
        price: 13.99,
        img: "./assets/images/hollis.jpg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    }
];
// get parent element
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
// display all items when page loads
window.addEventListener("DOMContentLoaded", function () {

    diplayMenuItems(menu);
    displayMenuButtons(menu[0]);
    btnContainer.parentNode.appendChild(btnContainer);
});

function diplayMenuItems(menuItems) {

    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return ` <section class="cs-section">
        <div class="cs-img">
       <img src=${item.img} alt=${item.title}>
       <div class="cs-header">
           <h1 class="cs-title">Case Studies</h1>
           <div class="cs-title-underline"></div>
       </div>
   </div>

   <main class="flex-container">

       <section class="main-content blue">

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

    // console.log(displayMenu);
    sectionCenter.innerHTML = displayMenu[0];
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        [""]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}><p class="filter-btn-text">${category}</p>
          </button>`;
        })
        .splice(1).join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}