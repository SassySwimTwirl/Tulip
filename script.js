// Daftar bahan untuk dimasak (Nama & warna kotak)
const ingredients = [
    { name: "Telur", color: "#fce577"},
    { name: "Tepung", color: "#f8f4da"},
    { name: "Susu", color: "#e9f3fd"},
    { name: "Gula", color: "#f7debe"},
    { name: "Garam", color: "#efeaf2"}
];

let addedToPot = [];

// Ambil elemen HTML
const ingredientsDiv = document.getElementById("ingredients");
const pot = document.getElementById("pot");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

// Render bahan
function renderIngredients() {
    ingredientsDiv.innerHTML = "";
    ingredients.forEach((ingredient) => {
        if (!addedToPot.includes(ingredient.name)) {
            const el = document.createElement("div");
            el.className = "ingredient";
            el.innerText = ingredient.name;
            el.style.background = ingredient.color;
            el.setAttribute("draggable", true);
            el.setAttribute("data-ingredient", ingredient.name);
            // Drag events:
            el.addEventListener("dragstart", function(e) {
                el.classList.add("being-dragged");
                e.dataTransfer.setData("text/plain", ingredient.name);
            });
            el.addEventListener("dragend", function() {
                el.classList.remove("being-dragged");
            });
            ingredientsDiv.appendChild(el);
        }
    });
}

// Area panci merespon drag
pot.addEventListener("dragover", function(e) {
    e.preventDefault();
    pot.classList.add("drag-over");
});
pot.addEventListener("dragleave", function() {
    pot.classList.remove("drag-over");
});

// Drop bahan ke dalam panci
pot.addEventListener("drop", function(e){
    e.preventDefault();
    pot.classList.remove("drag-over");
    const ingredientName = e.dataTransfer.getData("text/plain");
    if (addedToPot.includes(ingredientName) || !ingredients.find(x=>x.name===ingredientName)) return;
    addedToPot.push(ingredientName); // Masukkan bahan ke panci
    renderIngredients();
    updatePotContents();
});

function updatePotContents(){
    if (addedToPot.length === 0) {
        pot.querySelector('span').innerText = "Panci Restoran";
    } else {
        pot.querySelector('span').innerText = addedToPot.join(" + ");
    }
    if(addedToPot.length === ingredients.length){
        // Semua bahan masuk, berikan pesan!
        message.innerHTML = 
            "🎉 Hore, Tulip berhasil memasak semua bahan!<br>Kamu membantu Tulip membuat makanan enak.";
        restartBtn.style.display = 'inline-block';
    }
}

// Tombol untuk main ulang
restartBtn.addEventListener('click', function(){
    addedToPot = [];
    renderIngredients();
    updatePotContents();
    message.innerText = "";
    restartBtn.style.display = 'none';
});

// Awal game
renderIngredients();
updatePotContents();
