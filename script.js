const letterText = `

Where do I even begin? I love you Ayesha Israr.

From the moment you walked into my life,
you have had such a big impact on me. Every single thing became softer, warmer, brighter.

You just mean so so much to me, my beautiful little girl. You’re my shehzaadi, the woman of my dreams, the girl I would step out of my comfort zone for, my doodle mcpoodle, my dulhan, and my queen.

You have this way of making everything around you feel joyous, even on the most gloomiest of days.

I love so much about you, it would be unjust to type it down in a few words when there should be books written about you (by me. you are mine.).

The way you care about the people around you, it makes me wanna care about you twice as much so you have a soft little safe space to return to when you get tired. I love how passionate you get about the smallest of things, you notice the little things and give me detailed descriptions as to how that made you feel.

I love the way you ask questions I LOVE LOVE LOVEEE IT and i also love it when you get happy at the questions i toss at you. My Lord, please never take her away from me.

She is the best thing to have ever happened to me, and I wanna cherish her till the day I die.

You are strong in ways you don’t always see. You have this softness and charm, but also this quiet strength that makes me admire you so much. You are a warrior, but even a warrior needs a soft pair of arms to fully dissovle in, and I will always have those arms open for you.

You are perfect.

The moments you overthink.
The times you doubt yourself.
The small things you wish you could change.
The unnecessary need to declutter when things spiral.
The moments where you are completely out of energy.
The times you get demotivated.

All of your imperfections make you the most perfect little girl I have ever laid my eyes on.

These little flaws, They make you who you are. They make you Ayesha, the same Ayesha that I love so much. I wouldn’t change a single part of that.

You make normal days feel special.
You make stressful days feel hopeful.
You make me want to be better.

You are always on my mind. You complete me.
Whenever I think about the future, I see you in it Ayesha. I see a gorgeous bride bossing everybody around on the day of our Nikkah, while I pull her into my arms and give her soft warm hugs reassuring her that everything is going according to plan.
I see a beautiful, ambitious, and hardworking girl who is gonna push herself to the edge to achieve her goals. I see a caring and loving partner, who would put everything aside just to spend some time with me.
I see a young woman with an unbreakable mindset, working out in the gym and getting those gains, but i also see an emotional little girl who becomes clingy and wants to be taken care of.
Ayesha, you are everything I have ever wanted.

I don’t just love you for how you look or what you say. I love you for your heart. For your patience. For your ability to understand. For the way you choose me.

And I want you to know that I choose you too. Every single day.

Not just on Valentine’s Day, but on the random weekdays you get upset. On the days we laugh, and the day we can’t quite communicate properly.
On the quiet nights, and even it feels like the whole world is against us. No matter what, I will always choose you.

You are my peace.
You are my favorite person.
You are my safe place.

And if you’ll allow me, princess, I want to keep building something beautiful with you. Step by step. Day by day.

Happy Valentine’s Day, Mrs Ahmed.
`;

/* ========================= */
/* Intro Click → Start Site */
/* ========================= */

const introPage = document.getElementById("introPage");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("bgMusic");

introPage.addEventListener("click", function () {

    // Start music at lower volume
    music.volume = 0.3;
    music.play();

    // Fade intro
    introPage.classList.add("fade-out");

    setTimeout(() => {
        introPage.style.display = "none";
        mainContent.style.display = "block";

        // Smooth fade in
        setTimeout(() => {
            mainContent.style.opacity = "1";
        }, 50);

    }, 1000);
});


/* ========================= */
/* Open Letter */
/* ========================= */

function openLetter() {
    explodeHearts();

    // Add new history state
    history.pushState({ page: "letter" }, "", "#letter");

    setTimeout(() => {
        document.getElementById("frontPage").style.display = "none";
        document.getElementById("letterPage").style.display = "flex";
        typeLetter();
    }, 800);
}

/* ========================= */
/* Typing Animation */
/* ========================= */

function typeLetter() {
    let i = 0;
    const speed = 35;
    const target = document.getElementById("typedText");

    target.innerHTML = ""; // reset in case of replay

    function typing() {
        if (i < letterText.length) {
            target.innerHTML += letterText.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}


/* ========================= */
/* Background Falling */
/* ========================= */

function createPetal() {
    const container = document.getElementById("flowers");

    const particle = document.createElement("div");
    particle.classList.add("flower");

    const emojis = ["🌹", "🌸", "💕", "🧸"];
    particle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    particle.style.left = Math.random() * window.innerWidth + "px";
    particle.style.animationDuration = (6 + Math.random() * 6) + "s";
    particle.style.fontSize = (18 + Math.random() * 18) + "px";
    particle.style.opacity = Math.random() * 0.5 + 0.3;

    container.appendChild(particle);

    setTimeout(() => particle.remove(), 12000);
}


/* ========================= */
/* Explosion Effect */
/* ========================= */

function explodeHearts() {
    const explosion = document.getElementById("explosion");

    for (let i = 0; i < 80; i++) {

        const heart = document.createElement("div");
        heart.classList.add("boom-heart");

        const emojis = ["💖", "💘", "💝", "❤️"];
        heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

        const x = (Math.random() - 0.5) * window.innerWidth + "px";
        const y = (Math.random() - 0.5) * window.innerHeight + "px";

        heart.style.setProperty("--x", x);
        heart.style.setProperty("--y", y);
        heart.style.left = "50%";
        heart.style.top = "50%";

        explosion.appendChild(heart);

        setTimeout(() => heart.remove(), 2500);
    }
}

setInterval(createPetal, 500);

window.addEventListener("popstate", function () {

    // If user presses browser back
    document.getElementById("letterPage").style.display = "none";
    document.getElementById("frontPage").style.display = "flex";

});
