// ================= BANCO DE DADOS DE VINIS =================
const ALBUMS_DATABASE = [
    {
        id: "wlr",
        title: "Whole Lotta Red",
        artist: "Playboi Carti",
        price: "R$ 249,90",
        cover: "img/wlred.jpg",
        tracks: ["Rockstar Made", "Go2DaMoon (feat. Kanye West)", "Stop Breathing", "Beno!", "JumpOutTheHouse", "M3tamorphosis (feat. Kid Cudi)", "Slay3r", "No Sl33p", "New Tank", "Teen X (feat. Future)", "Meh", "Vamp Anthem", "New N3on", "Control", "Punk Monk", "On That Time", "King Vamp", "Place", "Sky", "Over", "ILoveUIHateU", "Die4Guy", "Not PLaying", "F33l Lik3 Dyin"]
    },
    {
        id: "gkmc",
        title: "good kid, m.A.A.d city",
        artist: "Kendrick Lamar",
        price: "R$ 229,90",
        cover: "img/gkmc.jpg",
        tracks: ["Sherane a.k.a Master Splinter's Daughter", "Bitch, Don't Kill My Vibe", "Backseat Freestyle", "The Art of Peer Pressure", "Money Trees", "Poetic Justice", "good kid", "m.A.A.d city", "Swimming Pools (Drank)", "Sing About Me, I'm Dying of Thirst", "Real", "Compton"]
    },
    {
        id: "sos",
        title: "SOS",
        artist: "SZA",
        price: "R$ 229,90",
        cover: "img/sos.jpg",
        tracks: ["SOS", "Kill Bill", "Seek & Destroy", "Low", "Love Language", "Blind", "OMG", "Too Late", "Snooze", "Notice Me", "Gone Girl", "Smoking on My Ex Pack", "Ghost in the Machine (feat. Phoebe Bridgers)", "F2F", "Nobody Gets Me", "Conceited", "Special", "Too Late", "Far", "Shirt", "Open Arms (feat. Travis Scott)", "I Hate U", "Good Days", "Forgiveless (feat. Ol' Dirty Bastard)"]
    },
    {
        id: "darksidemoon",
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        price: "R$ 289,90",
        cover: "img/dsotm.jpg",
        tracks: ["Speak to Me", "Breathe", "Time"]
    },
    {
        id: "daftram",
        title: "Random Access Memories",
        artist: "Daft Punk",
        price: "R$ 269,90",
        cover: "img/ram.jpg",
        tracks: ["Give Life Back to Music", "Giorgio by Moroder", "Get Lucky"]
    },
    {
        id: "shortnsweet",
        title: "Short n' Sweet",
        artist: "Sabrina Carpenter",
        price: "R$ 219,90",
        cover: "img/sns.jpg",
        tracks: ["Taste", "Please Please Please", "Good Graces", "Sharpest Tool", "Coincidence", "Bed Chem", "Espresso", "Dumb & Poetic", "Slim Pickins", "Juno", "Lie to Girls", "Don't Smile"]
    },
    {
        id: "romanceuntold",
        title: "ROMANCE : UNTOLD",
        artist: "ENHYPEN",
        price: "R$ 219,99",
        cover: "img/rmu.jpeg",
        tracks: ["Moonstruck", "XO (Only If You Say Yes)", "Your Eyes Only", "Hundred Broken Hearts", "Brought The Heat Back", "Paranoid", "Royalty", "Highway 1001", "Romance : Untold (feat. JVKE)"]
    },
    { 
        id: "caos-alee",
        title: "CAOS",
        artist: "Alee",
        price: "R$ 49,90",
        cover: "img/caos.jpeg",
        tracks: ["INTRO MALANDRAGEM", "TEMPO DO OURO", "PASSADO DE UM VILÃO", "ON", "HERANÇA", "DISCO DE PLATINA", "AMOR E ÓDIO (feat. Senndy)", "ALPINISTA SOCIAL (feat. Klisman)", "CAROLINA", "PARTY (feat. Anezzi, Klisman & Saboya)", "SEGREDO (feat. Brandão85)", "NÚMERO DA SORTE", "ÚLTIMA VEZ", "ESTRESSE"]
    },
    {
        id: "bh2",
        title: "</3 2",
        artist: "Destroy Lonely",
        price: "R$ 149,90",
        cover: "img/bh2.jpeg",
        tracks: ["Top Floor Boss", "Oh Yeah", "Pop Shit / Xtra", "Miley Cyrus", "F.U.N", "Ya Ight", "Dover Street Market", "Tokyo Mission Impossible", "OK BAE", "Take A Pic", "Movie", "Groupie Btch", "Do or Die"]
    },
    {
        id: "getup",
        title: "Get Up",
        artist: "NewJeans",
        price: "R$ 139,90",
        cover: "img/getup.png",
        tracks: ["New Jeans", "Super Shy", "ETA", "Cool With You", "Get Up", "ASAP"]
    },
    {
        id: "ruby",
        title: "Ruby",
        artist: "Jennie",
        price: "R$ 159,90",
        cover: "img/ruby.jpeg",
        tracks: ["Intro : JANE (with FKJ)", "like JENNIE", "start a war", "Handlebars (feat. Dua Lipa)", "with the IE (way up)", "ExtraL (feat. Doechii)", "Mantra", "Love Hangover (feat. Dominic Fike)", "ZEN", "Damn Right (feat. Childish Gambino & Kali Uchis)", "F.T.S.", "Filter", "Seoul City", "Starlight", "twin"]
    },
    {
        id: "dawnfm",
        title: "Dawn FM",
        artist: "The Weeknd",
        price: "R$ 199,90",
        cover: "img/dfm.jpeg",
        tracks: ["Dawn FM", "Gasoline", "How Do I Make You Love Me?", "Take My Breath", "Sacrifice", "A Tale By Quincy", "Out of Time", "Here We Go... Again (feat. Tyler, The Creator)", "Best Friends", "Is There Someone Else?", "Starry Eyes", "Every Angel is Terrifying", "Don't Break My Heart", "I Heard You're Married (feat. Lil Wayne)", "Less Than Zero", "Phantom Regret by Jim"]
    },
    {
        id: "swb2",
        title: "Swagboy 2",
        artist: "PHL Noturnboy",
        price: "R$ 49,90",
        cover: "img/swb2.png",
        tracks: ["CINZAS", "SOMOS LOUCOS", "IPIRYUM", "OQUE É SWAG", "DELIRYUM", "RITUAL", "CORPUS", "VOCÊ SENTE ISSO", "O AMOR", "RHIANA", "PSICK@SWAG (feat. DESSIIIK)", "BABYTHUG (feat. Guap508)", "SWAGSOLDIER (feat. Emitê Único)", "PENSAMENTOS", "PECADOS DA CARNE", "TUDO PASSARÁ", "TEMPO", "DORES E ILUSÕES", "SPOT"]
    },
    {
        id: "iet2",
        title: "Isso É Trap 2",
        artist: "Brandão",
        price: "R$ 49,90",
        cover: "img/iet2.jpeg",
        tracks: ["BENÇA", "OK", "PARIS", "WARZONE", "BLUNT DE GOIABA", "JAQUETA BAPE", "MOOD", "MILAGRE", "FÓRMULAS & MIRAGENS", "BUG NA MATRIX", "JAPONÊS (feat. Matuê)", "ROCKSTAR (feat. Desiree)", "DEPOIS DO SHOW", "COMIGO MESMO"]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();

    const urlParams = new URLSearchParams(window.location.search);
    const albumId = urlParams.get('id');
    const album = ALBUMS_DATABASE.find(a => a.id === albumId);
    const detailContent = document.getElementById('product-detail-content');

    if (!detailContent) return;

    if (!album) {
        detailContent.innerHTML = "<h2>Álbum não encontrado no catálogo.</h2>";
        return;
    }

    // Sanitização para prevenir a quebra do título do Destroy Lonely </3 2
    const safeTitle = album.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');

    detailContent.innerHTML = `
        <div class="product-image-side">
            <img src="${album.cover}" alt="Capa do álbum ${safeTitle}">
        </div>
        <div class="product-info-side">
            <h2>${safeTitle}</h2>
            <div class="artist">por ${album.artist}</div>
            <div class="product-price">${album.price}</div>
            
            <div class="rating-box" style="margin-bottom: 25px; font-size: 1.2rem; color: #aaa;">
                <span style="font-size: 0.9rem; margin-right: 10px; color: #aaa; cursor: default;">Avalie este álbum:</span>
                <span class="star" data-idx="1" style="cursor: pointer;"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="2" style="cursor: pointer;"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="3" style="cursor: pointer;"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="4" style="cursor: pointer;"><i class="fa-regular fa-star"></i></span>
                <span class="star" data-idx="5" style="cursor: pointer;"><i class="fa-regular fa-star"></i></span>
            </div>

            <button class="btn-primary" id="buy-btn" style="padding: 16px 40px; font-size: 1.1rem; width: 100%; max-width: 320px; justify-content: center;">
                <i class="fa-solid fa-cart-shopping"></i> ADICIONAR AO CARRINHO
            </button>
            <div class="tracklist">
                <h3>Faixas do Álbum</h3>
                <ol>${album.tracks.map(track => `<li>${track}</li>`).join('')}</ol>
            </div>
        </div>
    `;

    setupStars();

    // REGRA DE NEGÓCIO CORRIGIDA: Adiciona o objeto real no array do carrinho
    document.getElementById('buy-btn').addEventListener('click', () => {
        addItemToGlobalCart(album.id);
        alert(`"${safeTitle}" foi adicionado ao seu carrinho!`);
    });
});

// FUNÇÃO GLOBAL DE INSERÇÃO NO CARRINHO
function addItemToGlobalCart(productId) {
    let cart = JSON.parse(localStorage.getItem('store_cart_items')) || [];
    
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1; // Incrementa se já existir
    } else {
        cart.push({ id: productId, quantity: 1 }); // Cria um novo se não existir
    }
    
    localStorage.setItem('store_cart_items', JSON.stringify(cart));
    
    // Atualiza o contador de cabeçalho unificado
    const totalQty = cart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cart_count', totalQty);
    updateCartBadge();
}

function updateCartBadge() {
    const count = localStorage.getItem('cart_count') || 0;
    const badge = document.getElementById('cart-counter');
    if (badge) badge.textContent = count;
}

function setupStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const idx = this.getAttribute('data-idx');
            stars.forEach(s => {
                const icon = s.querySelector('i');
                if (s.getAttribute('data-idx') <= idx) {
                    icon.className = "fa-solid fa-star";
                    s.style.color = "#b61919";
                } else {
                    icon.className = "fa-regular fa-star";
                    s.style.color = "#aaa";
                }
            });
        });
    });
}