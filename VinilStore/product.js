// Banco de dados compartilhado localmente para montagem da página
const ALBUMS_DATABASE = [
    {
        id: "wlr",
        title: "Whole Lotta Red",
        artist: "Playboi Carti",
        price: "R$ 249,90",
        cover: "https://imgs.search.brave.com/SEVt8MkQ58ecG-Wxsk07N5H0mxoZjzwqdgKBvWgih08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFMMkp2amlid0wu/anBn",
        tracks: ["Rockstar Made", "Go2DaMoon (feat. Kanye West)", "Stop Breathing", "Beno!", "JumpOutTheHouse"]
    },
    {
        id: "gkmc",
        title: "good kid, m.A.A.d city",
        artist: "Kendrick Lamar",
        price: "R$ 229,90",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop",
        tracks: ["Sherane a.k.a Master Splinter's Daughter", "Bitch, Don't Kill My Vibe", "Backseat Freestyle"]
    },
    {
        id: "blond",
        title: "Blonde",
        artist: "Frank Ocean",
        price: "R$ 219,90",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop",
        tracks: ["Nikes", "Ivy", "Pink + White", "Solo", "Self Control"]
    },
    {
        id: "sos",
        title: "SOS",
        artist: "SZA",
        price: "R$ 229,90",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop",
        tracks: ["SOS", "Kill Bill", "Seek & Destroy"]
    },
    {
        id: "darksidemoon",
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        price: "R$ 289,90",
        cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop",
        tracks: ["Speak to Me", "Breathe", "Time"]
    },
    {
        id: "daftram",
        title: "Random Access Memories",
        artist: "Daft Punk",
        price: "R$ 269,90",
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop",
        tracks: ["Give Life Back to Music", "Giorgio by Moroder", "Get Lucky"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');

    const album = ALBUMS_DATABASE.find(a => a.id === albumId);
    const detailContent = document.getElementById('product-detail-content');

    if(!album) {
        detailContent.innerHTML = "<h2>Álbum não encontrado no catálogo.</h2>";
        return;
    }

    // Injeta dinamicamente os dados na estrutura de duas colunas
    detailContent.innerHTML = `
        <div class="product-image-side">
            <img src="${album.cover}" alt="${album.title}">
        </div>
        <div class="product-info-side">
            <h2>${album.title}</h2>
            <div class="artist">por ${album.artist}</div>
            <div class="product-price">${album.price}</div>
            
            <div class="rating-box" style="margin-bottom: 20px; color: #aaa; cursor:pointer;">
                <span class="star" data-idx="1"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="2"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="3"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="4"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="5"><i class="fa-regular fa-star"></i></span>
            </div>

            <button class="btn-primary" id="buy-btn" style="padding: 16px 40px; font-size: 1.1rem;">
                <i class="fa-solid fa-cart-shopping"></i> ADICIONAR AO CARRINHO
            </button>
            <div class="tracklist">
                <h3>Faixas do Álbum</h3>
                <ol>${album.tracks.map(track => `<li>${track}</li>`).join('')}</ol>
            </div>
        </div>
    `;

    // Ativa eventos das estrelas e carrinho após a injeção do HTML
    setupStars();
    document.getElementById('buy-btn').addEventListener('click', () => alert('Item adicionado ao carrinho!'));
});

function setupStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const idx = this.getAttribute('data-idx');
            stars.forEach(s => {
                const i = s.querySelector('i');
                if(s.getAttribute('data-idx') <= idx) {
                    i.className = "fa-solid fa-star";
                    s.style.color = "#b61919";
                } else {
                    i.className = "fa-regular fa-star";
                    s.style.color = "#aaa";
                }
            });
        });
    });
}