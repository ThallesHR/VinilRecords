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

// Alternar visualização interna entre Catálogo e Página do Disco
function switchInternalView(showId, hideId) {
    document.getElementById(hideId).classList.remove('active');
    document.getElementById(showId).classList.add('active');
    window.scrollTo(0, 0);
}

function renderCatalog() {
    const catalogContainer = document.getElementById('catalog-data-container');
    catalogContainer.innerHTML = ''; // Limpa o contêiner para evitar duplicidade

    const allGenres = [...new Set(ALBUMS_DATABASE.map(album => album.genre))];

    // Ordena colocando as preferências do usuário no topo da lista
    const sortedGenres = [
        ...userPreferences, 
        ...allGenres.filter(g => !userPreferences.includes(g))
    ];

    // Percorre os gêneros ordenados para criar as fileiras (estilo Netflix)
    sortedGenres.forEach((genre, index) => {
        const filteredAlbums = ALBUMS_DATABASE.filter(album => album.genre === genre);
        if (filteredAlbums.length === 0) return; // Pula o gênero se não houver discos correspondentes

        const isPreferred = userPreferences.includes(genre);
        const rowSection = document.createElement('div');
        rowSection.className = 'category-row';
        
        rowSection.innerHTML = `
            <h3>${genre} ${isPreferred ? '<span>RECOMENDADO PARA VOCÊ</span>' : ''}</h3>
            <div class="carousel-container">
                <div class="carousel" id="carousel-${genre}">
                    </div>
            </div>
        `;
        
        catalogContainer.appendChild(rowSection);
        const carousel = document.getElementById(`carousel-${genre}`);
        
        // Injeta os álbuns daquela categoria
        filteredAlbums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.onclick = () => openProductPage(album.id);
            
            card.innerHTML = `
                <div class="album-cover-wrapper">
                    <img src="${album.cover}" alt="${album.title}">
                </div>
                <div class="album-info">
                    <span class="artist-name">${album.artist}</span>
                    <span class="album-title">${album.title}</span>
                </div>
                <div class="album-footer">
                    <span class="price">${album.price}</span>
                    <button class="wishlist-btn" onclick="event.stopPropagation(); alert('Favoritado!')">
                        <i class="fa-regular fa-bookmark"></i>
                    </button>
                </div>
            `;
            carousel.appendChild(card);
        });

        // INTERCEPTAÇÃO: Injeta o banner de destaque logo após a primeira fileira
        if (index === 0) {
            const featuredBanner = document.createElement('div');
            featuredBanner.className = 'featured-row-split';
            featuredBanner.id = 'featured-release'; // <-- ID adicionada aqui para a âncora funcionar!
            
            featuredBanner.innerHTML = `
                <div class="featured-info-box">
                    <span class="featured-tag">VINIL DA SEMANA</span>
                    <h2>WHOLE LOTTA RED</h2>
                    <h3>PLAYBOI CARTI</h3>
                    <p class="price" style="font-size: 1.2rem; margin-bottom: 20px;">R$ 249,90</p>
                    <button class="btn-primary" onclick="openProductPage('wlr')">VER DETALHES <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="featured-img-box">
                    <img src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=400&auto=format&fit=crop" alt="Whole Lotta Red">
                </div>
            `;
            catalogContainer.appendChild(featuredBanner);
        }
    });
}

// Abrir página dinâmica do disco
function openProductPage(albumId) {
    const album = ALBUMS_DATABASE.find(a => a.id === albumId);
    if(!album) return;

    const detailContent = document.getElementById('product-detail-content');
    detailContent.innerHTML = `
        <div class="product-image-side">
            <img src="${album.cover}" alt="${album.title}">
        </div>
        <div class="product-info-side">
            <h2>${album.title}</h2>
            <div class="artist">por ${album.artist}</div>
            <div class="product-price">${album.price}</div>
            <button class="btn-primary" style="padding: 16px 40px; font-size: 1.1rem;">
                <i class="fa-solid fa-cart-shopping"></i> ADICIONAR AO CARRINHO
            </button>
            <div class="tracklist">
                <h3>Faixas do Álbum</h3>
                <ol>${album.tracks.map(track => `<li>${track}</li>`).join('')}</ol>
            </div>
        </div>
    `;
    switchInternalView('product-screen', 'main-screen');
}

document.getElementById('back-to-catalog').addEventListener('click', () => {
    switchInternalView('main-screen', 'product-screen');
});

// Verificação de Segurança ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedPrefs = localStorage.getItem('vinil_store_pref');
    
    if (!savedPrefs) {
        // Se tentar acessar o catálogo sem responder o quiz, manda de volta para o formulário
        window.location.href = 'quiz.html';
    } else {
        userPreferences = JSON.parse(savedPrefs);
        renderCatalog();
    }
});