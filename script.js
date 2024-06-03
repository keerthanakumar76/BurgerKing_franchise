document.getElementById('order-btn').addEventListener('click', function() {
  const selectedFood = document.querySelector('input[name="food"]:checked');
  if (selectedFood) {
    const foodValue = selectedFood.value;
    const orderId = generateOrderId();
    const dateTime = new Date().toLocaleString();

    document.getElementById('orderId').innerText = orderId;
    document.getElementById('order-date').innerText = dateTime;
    document.getElementById('ordered-item').innerText = foodValue.charAt(0).toUpperCase() + foodValue.slice(1);
    document.getElementById('order-img').src = `images/${foodValue}.jpg`;

    document.getElementById('summary').classList.remove('hidden');
  } else {
    alert('Please select a food item.');
  }
});

function generateOrderId() {
  return 'ORD' + Math.floor(Math.random() * 10000);
}
