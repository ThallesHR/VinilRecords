// ================= BANCO DE DADOS ATUALIZADO =================
const ALBUMS_DATABASE = [
    {
        id: "wlr",
        title: "Whole Lotta Red",
        artist: "Playboi Carti",
        price: "R$ 249,90",
        genre: "Hip-Hop",
        cover: "img/wlred.jpg",
        tracks: ["Rockstar Made", "Go2DaMoon (feat. Kanye West)", "Stop Breathing", "Beno!", "JumpOutTheHouse", "M3tamorphosis (feat. Kid Cudi)", "Slay3r", "No Sl33p", "New Tank", "Teen X (feat. Future)", "Meh", "Vamp Anthem", "New N3on", "Control", "Punk Monk", "On That Time", "King Vamp", "Place", "Sky", "Over", "ILoveUIHateU", "Die4Guy", "Not PLaying", "F33l Lik3 Dyin"]
    },
    {
        id: "gkmc",
        title: "good kid, m.A.A.d city",
        artist: "Kendrick Lamar",
        price: "R$ 229,90",
        genre: "Hip-Hop",
        cover: "img/gkmc.jpg",
        tracks: ["Sherane a.k.a Master Splinter's Daughter", "Bitch, Don't Kill My Vibe", "Backseat Freestyle", "The Art of Peer Pressure", "Money Trees", "Poetic Justice", "good kid", "m.A.A.d city", "Swimming Pools (Drank)", "Sing About Me, I'm Dying of Thirst", "Real", "Compton"]
    },
    {
        id: "sos",
        title: "SOS",
        artist: "SZA",
        price: "R$ 229,90",
        genre: "Pop/R&B",
        cover: "img/sos.jpg",
        tracks: ["SOS", "Kill Bill", "Seek & Destroy", "Low", "Love Language", "Blind", "OMG", "Too Late", "Snooze", "Notice Me", "Gone Girl", "Smoking on My Ex Pack", "Ghost in the Machine (feat. Phoebe Bridgers)", "F2F", "Nobody Gets Me", "Conceited", "Special", "Too Late", "Far", "Shirt", "Open Arms (feat. Travis Scott)", "I Hate U", "Good Days", "Forgiveless (feat. Ol' Dirty Bastard)"]
    },
    {
        id: "darksidemoon",
        title: "The Dark Side of the Moon",
        artist: "Pink Floyd",
        price: "R$ 289,90",
        genre: "Rock",
        cover: "img/dsotm.jpg",
        tracks: ["Speak to Me", "Breathe", "Time"]
    },
    {
        id: "daftram",
        title: "Random Access Memories",
        artist: "Daft Punk",
        price: "R$ 269,90",
        genre: "Electronic",
        cover: "img/ram.jpg",
        tracks: ["Give Life Back to Music", "Giorgio by Moroder", "Get Lucky"]
    },
    {
        id: "shortnsweet",
        title: "Short n' Sweet",
        artist: "Sabrina Carpenter",
        price: "R$ 219,90",
        genre: "Pop/R&B",
        cover: "img/sns.jpg",
        tracks: ["Taste", "Please Please Please", "Good Graces", "Sharpest Tool", "Coincidence", "Bed Chem", "Espresso", "Dumb & Poetic", "Slim Pickins", "Juno", "Lie to Girls", "Don't Smile"]
    },
    {
        id: "romanceuntold",
        title: "ROMANCE : UNTOLD",
        artist: "ENHYPEN",
        price: "R$ 219,99",
        genre: "Pop/R&B",
        cover: "img/rmu.jpeg",
        tracks: ["Moonstruck", "XO (Only If You Say Yes)", "Your Eyes Only", "Hundred Broken Hearts", "Brought The Heat Back", "Paranoid", "Royalty", "Highway 1001", "Romance : Untold (feat. JVKE)"]
    },
    { 
        id: "caos-alee",
        title: "CAOS",
        artist: "Alee",
        price: "R$ 49,90",
        genre: "Hip-Hop",
        cover: "img/caos.jpeg",
        tracks: ["INTRO MALANDRAGEM", "TEMPO DO OURO", "PASSADO DE UM VILÃO", "ON", "HERANÇA", "DISCO DE PLATINA", "AMOR E ÓDIO (feat. Senndy)", "ALPINISTA SOCIAL (feat. Klisman)", "CAROLINA", "PARTY (feat. Anezzi, Klisman & Saboya)", "SEGREDO (feat. Brandão85)", "NÚMERO DA SORTE", "ÚLTIMA VEZ", "ESTRESSE"]
    },
    {
        id: "bh2",
        title: "</3 2",
        artist: "Destroy Lonely",
        price: "R$ 149,90",
        genre: "Hip-Hop",
        cover: "img/bh2.jpeg",
        tracks: ["Top Floor Boss", "Oh Yeah", "Pop Shit / Xtra", "Miley Cyrus", "F.U.N", "Ya Ight", "Dover Street Market", "Tokyo Mission Impossible", "OK BAE", "Take A Pic", "Movie", "Groupie Btch", "Do or Die"]
    },
    {
        id: "getup",
        title: "Get Up",
        artist: "NewJeans",
        price: "R$ 139,90",
        genre: "Pop/R&B",
        cover: "img/getup.png",
        tracks: ["New Jeans", "Super Shy", "ETA", "Cool With You", "Get Up", "ASAP"]
    },
    {
        id: "ruby",
        title: "Ruby",
        artist: "Jennie",
        price: "R$ 159,90",
        genre: "Pop/R&B",
        cover: "img/ruby.jpeg",
        tracks: ["Intro : JANE (with FKJ)", "like JENNIE", "start a war", "Handlebars (feat. Dua Lipa)", "with the IE (way up)", "ExtraL (feat. Doechii)", "Mantra", "Love Hangover (feat. Dominic Fike)", "ZEN", "Damn Right (feat. Childish Gambino & Kali Uchis)", "F.T.S.", "Filter", "Seoul City", "Starlight", "twin"]
    },
    {
        id: "dawnfm",
        title: "Dawn FM",
        artist: "The Weeknd",
        price: "R$ 199,90",
        genre: "Pop/R&B",
        cover: "img/dfm.jpeg",
        tracks: ["Dawn FM", "Gasoline", "How Do I Make You Love Me?", "Take My Breath", "Sacrifice", "A Tale By Quincy", "Out of Time", "Here We Go... Again (feat. Tyler, The Creator)", "Best Friends", "Is There Someone Else?", "Starry Eyes", "Every Angel is Terrifying", "Don't Break My Heart", "I Heard You're Married (feat. Lil Wayne)", "Less Than Zero", "Phantom Regret by Jim"]
    },
    {
        id: "swb2",
        title: "Swagboy 2",
        artist: "PHL Noturnboy",
        price: "R$ 49,90",
        genre: "Hip-Hop",
        cover: "img/swb2.png",
        tracks: ["CINZAS", "SOMOS LOUCOS", "IPIRYUM", "OQUE É SWAG", "DELIRYUM", "RITUAL", "CORPUS", "VOCÊ SENTE ISSO", "O AMOR", "RHIANA", "PSICK@SWAG (feat. DESSIIIK)", "BABYTHUG (feat. Guap508)", "SWAGSOLDIER (feat. Emitê Único)", "PENSAMENTOS", "PECADOS DA CARNE", "TUDO PASSARÁ", "TEMPO", "DORES E ILUSÕES", "SPOT"]
    },
    {
        id: "iet2",
        title: "Isso É Trap 2",
        artist: "Brandão",
        price: "R$ 49,90",
        genre: "Hip-Hop",
        cover: "img/iet2.jpeg",
        tracks: ["BENÇA", "OK", "PARIS", "WARZONE", "BLUNT DE GOIABA", "JAQUETA BAPE", "MOOD", "MILAGRE", "FÓRMULAS & MIRAGENS", "BUG NA MATRIX", "JAPONÊS (feat. Matuê)", "ROCKSTAR (feat. Desiree)", "DEPOIS DO SHOW", "COMIGO MESMO"]
    },
    {
        id: "qpevc",
        title: "Qual Piranha Eu Vou Comer",
        artist: "Dj Tagarazz",
        price: "R$ 67,00",
        genre: "Electronic",
        cover: "img/qpevc.jpeg",
        tracks: ["Qual Piranha Eu Vou Comer"]
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
        
        rowSection.innerHTML = `
            <h3>${genre} ${isPreferred ? '<span>RECOMENDADO PARA VOCÊ</span>' : ''}</h3>
            <div class="catalog-grid" id="grid-${genre}"></div>
        `;
        
        catalogContainer.appendChild(rowSection);
        const gridContainer = document.getElementById(`grid-${genre}`);
        
        filteredAlbums.forEach(album => {
            const card = document.createElement('div');
            card.className = 'album-card';
            card.onclick = () => navigateToProductPage(album.id);
            
            // CORREÇÃO: Transforma os caracteres especiais </ e > em texto seguro para não quebrar o DOM
            const safeTitle = album.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');
            
            card.innerHTML = `
                <div class="album-cover-wrapper">
                    <img src="${album.cover}" alt="Capa do álbum ${safeTitle}">
                </div>
                <div class="album-info">
                    <span class="album-title">${safeTitle}</span>
                    <span class="artist-name">${album.artist}</span>
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
                    <img src="img/wlredbn.jpg" alt="Whole Lotta Red Banner">
                </div>
            `;
            catalogContainer.appendChild(featuredBanner);
        }
    });
}

// Verificação de Segurança ao carregar a página catalogo.html
window.addEventListener('DOMContentLoaded', () => {
    const savedPrefs = localStorage.getItem('vinil_store_pref');

    if (savedPrefs) {
        userPreferences = JSON.parse(savedPrefs);
    }

    renderCatalog();
});