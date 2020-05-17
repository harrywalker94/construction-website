const menu = [
    {
        id: 1,
        title: "Camden",
        category: "Camden",
        img: "./assets/images/camden3.jpg",
        img2: "./assets/images/camden7.jpg",
        img3: "./assets/images/camden8.jpg",
        img4: "./assets/images/camden9.jpg",
        img5: "./assets/images/camden3.jpg",
        img6: "./assets/images/camden5.jpg",
        desc: `    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum ex nihil aliquid aspernatur quidem eveniet obcaecati
        natus atque quasi? Quisquam inventore corrupti magni! Exercitationem perferendis voluptatem deserunt doloremque sit
        veritatis id, distinctio sequi optio necessitatibus sed voluptates. Illo possimus consectetur eos pariatur, debitis
        repudiandae ipsum unde porro, laudantium vero, incidunt nulla expedita reprehenderit rem beatae maiores dignissimos
        a excepturi non officiis.`,
        client: "Client A",
        date: 2020,
        location: "Camden, London"
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
       <div class="numbers">
       <div class="client">
           <h1>Client</h1>
           <p>${item.client}</p>
       </div>
       <div class="date">
           <h1>Date</h1>
           <p>${item.date}</p>
       </div>
       <div class="time-frame">
           <h1>Location</h1>
           <p>${item.location}</p>
       </div>
   </div>
   </aside>
   </main>

   <section class="img-grid" id="grid">
   <div class="img-grid_container">
       <!-- Grid item -->
       <article class="grid-item grid-item-1">
           <img src=${item.img2} alt=${item.title} class="grid-item_img" id="grid-img">
       </article>
       <!-- End Grid item -->
       <!-- Grid item -->
       <article class="grid-item grid-item-2">
           <img src=${item.img3} alt=${item.title} class="grid-item_img" id="grid-img">
       </article>
       <!-- End Grid item -->
       <!-- Grid item -->
       <article class="grid-item grid-item-3">
           <img src=${item.img4} alt=${item.title} class="grid-item_img" id="grid-img">
       </article>
       <!-- End Grid item -->
       <!-- Grid item -->
       <article class="grid-item grid-item-4">
           <img src=${item.img5} alt=${item.title} class="grid-item_img" id="grid-img">
       </article>
       <!-- End Grid item -->
       <!-- Grid item -->
       <article class="grid-item grid-item-5">
           <img src=${item.img6} alt=${item.title} class="grid-item_img" id="grid-img">
       </article>
       <!-- End Grid item -->

   </div>
</section>
`;


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
            return `                    
            <button type="button" onclick="myFunction()" class="filter-btn" data-id=${category}><p class="filter-btn-text">${category}</p>
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