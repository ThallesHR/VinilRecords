// BANCO DE DADOS COMPLETO E UNIFICADO PARA MAPEAMENTO DO CARRINHO
const PRODUCTS_CATALOG = [
    { id: "wlr", title: "Whole Lotta Red", price: 249.90, cover: "img/wlred.jpg", type: "Vinil" },
    { id: "gkmc", title: "good kid, m.A.A.d city", price: 229.90, cover: "img/gkmc.jpg", type: "Vinil" },
    { id: "sos", title: "SOS", price: 229.90, cover: "img/sos.jpg", type: "Vinil" },
    { id: "darksidemoon", title: "The Dark Side of the Moon", price: 289.90, cover: "img/dsotm.jpg", type: "Vinil" },
    { id: "daftram", title: "Random Access Memories", price: 269.90, cover: "img/ram.jpg", type: "Vinil" },
    { id: "shortnsweet", title: "Short n' Sweet", price: 219.90, cover: "img/sns.jpeg", type: "Vinil" },
    { id: "romanceuntold", title: "ROMANCE : UNTOLD", price: 219.99, cover: "img/rmu.jpeg", type: "Vinil" },
    { id: "caos-alee", title: "CAOS", price: 49.90, cover: "img/caos.jpeg", type: "Vinil" },
    { id: "bh2", title: "</3 2", price: 149.90, cover: "img/bh2.jpeg", type: "Vinil" },
    { id: "getup", title: "Get Up", price: 139.90, cover: "img/getup.png", type: "Vinil" },
    { id: "ruby", title: "Ruby", price: 159.90, cover: "img/ruby.jpeg", type: "Vinil" },
    { id: "dawnfm", title: "Dawn FM", price: 199.90, cover: "img/dfm.jpeg", type: "Vinil" },
    { id: "swb2", title: "Swagboy 2", price: 49.90, cover: "img/swb2.png", type: "Vinil" },
    { id: "iet2", title: "Isso É Trap 2", price: 49.90, cover: "img/iet2.jpeg", type: "Vinil" },
    { id: "td-vintage", title: "Vitrola Raveon Vintage", price: 699.90, cover: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=400&auto=format&fit=crop", type: "Aparelho" },
    { id: "td-pro", title: "Audio-Technica LP60X", price: 1689.90, cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop", type: "Aparelho" },
    { id: "td-crosley", title: "Vitrola Maleta Crosley", price: 549.90, cover: "https://images.unsplash.com/photo-1542208936-e6bdb041a4a7?q=80&w=400&auto=format&fit=crop", type: "Aparelho" },
    { id: "td-audiophile", title: "Rega Planar 1 Premium", price: 3499.90, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop", type: "Aparelho" }
];

let cartItems = [];

document.addEventListener('DOMContentLoaded', () => {
    loadCartFromStorage();
    renderCart();
});

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('store_cart_items');
    cartItems = savedCart ? JSON.parse(savedCart) : [];
}

function saveCartToStorage() {
    localStorage.setItem('store_cart_items', JSON.stringify(cartItems));
    
    // Atualiza dinamicamente o número total de itens e renderiza no cabeçalho
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cart_count', totalQty);
    
    const badge = document.getElementById('cart-counter');
    if (badge) badge.textContent = totalQty;
}

function renderCart() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    if (cartItems.length === 0) {
        container.innerHTML = `
            <div style="padding: 40px; border: 1px dashed var(--border-color); text-align: center; color: var(--text-gray);">
                <i class="fa-solid fa-basket-shopping" style="font-size: 3rem; margin-bottom: 15px; color: #333;"></i>
                <p>Seu carrinho está vazio neste momento.</p>
            </div>`;
        updateFinancialSummary(0);
        return;
    }

    container.innerHTML = '';
    let cumulativePrice = 0;

    cartItems.forEach(cartItem => {
        const product = PRODUCTS_CATALOG.find(p => p.id === cartItem.id);
        if (!product) return;

        const itemSubtotal = product.price * cartItem.quantity;
        cumulativePrice += itemSubtotal;

        // Sanitização contra quebra do título do Destroy Lonely
        const safeTitle = product.title.replace(/</g, '&lt;').replace(/>/g, '&gt;');

        const itemRow = document.createElement('div');
        itemRow.style.display = "flex";
        itemRow.style.alignItems = "center";
        itemRow.style.backgroundColor = "var(--bg-card)";
        itemRow.style.padding = "15px";
        itemRow.style.border = "1px solid var(--border-color)";
        itemRow.style.gap = "20px";

        itemRow.innerHTML = `
            <img src="${product.cover}" alt="${safeTitle}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 2px;">
            
            <div style="flex-grow: 1;">
                <span style="font-size: 0.75rem; color: var(--accent-red); font-weight: bold; text-transform: uppercase;">${product.type}</span>
                <h4 style="margin: 2px 0 4px; font-size: 1.05rem;">${safeTitle}</h4>
                <span style="color: var(--text-gray); font-size: 0.9rem;">Preço un: R$ ${product.price.toFixed(2).replace('.', ',')}</span>
            </div>

            <div style="display: flex; align-items: center; border: 1px solid #333; background-color: #000;">
                <button onclick="changeQty('${product.id}', -1)" style="background: none; border: none; color: white; padding: 8px 12px; cursor: pointer; font-weight: bold;">-</button>
                <span style="padding: 0 10px; font-weight: bold; font-size: 0.95rem;">${cartItem.quantity}</span>
                <button onclick="changeQty('${product.id}', 1)" style="background: none; border: none; color: white; padding: 8px 12px; cursor: pointer; font-weight: bold;">+</button>
            </div>

            <div style="min-width: 110px; text-align: right;">
                <span style="font-weight: bold; color: white; display: block;">R$ ${itemSubtotal.toFixed(2).replace('.', ',')}</span>
            </div>

            <button onclick="deleteProduct('${product.id}')" style="background: none; border: none; color: #555; cursor: pointer; font-size: 1.1rem; transition: color 0.2s;" onmouseover="this.style.color='var(--accent-red)'" onmouseout="this.style.color='#555'">
                <i class="fa-regular fa-trash-can"></i>
            </button>
        `;

        container.appendChild(itemRow);
    });

    updateFinancialSummary(cumulativePrice);
}

function changeQty(id, modifier) {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;

    item.quantity += modifier;

    if (item.quantity <= 0) {
        deleteProduct(id);
        return;
    }

    saveCartToStorage();
    renderCart();
}

function deleteProduct(id) {
    cartItems = cartItems.filter(i => i.id !== id);
    saveCartToStorage();
    renderCart();
}

function updateFinancialSummary(totalValue) {
    const formattedPrice = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
    document.getElementById('subtotal-value').textContent = formattedPrice;
    document.getElementById('total-value').textContent = formattedPrice;
}

function checkoutEvent() {
    if(cartItems.length === 0) return;
    alert("🛒 Compra Finalizada com Sucesso! Seu pedido será processado. Obrigado por comprar na Vinil Records.");
    cartItems = []; 
    saveCartToStorage();
    renderCart();
}