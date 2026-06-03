const vibes = [
    {
        mood: "Крутая энергия",
        emoji: "⚡",
        color: "#FF6B6B",
        desc: "Пора творить, берись за дело!",
        music: "🎸 Rock / Hiphop"
    },
    {
        mood: "Спокойствие",
        emoji: "🌊",
        color: "#4ECDC4",
        desc: "Время медленно плыть сквозь день",
        music: "🎹 Lo-fi / Ambient"
    },
    {
        mood: "Счастье",
        emoji: "🌞",
        color: "#FFE66D",
        desc: "День отличный, всё возможно!",
        music: "🎺 Funk / Pop"
    },
    {
        mood: "Творческий поток",
        emoji: "🎨",
        color: "#A8E6CF",
        desc: "Вдохновение на максимум",
        music: "🎼 Indie / Synthwave"
    },
    {
        mood: "Глубокие мысли",
        emoji: "🌙",
        color: "#6C5CE7",
        desc: "Погружайся в себя и философию",
        music: "🎙️ Downtempo / Jazz"
    },
    {
        mood: "Вечеринка",
        emoji: "🎉",
        color: "#FD79A8",
        desc: "Танцуй как никто не видит!",
        music: "🔊 Electro / Disco"
    },
    {
        mood: "Меланхолия",
        emoji: "🌧️",
        color: "#74B9FF",
        desc: "Просто почувствуй эмоции",
        music: "🎵 Sad-core / Ballads"
    },
    {
        mood: "Дикая свобода",
        emoji: "🚀",
        color: "#FF7675",
        desc: "Взлетай и покоряй вершины",
        music: "🎸 Punk / Metal"
    },
    {
        mood: "Любовь и нежность",
        emoji: "💜",
        color: "#D63031",
        desc: "Чувствуй сердцем, люби искренне",
        music: "💕 R&B / Soul"
    },
    {
        mood: "Приключение",
        emoji: "🗺️",
        color: "#E17055",
        desc: "Ищи новые горизонты",
        music: "🎼 Orchestral / Adventure"
    },
    {
        mood: "Ленивая суббота",
        emoji: "🛋️",
        color: "#6C5CE7",
        desc: "Ничего не делай, просто кайфуй",
        music: "🎶 Chillhop / Reggae"
    },
    {
        mood: "Мотивация",
        emoji: "💪",
        color: "#00B894",
        desc: "Ты можешь всё, если захочешь!",
        music: "🏆 Motivational / EDM"
    }
];

let vibeCount = localStorage.getItem('vibeCount') || 0;
document.getElementById('vibeCount').textContent = `Вибов найдено: ${vibeCount}`;

function generateVibe() {
    const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];

    document.getElementById('vibeMood').textContent = randomVibe.mood;
    document.getElementById('vibeEmoji').textContent = randomVibe.emoji;
    document.getElementById('vibeDesc').textContent = randomVibe.desc;
    document.getElementById('vibeMusic').textContent = randomVibe.music;
    document.getElementById('vibeColor').style.backgroundColor = randomVibe.color;

    vibeCount++;
    localStorage.setItem('vibeCount', vibeCount);
    document.getElementById('vibeCount').textContent = `Вибов найдено: ${vibeCount}`;

    // Vibration feedback for phones
    if (navigator.vibrate) {
        navigator.vibrate([50, 30, 50]);
    }

    // Change background gradient
    const hues = [240, 260, 340, 20, 120, 180, 45, 290];
    const randomHue = hues[Math.floor(Math.random() * hues.length)];
    const nextHue = hues[Math.floor(Math.random() * hues.length)];
    document.body.style.background = `linear-gradient(135deg, hsl(${randomHue}, 70%, 60%) 0%, hsl(${nextHue}, 70%, 60%) 100%)`;
}

function shareVibe() {
    const mood = document.getElementById('vibeMood').textContent;
    const emoji = document.getElementById('vibeEmoji').textContent;
    const desc = document.getElementById('vibeDesc').textContent;

    const text = `${emoji} ${mood}\n${desc}\n\nМой вайб на vibecoding.github.io ✨`;

    if (navigator.share) {
        navigator.share({
            title: 'VibeCoding',
            text: text,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text);
        alert('Скопировано в буфер обмена! 📋');
    }
}

// Generate initial vibe on load
window.addEventListener('load', generateVibe);
