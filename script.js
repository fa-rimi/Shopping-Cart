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

// how much money you have in your bank account
let wallet = 7.50;

// Initial value
let cartQuantity = 0;
console.log(cartQuantity);

// A1. Call the button -> Const variable(total) = in the document. get an ele by its id nam('cart-quantity')
const total = document.getElementById("cart-quantity");
// A2. Add an event ('click') listener to the button so it knows theres something happening -> total.add event listener((which is) "click", (when user clicks it will call back this) totalCount (function))
total.addEventListener("click", totalCount);
// A3. When the button is clicked it will display the information in the console
function totalCount() {
  console.log(`Cart Quantity: ${cartQuantity}`);
}

// B. Same as A but a simpler syntax -> instead of giving it a distinct function name, just clarify its a function with function()
const add = document.getElementById("add-cart");
// when the add button is clicked, it will run this function
add.addEventListener("click", function () {
  // the function: add 1 value to cart quantity
  cartQuantity++;
  // update the log with the new cart quantity
  console.log(`Cart Quantity: ${cartQuantity}`);
});

// C. Reset the amount
const reset = document.getElementById("clear-cart");
reset.addEventListener("click", function () {
  cartQuantity = 0;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

// Lets say you want to check the items out now
const buy = document.getElementById("checkout");
buy.addEventListener("click", function() {
    // if the amount in your wallet is greater than or equal to the cart quantity (true)
    if (wallet >= cartQuantity) {
        // then your purchase will go through
        console.log("Purchased Successfully");
    } else { // else if its false
        // you cant buy anything :(
        console.log("Oh Oh, Did you get paid today?");
    }
})