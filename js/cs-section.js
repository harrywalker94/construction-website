const menu = [
    {
        id: 1,
        title: "Warehouse Refurbishments",
        category: "Warehouses",
        img: "./assets/images/leicester.jpg",
        link: "<a href=\"warehouse.html\" target=\"_blank\" class=\"global-btn\">See All</a>",
        desc: `Bowden Moss specialises in warehouse refurbishment for industrial and commercial clients across the UK.
        With a team of specialist professional contractors at our disposal, we ensure that every industrial refurbishment contract is completed
        to the highest standards and with minimal disruption to your business operations during the process.`,
    },
    {
        id: 2,
        title: "Office Refurbishments",
        category: "Office's",
        img: "./assets/images/hollis3.jpg",
        link: "<a href=\"office.html\" target=\"_blank\" class=\"global-btn\">See All</a>",
        desc: `Bowden Moss specialises in Office refurbishment for industrial and commercial clients across the UK.
        With a team of specialist professional contractors at our disposal, we ensure that every industrial refurbishment contract is completed
        to the highest standards and with minimal disruption to your business operations during the process.`,
    },
    {
        id: 3,
        title: "Education Fitouts",
        category: "Education",
        img: "./assets/images/education1.jpg",
        link: "<a href=\"education.html\" target=\"_blank\" class=\"global-btn\">See All</a>",
        desc: `Bowden Moss specialises in Education Fit outs for clients across the UK.
        With a team of specialist professional contractors at our disposal, we ensure that every industrial refurbishment contract is completed
        to the highest standards and with minimal disruption to your business operations during the process.`,
    },
    {
        id: 4,
        title: "Residential Building Services",
        category: "Residential",
        img: "./assets/images/residential1.jpg",
        link: "<a href=\"residential.html\" target=\"_blank\" class=\"global-btn\">See All</a>",
        desc: `Bowden Moss specialises in Residential Building Services refurbishment for clients across the UK.
        With a team of specialist professional contractors at our disposal, we ensure that every industrial refurbishment contract is completed
        to the highest standards and with minimal disruption to your business operations during the process.`,
    },
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
       <img src=${item.img} >
       <div class="cs-header">
           <h1 class="cs-title">${item.title}</h1>
           <div class="cs-title-underline"></div>
       </div>
   </div>

   <main class="flex-container">

       <section class="main-content blue">

           <div class="cs-box" data-aos="slide-right">

           
           
               <div id="corner"></div>

                <h6>${item.title}</h6>
               <p>${item.desc}</p>
                  ${item.link}
           </div>
       </section>

       <aside class="sidebar green">
           <p>
           At Bowden Moss customer satisfaction is our main aim, 
           We have a wealth of experience within the commercial construction industry,
           specialising in the refurbishment and fit out sectors.
           </p>
           <div class="underline-2"></div>

           

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
            return `<button type="button" onclick="myFunction()" class="filter-btn" data-id=${category}><p class="filter-btn-text">${category}</p>
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
