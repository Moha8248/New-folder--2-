// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    const logoText = document.getElementById('logo-text');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
        logoText.style.color = 'var(--foreground)';
    } else {
        nav.classList.remove('scrolled');
        logoText.style.color = 'white';
    }
});

// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close mobile menu when a link is clicked
        navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
            navLinks.classList.remove('open');
        }));
    }
});
        // Helper: shuffle array in-place
        function shuffleArray(arr) {
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }

        // Prepare data: keep major religions in order, shuffle the rest
        function prepareDisplay(data) {
            const majors = ['Hindu', 'Christian', 'Islamic'];
            const primary = data.filter(item => majors.includes(item.religion));
            const others = data.filter(item => !majors.includes(item.religion));
            shuffleArray(others);
            return primary.concat(others);
        }


// Render Landmarks
function renderCards(data) {
    const grid = document.getElementById('landmark-grid');
    grid.innerHTML = data.map(item => `
        <div class="card" style="position: relative;">
            <div style="position: relative; overflow: hidden;">
                <img src="${item.imageUrl}" class="card-img" alt="${item.name}">
                <span class="badge ${item.religion.toLowerCase()}">${item.religion.toUpperCase()}</span>
            </div>
            <div style="padding: 25px;">
                <h3 style="margin-bottom: 10px;">${item.name}</h3>
                <p style="color: var(--primary); font-size: 0.8rem; margin-bottom: 15px;">📍 ${item.location}</p>
                <p style="color: var(--muted-foreground); font-size: 0.9rem; margin-bottom: 20px;">${item.shortDescription || item.description || ''}</p>
                <button class="filter-btn read-btn" data-id="${item.id}" style="width: 100%; border-radius: 12px;">Read Story</button>
            </div>
        </div>
    `).join('');

    // Attach click handlers to 'Read Story' buttons
    document.querySelectorAll('.read-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-id');
            // Navigate to detail page for this landmark
            window.location.href = `landmark.html?id=${encodeURIComponent(id)}`;
        });
    });
}

// Filter Logic
function filterLandmarks(category, btn) {
    // Update Buttons
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter Data
    const filtered = category === 'All'
        ? LANDMARKS
        : LANDMARKS.filter(l => l.religion === category);

    renderCards(prepareDisplay(filtered));
}

// Initial Load
renderCards(prepareDisplay(LANDMARKS));