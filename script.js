const scenes=document.querySelectorAll(".scene");

function showScene(id){

scenes.forEach(scene=>{

scene.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// Loading

setTimeout(()=>{

showScene("intro");

},3000);

// Intro Button

document.getElementById("start").onclick=()=>{

showScene("ready");

};

// Ready Buttons

document.querySelectorAll(".yes").forEach(btn=>{

btn.onclick=()=>{

showScene("cake");

};

});
/* ======================
Cake Interaction
====================== */

let blown = 0;

const flames = document.querySelectorAll(".flame");

flames.forEach(flame=>{

flame.parentElement.addEventListener("click",()=>{

if(flame.classList.contains("off")) return;

flame.classList.add("off");

blown++;

smallConfetti();

if(blown===3){

bigConfetti();

setTimeout(()=>{

showScene("gallery");

},3000);

}

});

});

function smallConfetti(){

confetti({

particleCount:40,

spread:70,

origin:{y:.7}

});

}

function bigConfetti(){

confetti({

particleCount:300,

spread:180,

origin:{y:.6}

});

}
/*==========================
Gallery
==========================*/

const photos = document.querySelectorAll(".photo");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightboxImg");

photos.forEach(photo=>{

photo.onclick=()=>{

lightbox.style.display="flex";

lightboxImg.src=

photo.querySelector("img").src;

};

});

document.getElementById("close").onclick=()=>{

lightbox.style.display="none";

};

lightbox.onclick=(e)=>{

if(e.target===lightbox)

lightbox.style.display="none";

};

document.getElementById("continueBtn").onclick=()=>{

showScene("letter");

};
const envelope = document.getElementById("envelope");

const typedText = document.getElementById("typedText");

const nextGift = document.getElementById("nextGift");

const message =
`Dear Komz ❤️,

Happy Birthday!

May today bring you happiness,
beautiful memories,
and countless reasons to smile.

Thank you for being such
an amazing person.

Wishing you success,
good health,
and endless joy.

Happy Birthday ❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }else{

        nextGift.style.display="inline-block";

    }

}

envelope.onclick = ()=>{

    if(envelope.classList.contains("open")) return;

    envelope.classList.add("open");

    setTimeout(typeWriter,900);

};

nextGift.onclick=()=>{

    showScene("gift");

};
const giftBox=document.getElementById("giftBox");

const giftMessage=document.getElementById("giftMessage");

const finalBtn=document.getElementById("toFinal");

giftBox.onclick=()=>{

if(giftBox.classList.contains("gift-open")) return;

giftBox.classList.add("gift-open");

launchHearts();

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

setTimeout(()=>{

giftMessage.style.display="block";

},1200);

};

function launchHearts(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.className="heart-particle";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="100px";

heart.style.setProperty("--x",

(Math.random()*400-200)+"px");

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},3000);

}

}

finalBtn.onclick=()=>{

showScene("final");

};
const canvas=document.getElementById("fireworks");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

});

function firework(){

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height*.6;

for(let i=0;i<60;i++){

ctx.beginPath();

ctx.fillStyle=
`hsl(${Math.random()*360},100%,60%)`;

ctx.arc(

x+Math.cos(i)*Math.random()*80,

y+Math.sin(i)*Math.random()*80,

3,

0,

Math.PI*2

);

ctx.fill();

}

setTimeout(()=>{

ctx.clearRect(0,0,canvas.width,canvas.height);

},250);

}

setInterval(firework,900);

/* Floating Hearts */

const heartBox=document.getElementById("floatingHearts");

function createHeart(){

const heart=document.createElement("div");

heart.className="final-heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-40px";

heart.style.fontSize=

20+Math.random()*25+"px";

heartBox.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,350);

/* Music */

// const music=document.getElementById("bgMusic");

// setTimeout(()=>{

// music.play().catch(()=>{});

// },500);

/* Replay */

document.getElementById("replay").onclick=()=>{

location.reload();

};
const music = document.getElementById("bgMusic");
console.log(music);

document.getElementById("yesBtn").addEventListener("click", () => {
    music.play()
        .then(() => console.log("Music Playing"))
        .catch(err => console.error(err));
});

document.getElementById("absoluteBtn").addEventListener("click", () => {
    music.play()
        .then(() => console.log("Music Playing"))
        .catch(err => console.error(err));
});