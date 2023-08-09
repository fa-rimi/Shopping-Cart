// In this application I will make a shopping cart tracker
/**
 * Options:
 * 
 * 1. Show cart quantity
 * 2. Add item to cart
 * 3. Clear cart
 */

// When you click the Cart Quantity button it should show you how many items are in the cart 
/**
 * Let's break it down:
 * 
 * I'm doing three things here 
 * -> clicking the button
 * -> displaying quantity 
 * -> but in order to click the button I need to call where it is in the document
 * 
 * So in order:
 * 1. I need to call where the button is on the doc
 * 2. I need to then be able to click it
 * 3. As a result of clicking it, I need to display the Cart Quantity
 *  
 **/ 

const total = document.getElementById('cart-quantity');
total.addEventListener('click');