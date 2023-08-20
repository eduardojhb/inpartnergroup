// Array para almacenar los productos en el carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(productName, price) {
  cartItems.push({ name: productName, price: price });
  updateCartUI();
}

// Función para actualizar la interfaz del carrito
function updateCartUI() {
  const cartList = document.getElementById('cart-items');
  const cartTotalElement = document.getElementById('cart-total');
  let cartTotal = 0;

  // Limpiar la lista antes de agregar los elementos actualizados
  cartList.innerHTML = '';

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    cartTotal += item.price;
  });

  cartTotalElement.textContent = `$${cartTotal.toFixed(2)}`;
}

// Event listener para agregar un producto al carrito
document.addEventListener('DOMContentLoaded', () => {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const productName = button.getAttribute('data-product');
      const price = parseFloat(button.getAttribute('data-price'));
      addToCart(productName, price);
    });
  });
});


// ... (código anterior) ...

// Datos de productos
const products = [
    { name: 'Producto 1', price: 10, image: 'product1.jpg' },
    { name: 'Producto 2', price: 20, image: 'product2.jpg' },
    { name: 'Producto 3', price: 15, image: 'product3.jpg' },
    // Agregar más productos aquí
  ];
  
  // Función para generar la lista de productos
  function generateProductList() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
  
    products.forEach(product => {
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        ${product.name} - $${product.price.toFixed(2)}
        <button class="add-to-cart" data-product="${product.name}" data-price="${product.price}">Agregar al Carrito</button>
      `;
      productList.appendChild(listItem);
    });
  }
  
  // Event listener para agregar un producto al carrito
  document.addEventListener('DOMContentLoaded', () => {
    const cartList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    let cartTotal = 0;
  
    generateProductList();
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(productName, price);
        updateCartUI();
      });
    });
  
    // ... (código de actualización del carrito) ...
  });

  // ... (código anterior) ...

document.addEventListener('DOMContentLoaded', () => {
    // ... (código de manejo del carrito) ...
  
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Aquí puedes agregar la lógica para procesar la compra
      const fullName = checkoutForm.querySelector('input[type="text"]').value;
      const email = checkoutForm.querySelector('input[type="email"]').value;
      const phone = checkoutForm.querySelector('input[type="tel"]').value;
      const address = checkoutForm.querySelector('input[type="text"]').value;
  
      if (cartItems.length === 0) {
        alert('No hay productos en el carrito.');
        return;
      }
  
      // Simulando un proceso de compra exitoso
      alert('¡Compra realizada con éxito!');
      clearCart();
      updateCartUI();
    });
  });
  
  