// ================= BANCO DE DADOS DE TOCA-DISCOS =================
const TURNTABLES_DATABASE = [
    {
        id: "td-vintage",
        title: "Vitrola Raveon Vintage",
        description: "Caixas de som embutidas, conexão Bluetooth e acabamento em madeira clássica rústica.",
        price: "R$ 699,90",
        stock: 3,
        cover: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "td-pro",
        title: "Audio-Technica LP60X",
        description: "Toca-discos automático profissional com tração por correia e agulha de diamante.",
        price: "R$ 1.689,90",
        stock: 5,
        cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "td-crosley",
        title: "Vitrola Maleta Crosley",
        description: "Design clássico de maleta portátil. Perfeito para iniciantes e fácil locomoção.",
        price: "R$ 549,90",
        stock: 2,
        cover: "https://images.unsplash.com/photo-1542208936-e6bdb041a4a7?q=80&w=400&auto=format&fit=crop"
    },
    {
        id: "td-audiophile",
        title: "Rega Planar 1 Premium",
        description: "Aparelhagem de alta performance para audiófilos exigentes. Fabricado na Inglaterra.",
        price: "R$ 3.499,90",
        stock: 1,
        cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    renderTurntables();
});

function renderTurntables() {
    const container = document.getElementById('turntables-grid-container');
    if (!container) return;

    container.innerHTML = '';

    TURNTABLES_DATABASE.forEach(item => {
        const card = document.createElement('div');
        card.className = 'album-card';
        card.style.minHeight = "420px"; 
        
        card.innerHTML = `
            <div class="album-cover-wrapper">
                <img src="${item.cover}" alt="${item.title}">
            </div>
            <div class="album-info" style="gap: 6px;">
                <span class="artist-name" style="color: var(--accent-red); font-size: 0.85rem;">EQUIPAMENTO</span>
                <span class="album-title" style="white-space: normal; font-weight: bold; color: #fff;">${item.title}</span>
                <p style="font-size: 0.75rem; color: #777; line-height: 1.4; margin-top: 4px;">${item.description}</p>
                <span id="stock-label-${item.id}" style="font-size: 0.75rem; font-weight: bold; color: #55ff55; margin-top: 2px;">
                    Estoque: ${item.stock} un.
                </span>
            </div>
            <div class="album-footer" style="margin-top: auto; padding-top: 10px;">
                <span class="price">${item.price}</span>
                <button class="btn-primary" id="btn-buy-${item.id}" onclick="buyTurntable('${item.id}')" style="padding: 6px 12px; font-size: 0.75rem;">
                    COMPRAR
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function buyTurntable(id) {
    const item = TURNTABLES_DATABASE.find(t => t.id === id);
    if (!item) return;

    if (item.stock > 0) {
        item.stock -= 1;
        
        const stockLabel = document.getElementById(`stock-label-${id}`);
        stockLabel.textContent = `Estoque: ${item.stock} un.`;

        if (item.stock === 0) {
            stockLabel.textContent = "PRODUTO ESGOTADO";
            stockLabel.style.color = "#b61919";
            
            const buyBtn = document.getElementById(`btn-buy-${id}`);
            buyBtn.disabled = true;
            buyBtn.textContent = "ESGOTADO";
            buyBtn.style.backgroundColor = "#333";
            buyBtn.style.cursor = "not-allowed";
        }

        // SALVA O TOCA DISCO REAL NA LISTA DO CARRINHO
        let cart = JSON.parse(localStorage.getItem('store_cart_items')) || [];
        const existingItem = cart.find(i => i.id === id);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ id: id, quantity: 1 });
        }
        localStorage.setItem('store_cart_items', JSON.stringify(cart));

        const totalQty = cart.reduce((acc, i) => acc + i.quantity, 0);
        localStorage.setItem('cart_count', totalQty);
        document.getElementById('cart-counter').textContent = totalQty;

        alert(`Sensacional! Você adicionou 1x ${item.title} ao seu carrinho.`);
    }
}