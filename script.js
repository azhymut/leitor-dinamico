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

    document.getElementById('prevPage').addEventListener('click', function() {
        changePage(-1);
    });

    document.getElementById('nextPage').addEventListener('click', function() {
        changePage(1);
    });

    document.getElementById('toggleTheme').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    loadProducts();
});

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    products.forEach(product => addProduct(product));
}

function saveProducts() {
    const productList = [];
    document.querySelectorAll('#productList div').forEach(div => {
        const product = {
            name: div.dataset.name,
            brand: div.dataset.brand,
            expiry: div.dataset.expiry,
            quantity: div.dataset.quantity
        };
        productList.push(product);
    });
    localStorage.setItem('products', JSON.stringify(productList));
}

function addProduct(product) {
    const productList = document.getElementById('productList');
    const div = document.createElement('div');
    div.textContent = `${product.name} - ${product.brand} - ${product.expiry} - ${product.quantity}`;
    productList.appendChild(div);
}

function changePage(change) {
    // Lógica de paginação, atualizar com o número total de páginas e carregar produtos conforme necessário
}
