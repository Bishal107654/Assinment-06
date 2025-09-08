const categoryContainer = document.getElementById("categoryContainer");
const newsContainer = document.getElementById("newsContainer");
const addContainer = document.getElementById("addContainer");

const plantModal = document.getElementById("plantModal");
const closeModalBtn = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");

let cartItems = [];
let totalPrice = 0;

// Close modal
closeModalBtn.addEventListener("click", () => {
    plantModal.close();
});

// Cart functions
const addToCart = (name, price) => {
    const id = Date.now();
    const item = { id, name, price };
    cartItems.push(item);
    totalPrice += price;
    renderCart();
};

const removeFromCart = (id, price) => {
    cartItems = cartItems.filter(item => item.id !== id);
    totalPrice -= price;
    renderCart();
};

const renderCart = () => {
    addContainer.innerHTML = `
        <div class="p-2 font-bold text-lg">Your Cart</div>
        <div id="cartItems" class="p-3 space-y-2"></div>
        <div class="p-3 font-bold">Total: $${totalPrice}</div>
    `;

    const cartDiv = addContainer.querySelector("#cartItems");
    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("flex", "justify-between", "items-center", "border-b", "pb-1");
        div.innerHTML = `
            <span>${item.name} - $${item.price}</span>
            <button class="text-red-600 font-bold" data-id="${item.id}" data-price="${item.price}">&times;</button>
        `;
        cartDiv.appendChild(div);
    });

    cartDiv.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(e.target.getAttribute("data-id"));
            const price = parseInt(e.target.getAttribute("data-price"));
            removeFromCart(id, price);
        });
    });
};

// Categories
const loadCategory = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then((res) => res.json())
        .then((data) => showCategory(data.categories))
        .catch((err) => console.log(err));
};

const showCategory = (categories) => {
    categories.forEach(cat => {
        categoryContainer.innerHTML += `
            <li id="${cat.id}" class="hover:border-1 hover:bg-green-700 hover:border-green-700 cursor-pointer hover:text-white hover:p-2">
                ${cat.category_name}
            </li>
        `;
    });

    categoryContainer.addEventListener('click', (e) => {
        const allLi = document.querySelectorAll('#categoryContainer li');
        allLi.forEach(li => li.classList.remove('bg-green-700'));
        if (e.target.localName === 'li') {
            e.target.classList.add("bg-green-700");
            loadNewsByCategory(e.target.id);
        }
    });
};

// News
const loadNewsByCategory = (categoryId) => {
    fetch(`https://openapi.programming-hero.com/api/category/${categoryId}`)
        .then(res => res.json())
        .then(data => showNewsByCategories(data.plants))
        .catch(err => console.log(err));
};

const showNewsByCategories = (plants) => {
    newsContainer.innerHTML = "";
    plants.forEach(plant => {
        newsContainer.innerHTML += `
        <div class="border-1 rounded-lg border-gray-300 shadow-md p-2 bg-white">
            <div>
                <img src="${plant.image}" alt="${plant.name}">
            </div>
            <h1 class="text-lg font-bold mb-2 plant-title cursor-pointer"
                data-name="${plant.name}"
                data-description="${plant.description}"
                data-image="${plant.image}"
                data-category="${plant.category}"
                data-price="${plant.price}">
                ${plant.name}
            </h1>
            <p class="text-[12px]">${plant.description}</p>
            <div class="flex justify-between p-3">
                <button class="rounded-3xl bg-green-200 w-25">${plant.category}</button>
                <button class="rounded-3xl bg-white w-20">$${plant.price}</button>
            </div>
            <button class="w-full rounded-3xl bg-[#15803D] p-3 add-btn" 
                data-name="${plant.name}" 
                data-price="${plant.price}">
                <span class="text-white p-1">Add to Cart</span>
            </button>
        </div>
        `;
    });

    // Add to Cart
  
    });
};

loadCategory();
loadNewsByCategory(1);
