let cart = [];

function addToCart(item) {
  cart.push(item);
  alert(`${item} added to cart!`);
}

function viewCart() {
  const cartSection = document.getElementById('cart');
  const cartList = document.getElementById('cart-items');
  cartList.innerHTML = '';

  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartList.appendChild(li);
  });

  cartSection.style.display = 'block';
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
  } else {
    alert(`Order placed for: ${cart.join(', ')}`);
    cart = [];
    document.getElementById('cart-items').innerHTML = '';
    document.getElementById('cart').style.display = 'none';
  }
}
