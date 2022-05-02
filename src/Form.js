import { v4 as uuidv4 } from 'uuid';
import ShoppingCart from "./ShoppingCart";

const shoppingCart = new ShoppingCart();

const form = document.querySelector("form");
const nameField = form.name;
const priceField = form.price;

class Form {
  handleForm() {
    form.onsubmit = (e) => {
      e.preventDefault();
      const nameRegex = /\w/gi;
      const nameValidation = nameRegex.test(nameField.value);

      const priceRegex = /^\d{1,}(.\d+)?$/gi;
      const validationPriceField = priceRegex.test(priceField.value);


      if (nameValidation) {
        nameField.classList.remove("error")
      } else {
        nameField.classList.add("error")
        return false
      }

      if (validationPriceField) {
        priceField.classList.remove("error")
      } else {
        priceField.classList.add("error")
        return false;
      }

      shoppingCart.insertCartItem({
        id: uuidv4(),
        name: nameField.value,
        price: priceField.value
      });
      
      this.clearForm();

    }
  }

  clearForm() {
    nameField.value = '';
    priceField.value = '';
  }
}


export default Form