// Valentine's Day Messages
const valentineMessages = [
    "You are the love of my life! 💖",
    "My heart belongs to you forever! 💝",
    "You make every day special! 🌹",
    "I love you more than anything! 💘",
    "Will you be my Valentine? 💌",
    "You're my happily ever after! ✨",
    "My love for you grows every day! 🌟",
    "You complete me in every way! 💕",
    "Together forever, my love! ❤️",
    "You're the best thing that ever happened to me! 💖"
];

let currentMessageIndex = 0;
let isEnvelopeOpen = false;
let loveLevel = 0;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    startTypingEffect();
    startAutoMessageChange();
    initializeLoveMeter();
    createFloatingHearts();
    createFloatingGifts();
});

// Create floating hearts in background
function createFloatingHearts() {
    const heartEmojis = ['💖', '💕', '💗', '💓', '💘', '💝', '❤️', '🧡', '💛', '💚', '💙', '💜'];

    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            createFloatingElement('heart', heartEmojis);
        }, i * 800);
    }
}

// Create floating gifts in background
function createFloatingGifts() {
    const giftEmojis = ['🎁', '🎀', '🎊', '🎉', '💝', '🦄', '🌈', '✨'];

    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingElement('gift', giftEmojis);
        }, i * 1200);
    }
}

// Create floating elements
function createFloatingElement(type, emojis) {
    const element = document.createElement('div');
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    if (type === 'heart') {
        element.className = 'floating-heart';
        element.innerHTML = randomEmoji;

        // Random colors for hearts
        const colors = ['#ff6b6b', '#ff8e8e', '#ffafcc', '#ff85a1', '#ff4757', '#ff9eb5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor;
        element.style.textShadow = `0 0 10px ${randomColor}40`;

        // Random size
        const size = Math.random() * 15 + 15;
        element.style.fontSize = size + 'px';

        // Random animation duration
        const duration = Math.random() * 10 + 15;
        element.style.animationDuration = duration + 's';

    } else if (type === 'gift') {
        element.className = 'floating-gift';
        element.innerHTML = randomEmoji;
        element.style.animation = 'giftFloat 8s ease-in-out infinite';

        // Random colors for gifts
        const colors = ['#74b9ff', '#0984e3', '#ffd166', '#ffb347', '#06d6a0', '#ff9e00'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        element.style.color = randomColor;
        element.style.textShadow = `0 0 15px ${randomColor}60`;

        // Random size
        const size = Math.random() * 10 + 20;
        element.style.fontSize = size + 'px';

        // Random animation delay
        const delay = Math.random() * 5;
        element.style.animationDelay = delay + 's';
    }

    // Random position
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    element.style.left = left + '%';
    element.style.top = top + '%';

    document.body.appendChild(element);

    // Remove after animation completes (for performance)
    setTimeout(() => {
        if (element.parentNode) {
            element.parentNode.removeChild(element);
        }
    }, 30000);
}

// Envelope opening animation
function openEnvelope() {
    const envelope = document.querySelector('.envelope');

    if (!isEnvelopeOpen) {
        envelope.classList.add('open');
        isEnvelopeOpen = true;

        // Add confetti effect
        createConfetti();

        // Increase love level
        increaseLoveLevel(15);

        // Play romantic sound (simulated)
        playRomanticSound();

        // Show special message
        showSpecialMessage("Love letter revealed! 💕");

        // Create extra floating hearts
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                createFloatingElement('heart', ['💖', '💕', '💗', '💓']);
            }, i * 300);
        }
    } else {
        envelope.classList.remove('open');
        isEnvelopeOpen = false;
    }
}

// Typing effect for messages
function startTypingEffect() {
    const typedTextElement = document.querySelector('.typed-text');
    const cursorElement = document.querySelector('.cursor');

    function typeWriter(text, i, callback) {
        if (i < text.length) {
            typedTextElement.innerHTML = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1, callback), 80);
        } else if (callback) {
            setTimeout(callback, 1500);
        }
    }

    function startTyping() {
        const message = valentineMessages[currentMessageIndex];
        typedTextElement.innerHTML = '';
        typeWriter(message, 0, () => {
            setTimeout(startTyping, 1000);
        });
    }

    startTyping();
}

// Auto-change messages
function startAutoMessageChange() {
    setInterval(() => {
        currentMessageIndex = (currentMessageIndex + 1) % valentineMessages.length;
    }, 4000);
}

// Love Meter functionality
function initializeLoveMeter() {
    const loveMeter = document.getElementById('loveMeter');
    const loveText = document.getElementById('loveText');

    // Start with some love
    loveLevel = 25;
    updateLoveMeter();

    // Gradually increase love over time
    setInterval(() => {
        if (loveLevel < 100) {
            increaseLoveLevel(1);
        }
    }, 5000);
}

function increaseLoveLevel(amount) {
    loveLevel = Math.min(loveLevel + amount, 100);
    updateLoveMeter();
}

