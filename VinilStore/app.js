// ================= BANCO DE DADOS ATUALIZADO =================
const ALBUMS_DATABASE = [
    {
        id: "wlr",
        title: "Whole Lotta Red",
        artist: "Playboi Carti",
        price: "R$ 249,90",
        genre: "Hip-Hop",
        cover: "https://imgs.search.brave.com/SEVt8MkQ58ecG-Wxsk07N5H0mxoZjzwqdgKBvWgih08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFMMkp2amlid0wu/anBn",
        tracks: ["Rockstar Made", "Go2DaMoon (feat. Kanye West)", "Stop Breathing", "Beno!", "JumpOutTheHouse"]
    },
    {
        id: "gkmc",
        title: "good kid, m.A.A.d city",
        artist: "Kendrick Lamar",
        price: "R$ 229,90",
        genre: "Hip-Hop",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop",
        tracks: ["Sherane a.k.a Master Splinter's Daughter", "Bitch, Don't Kill My Vibe", "Backseat Freestyle"]
    },
    {
        id: "blond",
        title: "Blonde",
        artist: "Frank Ocean",
        price: "R$ 219,90",
        genre: "R&B",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop",
        tracks: ["Nikes", "Ivy", "Pink + White", "Solo", "Self Control"]
    },
    {
        id: "sos",
        title: "SOS",
        artist: "SZA",
        price: "R$ 229,90",
        genre: "R&B",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
        tracks: ["SOS", "Kill Bill", "Seek & Destroy"]
    },
    {
        id: "darksidemoon",
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        price: "R$ 289,90",
        genre: "Rock",
        cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop",
        tracks: ["Speak to Me", "Breathe", "Time"]
    },
    {
        id: "daftram",
        title: "Random Access Memories",
        artist: "Daft Punk",
        price: "R$ 269,90",
        genre: "Electronic",
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop",
        tracks: ["Give Life Back to Music", "Giorgio by Moroder", "Get Lucky"]
    }
];

let userPreferences = [];

// Redireciona o usuário para a página física do produto com parâmetros na URL
function navigateToProductPage(albumId) {
    window.location.href = `disco.html?id=${albumId}`;
}

function renderCatalog() {
    const catalogContainer = document.getElementById('catalog-data-container');
    catalogContainer.innerHTML = ''; 

    const allGenres = [...new Set(ALBUMS_DATABASE.map(album => album.genre))];

    // Ordenação inteligente baseada no questionário do usuário
    const sortedGenres = [
        ...userPreferences, 
        ...allGenres.filter(g => !userPreferences.includes(g))
    ];

    sortedGenres.forEach((genre, index) => {
        const filteredAlbums = ALBUMS_DATABASE.filter(album => album.genre === genre);
        if (filteredAlbums.length === 0) return; 

        const isPreferred = userPreferences.includes(genre);
        const rowSection = document.createElement('div');
        rowSection.className = 'category-row';
        
        // Substituído a classe "carousel" por "catalog-grid" para cumprir a obrigatoriedade de CSS Grid do PDF
        rowSection.innerHTML = `
            <h3>${genre} ${isPreferred ? '<span>RECOMENDADO PARA VOCÊ</span>' : ''}</h3>
            <div class="catalog-grid" id="grid-${genre}">
                </div>
        `;
        
        catalogContainer.appendChild(rowSection);
        const gridContainer = document.getElementById(`grid-${genre}`);
        
        filteredAlbums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.onclick = () => navigateToProductPage(album.id);
            
            card.innerHTML = `
                <div class="album-cover-wrapper">
                    <img src="${album.cover}" alt="Capa do álbum ${album.title}">
                </div>
                <div class="album-info">
                    <span class="artist-name">${album.artist}</span>
                    <span class="album-title">${album.title}</span>
                </div>
                <div class="album-footer">
                    <span class="price">${album.price}</span>
                    <button class="wishlist-btn" onclick="event.stopPropagation(); alert('Adicionado aos favoritos!')">
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
                </div>
            `;
            gridContainer.appendChild(card);
        });

        // Injeção do Banner de Destaque da Semana (Whole Lotta Red) logo após a primeira seção
        if (index === 0) {
            const featuredBanner = document.createElement('div');
            featuredBanner.className = 'featured-row-split';
            featuredBanner.id = 'featured-release'; 
            
            featuredBanner.innerHTML = `
                <div class="featured-info-box">
                    <span class="featured-tag">VINIL DA SEMANA</span>
                    <h2>WHOLE LOTTA RED</h2>
                    <h3>PLAYBOI CARTI</h3>
                    <p class="price" style="font-size: 1.2rem; margin-bottom: 20px;">R$ 249,90</p>
                    <button class="btn-primary" onclick="navigateToProductPage('wlr')">VER DETALHES <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="featured-img-box">
                    <img src="https://imgs.search.brave.com/SEVt8MkQ58ecG-Wxsk07N5H0mxoZjzwqdgKBvWgih08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFMMkp2amlid0wu/anBn" alt="Whole Lotta Red">
                </div>
            `;
            catalogContainer.appendChild(featuredBanner);
        }
    });
}

// Verificação de Segurança ao carregar a página catalogo.html
window.addEventListener('DOMContentLoaded', () => {
    const savedPrefs = localStorage.getItem('vinil_store_pref');
    
    if (!savedPrefs) {
        // Se tentar burlar e acessar o catálogo direto sem o quiz, manda para o formulário
        window.location.href = 'formulario.html';
    } else {
        userPreferences = JSON.parse(savedPrefs);
        renderCatalog();
    }
});