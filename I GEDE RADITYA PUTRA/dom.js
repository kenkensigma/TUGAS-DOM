
const buttton = document.getElementById('ubahfoto');
const h1 = document.getElementById('foto');

const gambar = document.querySelector("img");

buttton.addEventListener("click", gantiFoto);

function gantiFoto(){
    if(gambar.getAttribute("src") == "Screenshot 2024-08-28 124544.png")
        gambar.setAttribute("src", "WhatsApp Image 2024-08-20 at 14.52.15_978582e6.jpg");
    else if(gambar.getAttribute("src") == "WhatsApp Image 2024-08-20 at 14.52.15_978582e6.jpg")
        gambar.setAttribute("src", "Screenshot 2024-08-28 124544.png");
}