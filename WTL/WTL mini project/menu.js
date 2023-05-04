const tableNumber = localStorage.getItem('tableNumber');

// Check if the table number is set in local storage
if (tableNumber) {
  // Redirect to the menu page with the table number as a parameter
  window.location.href = `menu.html?tableNumber=${tableNumber}`;
}
