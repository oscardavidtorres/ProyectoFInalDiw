window.addEventListener("load", () => {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 1000);
    
});
document.getElementById('asistente').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('hidden');
});
document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('modal').classList.add('hidden');
});

const asistente = document.getElementById("asistente");
const tooltip = document.getElementById("tooltip");

asistente.addEventListener("mouseenter", () => {
    tooltip.classList.remove("opacity-0");
});

asistente.addEventListener("mouseleave", () => {
    tooltip.classList.add("opacity-0");
});

// Simular pestañeo con cambio de imagen
setInterval(() => {
    let balon = document.getElementById("balon");
    let balonModal = document.getElementById("balon-modal");
    balonModal.src = "../assets/balonIaPestañeoMod.png";
    setTimeout(() => {
        balon.src = "../assets/balonIaNormal.png";
        balon.alt="Balón de futbol"
        balonModal.src = "../assets/balonIaNormal.png";
        balonModal.alt="Balón de futbol"
    }, 300);
}, 5000);