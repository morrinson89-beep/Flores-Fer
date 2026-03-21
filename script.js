const musica = document.getElementById("musica");
const sobre = document.getElementById("sobre");
const carta = document.getElementById("carta");
const continuar = document.getElementById("continuar");
const btn = document.getElementById("btnContinuar");

// abrir sobre
sobre.addEventListener("click", () => {
    document.querySelector(".tapa").style.transform = "rotateX(-180deg)";

    setTimeout(()=>{
        carta.classList.add("activa");
        musica.play();
    },600);

    setTimeout(()=>{
        continuar.style.opacity = "1";
    },7000);
});

// botón continuar
btn.addEventListener("click", avanzar);

function avanzar(){
    continuar.style.opacity = "0";

    carta.style.opacity = "0";
    sobre.style.opacity = "0";
    document.querySelector(".pregunta").style.opacity = "0";

    setTimeout(()=>{
        mostrarFlores();
    },1000);
}

// mensaje + lluvia
function mostrarFlores(){
    const msg = document.createElement("div");
    msg.innerText = "Aquí están tus flores amarillas 🌻";
    msg.style.position = "absolute";
    msg.style.top = "40%";
    msg.style.width = "100%";
    msg.style.textAlign = "center";
    msg.style.fontSize = "28px";
    msg.style.color = "#ffd700";

    document.body.appendChild(msg);

    lluvia();

    setTimeout(()=>{
        msg.remove();
        document.getElementById("final1").style.opacity = "1";
    },4000);

    setTimeout(()=>{
        document.getElementById("final1").style.opacity = "0";
        document.getElementById("final2").style.opacity = "1";
    },7000);
}

// lluvia
function lluvia(){
    const cont = document.getElementById("lluvia");

    setInterval(()=>{
        let f = document.createElement("div");
        f.classList.add("flor");

        f.style.left = Math.random()*100+"vw";
        f.style.animationDuration = (Math.random()*3+2)+"s";

        cont.appendChild(f);

        setTimeout(()=>f.remove(),5000);
    },120);
}