// Data bahan yang bisa dipakai (Nama dan warna kotak)
const ingredients = [
    { name: "Telur", color: "#ffe267"},
    { name: "Tepung", color: "#faf7dd"},
    { name: "Susu", color: "#d3ecf7"},
    { name: "Gula", color: "#f2dbc0"},
    { name: "Garam", color: "#f7eaf9"}
];

// Untuk menyimpan bahan yang sudah masuk panci
let addedToPot = [];

// Menentukan elemen UI
const ingredientsDiv = document.getElementById("ingredients");
const pot = document.getElementById("pot");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restart");

// Render bahan
function renderIngredients() {
    ingredientsDiv.innerHTML = "";
    ingredients.forEach((ingredient, idx) => {
        // Jika belum masuk ke panci, baru ditampilkan
        if (!addedToPot.includes(ingredient.name)) {
            const el = document.createElement("div");
            el.className = "ingredient";
            el.innerText = ingredient.name;
            el.style.background = ingredient.color;
            el.setAttribute("draggable", true);
            el.setAttribute("data-ingredient", ingredient.name); // Untuk identifikasi saat drag
            // Drag event handlers:
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

// Event ketika bahan sedang di-drag dan masuk ke area panci
pot.addEventListener("dragover", function(e) {
    e.preventDefault();
    pot.classList.add("drag-over");
});
// Event ketika mouse lepas dari panci
pot.addEventListener("dragleave", function() {
    pot.classList.remove("drag-over");
});

// Event drop - ketika bahan benar-benar masuk ke panci
pot.addEventListener("drop", function(e){
    e.preventDefault();
    pot.classList.remove("drag-over");
    const ingredientName = e.dataTransfer.getData("text/plain");
    
    // Jika bahan sudah pernah ditambahkan, tidak boleh tambah dua kali
    if (addedToPot.includes(ingredientName) || !ingredients.find(x=>x.name===ingredientName)) return;
    
    // Tambahkan bahan ke panci
    addedToPot.push(ingredientName);
    renderIngredients(); // update tampilan ingredients
    
    updatePotContents();
});

// Update tulisan pada panci
function updatePotContents(){
    if (addedToPot.length === 0) {
        pot.querySelector('span').innerText = "Panci";
    } else {
        pot.querySelector('span').innerText = addedToPot.join(" + ");
    }
    if(addedToPot.length === ingredients.length){
        // Semua bahan sudah masuk!
        message.innerText = "Selamat, semua bahan sudah masuk panci!";
        restartBtn.style.display = 'inline-block';
    }
}

// Tombol main lagi
restartBtn.addEventListener('click', function(){
    addedToPot = [];
    renderIngredients();
    updatePotContents();
    message.innerText = "";
    restartBtn.style.display = 'none';
});

// Awal permainan
renderIngredients();
updatePotContents();
