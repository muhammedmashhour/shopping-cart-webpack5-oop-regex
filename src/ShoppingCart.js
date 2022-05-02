import Storage from "./Storage";

const navbarItemsCount = document.querySelector("nav span.items-count")

class ShoppingCart {
  items = Storage.getData("cartItems") ?? [];

  displayCartItems() {
    const cartItemsContainer = document.querySelector('.shopping-cart-items');
    cartItemsContainer.innerHTML = '';
    this.items.forEach(element => {
      cartItemsContainer.innerHTML += this.createCartItem(element);
    });

    this.displayItemsCount();

    const cartItemsBtns = document.querySelectorAll(".shopping-cart-item button");
    cartItemsBtns.forEach(el => {
      el.onclick = (event) => {
        this.removeCartITem(event.target.dataset.productId);
      }
    });
  }

  insertCartItem(cartItem) {
    let cloneStorageCartItems = Storage.getData("cartItems") ?? [];
    cloneStorageCartItems.push(cartItem);
    Storage.setData("cartItems", JSON.stringify(cloneStorageCartItems));
    this.items = cloneStorageCartItems;
    this.displayCartItems();
    this.displayItemsCount();
  }

  removeCartITem(cartItemId) {
    let cloneStorageCartItems = Storage.getData("cartItems") ?? [];
    cloneStorageCartItems = cloneStorageCartItems.filter(el => el.id != cartItemId);
    Storage.setData("cartItems", JSON.stringify(cloneStorageCartItems));
    this.items = cloneStorageCartItems;
    this.displayCartItems();
    this.displayItemsCount();
  }

  createCartItem(cartItem) {
    let element =
    `<div class="shopping-cart-item">
      <img src="https://via.placeholder.com/150x200" alt="item">
      <h1>${cartItem.name}</h1>
      <span>${cartItem.price} $</span>
      <button data-product-id="${cartItem.id}" type="button">
        remove
      </button>
    </div>`;
    return element;
  }

  displayItemsCount() {
    navbarItemsCount.textContent = this.items.length;
  }
}


export default ShoppingCart;