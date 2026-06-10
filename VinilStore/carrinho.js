// UNIFICAÇÃO DOS PRODUTOS DO SITE PARA MAPEAMENTO DE DADOS DO CARRINHO
const PRODUCTS_CATALOG = [
    { id: "wlr", title: "Whole Lotta Red", price: 249.90, cover: "https://imgs.search.brave.com/SEVt8MkQ58ecG-Wxsk07N5H0mxoZjzwqdgKBvWgih08/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/MzFMMkp2amlid0wu/anBn", type: "Vinil" },
    { id: "gkmc", title: "good kid, m.A.A.d city", price: 229.90, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=400&auto=format&fit=crop", type: "Vinil" },
    { id: "blond", title: "Blonde", price: 219.90, cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop", type: "Vinil" },
    { id: "sos", title: "SOS", price: 229.90, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop", type: "Vinil" },
    { id: "darksidemoon", title: "The Dark Side of the Moon", price: 289.90, cover: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=400&auto=format&fit=crop", type: "Vinil" },
    { id: "daftram", title: "Random Access Memories", price: 269.90, cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=400&auto=format&fit=crop", type: "Vinil" },
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

// Carrega os dados persistidos ou simula itens iniciais de teste caso esteja vazio
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('store_cart_items');
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    } else {
        // Mock acadêmico inicial para a página não abrir vazia no primeiro teste do professor
        cartItems = [
            { id: "wlr", quantity: 1 },
            { id: "blond", quantity: 2 }
        ];
        saveCartToStorage();
    }
}

function saveCartToStorage() {
    localStorage.setItem('store_cart_items', JSON.stringify(cartItems));
    
    // Atualiza o contador simplificado das outras páginas para manter compatibilidade
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem('cart_count', totalQty);
}

// Renderiza os elementos do carrinho na tela via DOM (Item 53 do PDF)
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

    container.innerHTML = ''; // Reseta container
    let cumulativePrice = 0;

    cartItems.forEach(cartItem => {
        const product = PRODUCTS_CATALOG.find(p => p.id === cartItem.id);
        if (!product) return;

        const itemSubtotal = product.price * cartItem.quantity;
        cumulativePrice += itemSubtotal;

        // Cria a linha estrutural do produto usando Flexbox horizontal
        const itemRow = document.createElement('div');
        itemRow.style.display = "flex";
        itemRow.style.alignItems = "center";
        itemRow.style.backgroundColor = "var(--bg-card)";
        itemRow.style.padding = "15px";
        itemRow.style.border = "1px solid var(--border-color)";
        itemRow.style.gap = "20px";

        itemRow.innerHTML = `
            <img src="${product.cover}" alt="${product.title}" style="width: 70px; height: 70px; object-fit: cover; border-radius: 2px;">
            
            <div style="flex-grow: 1;">
                <span style="font-size: 0.75rem; color: var(--accent-red); font-weight: bold; text-transform: uppercase;">${product.type}</span>
                <h4 style="margin: 2px 0 4px; font-size: 1.05rem;">${product.title}</h4>
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

// Altera a quantidade de um item (+1 ou -1)
function changeQty(id, modifier) {
    const item = cartItems.find(i => i.id === id);
    if (!item) return;

    item.quantity += modifier;

    // Se a quantidade chegar a zero, remove automaticamente da lista
    if (item.quantity <= 0) {
        deleteProduct(id);
        return;
    }

    saveCartToStorage();
    renderCart(); // Remonta o DOM com os novos valores calculados
}

// Remove completamente o produto do carrinho
function deleteProduct(id) {
    cartItems = cartItems.filter(i => i.id !== id);
    saveCartToStorage();
    renderCart();
    alert("Produto removido do carrinho.");
}

// Atualiza a soma financeira na barra lateral de resumo (Cálculo exigido no Item 57 do PDF)
function updateFinancialSummary(totalValue) {
    const formattedPrice = `R$ ${totalValue.toFixed(2).replace('.', ',')}`;
    document.getElementById('subtotal-value').textContent = formattedPrice;
    document.getElementById('total-value').textContent = formattedPrice;
}

function checkoutEvent() {
    if(cartItems.length === 0) return;
    alert("🛒 Compra Finalizada com Sucesso! Seu pedido será processado. Obrigado por comprar na Vinil Records.");
    cartItems = []; // Limpa o carrinho pós-venda
    saveCartToStorage();
    renderCart();
}