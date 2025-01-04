// Words to display in the animation
const words = ["Proyecto", "final", "de", "Mantenimiento","de","Equipos", "2025"];
const textBox = document.getElementById("text-box");

let delay = 0;

// Function to create and animate words
words.forEach((word, index) => {
    // Create span for each word
    const span = document.createElement("span");
    span.className = "word";
    span.style.animation = `fadeInDrop 1s ease forwards`;
    span.style.animationDelay = `${delay}s`;
    span.textContent = word;

    // Add space between words except for the last one
    if (index < words.length - 1) {
        span.style.marginRight = "10px";
    }

    textBox.appendChild(span);
    delay += 0.5; // Increment delay for staggered animation
});