function updateLoveMeter() {
    const loveMeter = document.getElementById('loveMeter');
    const loveText = document.getElementById('loveText');

    loveMeter.style.width = loveLevel + '%';

    if (loveLevel < 30) {
        loveText.textContent = "Just starting... 💕";
    } else if (loveLevel < 50) {
        loveText.textContent = "Growing stronger! 💖";
    } else if (loveLevel < 70) {
        loveText.textContent = "So much love! 💝";
    } else if (loveLevel < 90) {
        loveText.textContent = "Overflowing with love! 💘";
    } else {
        loveText.textContent = "Infinite love! 💕💖💝";
    }
}

// Create heart animation
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    // Random size and color
    const size = Math.random() * 15 + 10;
    const hue = Math.random() * 30 + 330;
    heart.style.width = size + 'px';
    heart.style.height = size + 'px';
    heart.style.background = `hsl(${hue}, 100%, 65%)`;

    document.getElementById('heartsContainer').appendChild(heart);

    // Random animation duration
    const duration = Math.random() * 2 + 1;

    // Animate the heart
    heart.style.animation = `floatUp ${duration}s ease-out forwards`;

    // Remove after animation
    setTimeout(() => {
        if (heart.parentNode) {
            heart.parentNode.removeChild(heart);
        }
    }, duration * 1000);
}

// Send Love button functionality
function sendLove() {
    // Create multiple hearts
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            createHeart(
                Math.random() * window.innerWidth,
                window.innerHeight + 50
            );
        }, i * 80);
    }

    // Increase love level
    increaseLoveLevel(5);

    // Animate cat
    animateCat();

    // Create floating gifts
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFloatingElement('gift', ['🎁', '🎀', '🎉']);
        }, i * 500);
    }

    // Show special message
    showSpecialMessage("Love sent! 💖 Your Valentine will feel the love!");
}

// Surprise button functionality
function createSurprise() {
    // Create heart explosion
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            createHeart(
                window.innerWidth / 2,
                window.innerHeight / 2
            );
        }, i * 60);
    }

    // Increase love level
    increaseLoveLevel(8);

    // Animate cat
    animateCat();

    // Create floating gifts and hearts
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createFloatingElement('gift', ['🎁', '🎀', '🎊', '🎉']);
            createFloatingElement('heart', ['💖', '💕', '💗', '💓']);
        }, i * 200);
    }

    // Show surprise message
    showSpecialMessage("Surprise! You're amazing! 💝");

    // Change background color temporarily
    const originalBackground = document.body.style.background;
    document.body.style.background = 'linear-gradient(135deg, #ffafcc, #74b9ff)';
    setTimeout(() => {
        document.body.style.background = originalBackground;
    }, 1500);
}

// Animate cat
function animateCat() {
    const cat = document.querySelector('.cat');
    cat.style.animation = 'none';
    setTimeout(() => {
        cat.style.animation = 'bounce 0.8s ease-in-out';
    }, 10);
}

// Show special message
function showSpecialMessage(text) {
    const messageElement = document.getElementById('valentineMessage');
    const originalContent = messageElement.innerHTML;

    messageElement.innerHTML = `<span class="typed-text">${text}</span><span class="cursor">|</span>`;

    setTimeout(() => {
        messageElement.innerHTML = originalContent;
    }, 3000);
}

// Create confetti effect
function createConfetti() {
    const colors = ['#ff6b6b', '#74b9ff', '#ffd166', '#06d6a0', '#ff9e00'];

    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                top: 50%;
                left: 50%;
                border-radius: 2px;
                pointer-events: none;
                z-index: 1000;
            `;

            document.body.appendChild(confetti);

            // Animate confetti
            const angle = Math.random() * Math.PI * 2;
            const velocity = 1 + Math.random() * 2;
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;

            let posX = 50;
            let posY = 50;

            function animate() {
                posX += x;
                posY += y + 0.1; // gravity
                confetti.style.left = posX + '%';
                confetti.style.top = posY + '%';
                confetti.style.opacity = 1 - (posY - 50) / 50;

                if (posY < 150) {
                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            }

            animate();
        }, i * 40);
    }
}

// Simulated romantic sound
function playRomanticSound() {
    // Visual feedback for sound
    const soundIndicator = document.createElement('div');
    soundIndicator.textContent = '🎵';
    soundIndicator.style.cssText = `
        position: fixed;
        top: 10px;
        right: 10px;
        font-size: 20px;
        z-index: 1000;
        animation: fadeOut 2s forwards;
    `;

    document.body.appendChild(soundIndicator);

    setTimeout(() => {
        soundIndicator.remove();
    }, 2000);
}

// Add CSS for fadeOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(0.5); }
    }
`;
document.head.appendChild(style);

// Make cat interactive
document.querySelector('.cat').addEventListener('click', function(e) {
    createHeart(e.clientX, e.clientY);
    increaseLoveLevel(3);
    showSpecialMessage("Meow! Thank you for the love! 💖");
});

// Continuously create new floating elements
setInterval(() => {
    if (Math.random() > 0.7) {
        createFloatingElement('heart', ['💖', '💕', '💗', '💓']);
    }
    if (Math.random() > 0.8) {
        createFloatingElement('gift', ['🎁', '🎀', '🎊']);
    }
}, 3000);
