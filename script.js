document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('productForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('productName').value;
        const brand = document.getElementById('productBrand').value;
        const expiry = document.getElementById('productExpiry').value;
        const quantity = document.getElementById('productQuantity').value;
        
        if (name && brand && expiry && quantity) {
            const product = { name, brand, expiry, quantity };
            addProduct(product);
            form.reset();
            saveProducts();
        } else {
            alert('Todos os campos devem ser preenchidos.');
        }
    });

    // Adicionando delegação de eventos para remover produtos
    document.getElementById('productList').addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON') {
            deleteProduct(e.target);
        }
    });

    loadProducts();
});

function loadProducts() {
    try {
        const products = JSON.parse(localStorage.getItem('products')) || [];
        products.forEach(product => addProduct(product, false));
    } catch (e) {
        console.error("Falha ao carregar produtos: ", e);
        localStorage.clear();
    }
}

function saveProducts() {
    const productList = [];
    document.querySelectorAll('#productList tr').forEach(row => {
        const product = {
            name: row.cells[0].textContent,
            brand: row.cells[1].textContent,
            expiry: row.cells[2].textContent,
            quantity: row.cells[3].textContent
        };
        productList.push(product);
    });
    localStorage.setItem('products', JSON.stringify(productList));
}

function addProduct(product, addToDOM = true) {
    if (addToDOM) {
        const productList = document.getElementById('productList');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.brand}</td>
            <td>${product.expiry}</td>
            <td>${product.quantity}</td>
            <td><button>Remover</button></td>
        `;
        
        if (new Date(product.expiry) <= new Date()) {
            row.classList.add('expiring');
        }
        
        productList.appendChild(row);
    }
}

function deleteProduct(btn) {
    try {
        const row = btn.parentNode.parentNode;
        row.parentNode.removeChild(row);
        saveProducts();
    } catch (e) {
        console.error("Erro ao remover produto: ", e);
    }
}
