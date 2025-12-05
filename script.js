// Game Find the Difference: Restaurant "Tulip" as a Difference

const w = 320, h = 320;

// Area papan nama ('Tulip') pada canvas kanan sebagai daerah klik perbedaan
const tulipSignArea = {
    x: 85, y: 55, w: 150, h: 42 // x, y pojok kiri atas, width, height
};
// Toleransi klik supaya mudah
const signTolerance = 10;

const canvasL = document.getElementById('canvas-left');
const canvasR = document.getElementById('canvas-right');
const ctxL = canvasL.getContext('2d');
const ctxR = canvasR.getContext('2d');
const info = document.getElementById('info');

let found = false;

// Fungsi menggambar restoran
function drawRestaurant(ctx, withTulip) {
    // Langit/atas
    ctx.fillStyle="#f6dfae";
    ctx.fillRect(0,0,w,h);

    // Bangunan utama
    ctx.fillStyle="#ffe1bd";
    ctx.fillRect(40,100,240,160);

    // Atap
    ctx.beginPath();
    ctx.moveTo(30,100);
    ctx.lineTo(160,45);
    ctx.lineTo(290,100);
    ctx.closePath();
    ctx.fillStyle="#de9860";
    ctx.fill();

    // Papan nama
    ctx.fillStyle="#fae043";
    ctx.fillRect(80,55,160,44);
    ctx.strokeStyle="#b08a00";
    ctx.lineWidth=3;
    ctx.strokeRect(80,55,160,44);

    // Tulis "TULIP" di papan jika withTulip
    if(withTulip) {
        ctx.font = "bold 32px Arial";
        ctx.fillStyle="#cc2e46";
        ctx.textAlign = "center";
        ctx.fillText("TULIP", 160, 87);
        // Gambar bunga kecil
        ctx.beginPath();
        ctx.arc(212, 75, 7, 0, 2*Math.PI);
        ctx.fillStyle="#ef729a";
        ctx.fill();
        ctx.beginPath();
        ctx.arc(206, 75, 3.5, 0, 2*Math.PI);
        ctx.fillStyle="#fff";
        ctx.fill();
    }

    // Pintu
    ctx.fillStyle="#965A38";
    ctx.fillRect(145, 185, 30, 75);
    // Knob
    ctx.beginPath();
    ctx.arc(170,222,4,0,2*Math.PI);
    ctx.fillStyle="#fff9cc";
    ctx.fill();

    // Jendela kiri
    ctx.fillStyle="#82b5f4";
    ctx.fillRect(60,145,40,35);
    ctx.strokeStyle="#4666f6";
    ctx.strokeRect(60,145,40,35);

    // Jendela kanan
    ctx.fillRect(220,145,40,35);
    ctx.strokeRect(220,145,40,35);

    // Area dasar/rumput
    ctx.fillStyle="#b6db9d";
    ctx.fillRect(0,260,320,20);

    // Pot bunga kiri
    ctx.fillStyle="#ea9261";
    ctx.fillRect(48,255,14,12);
    ctx.beginPath();
    ctx.moveTo(55, 255); // batang
    ctx.lineTo(55, 249);
    ctx.strokeStyle="#22994a";
    ctx.lineWidth=2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(55, 247, 3, 0, 2*Math.PI); // bunga
    ctx.fillStyle="#e52f7c";
    ctx.fill();

    // Pot bunga kanan
    ctx.fillStyle="#cd764f";
    ctx.fillRect(258,255,14,12);
    ctx.beginPath();
    ctx.moveTo(265, 255);
    ctx.lineTo(265, 249);
    ctx.strokeStyle="#22994a";
    ctx.lineWidth=2;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(265, 247, 3, 0, 2*Math.PI); // bunga
    ctx.fillStyle="#3cafd9";
    ctx.fill();
}

// Gambar awal
drawRestaurant(ctxL, false); // kiri, tidak ada tulisan tulip
drawRestaurant(ctxR, true);  // kanan, ada tulisan tulip

canvasR.addEventListener('click', function(e){
    if(found) return; // tidak perlu klik lagi
    const r = canvasR.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // Deteksi jika klik dalam area papan nama
    if(
        x >= tulipSignArea.x-signTolerance &&
        x <= tulipSignArea.x+tulipSignArea.w+signTolerance &&
        y >= tulipSignArea.y-signTolerance &&
        y <= tulipSignArea.y+tulipSignArea.h+signTolerance
    ) {
        found = true;
        // Highlight board (area tulisan tulip)
        ctxR.save();
        ctxR.globalAlpha = 0.35;
        ctxR.fillStyle = "#fff650";
        ctxR.fillRect(
            tulipSignArea.x-6,
            tulipSignArea.y-6,
            tulipSignArea.w+12,
            tulipSignArea.h+12
        );
        ctxR.restore();

        ctxR.save();
        ctxR.strokeStyle="#179918";
        ctxR.lineWidth=4;
        ctxR.strokeRect(
            tulipSignArea.x-6,
            tulipSignArea.y-6,
            tulipSignArea.w+12,
            tulipSignArea.h+12
        );
        ctxR.restore();

        info.innerText = "Benar! Di gambar kanan papan nama restoran bertuliskan 'TULIP'. 🎉";
    } else {
        info.innerText = "Bukan di situ! Cari area papan nama bertuliskan 'TULIP'.";
    }
});

// Pesan awal
info.innerText = "Cari perbedaannya! (clue: papan nama di atas pintu)";
