# Add to Cart Button for Customily in Shopify

This project is a custom JavaScript solution that adds an "Add to Cart" button directly to the product modal in a Customily-based Shopify store. The button is intended to provide users a convenient way to add products to the cart while interacting with the modal. This guide will help you understand the purpose of the code, how to use it, and how to add it to your Shopify store using Customily.

## Overview

This repository contains a JavaScript file (`add-to-cart-button.js`) that adds an "Add to Cart" button below the product image in the Customily product modal on Shopify. The button emulates the original "Add to Cart" button by triggering the same functionality, ensuring the product is added to the cart seamlessly. Additionally, it automatically closes the product modal after clicking the "Add to Cart" button for a better user experience.

## Features
- **Add to Cart Button**: A custom button that allows users to add products to their cart directly from the product modal.
- **Auto-Close Modal**: After adding a product to the cart, the modal is closed automatically for a smooth checkout experience.
- **Easy Integration**: The script is designed to be easily added to the Custom JavaScript section in Customily's settings.

## Installation Instructions

### Step 1: Clone the Repository

To get started, clone this repository to your local machine:

```bash
$ git clone https://github.com/<username>/add-to-cart-button.git
```

Navigate to the cloned directory:

```bash
$ cd add-to-cart-button
```

### Step 2: Adding the JavaScript to Customily

1. **Navigate to Customily Settings**:
   - Log in to your Shopify store and go to the **Customily** app settings.
   - Click on the **Settings** tab, as shown in the screenshot provided.

2. **Add Custom JavaScript**:
   - Under **Developer Settings**, locate the **Custom JavaScript** section.
   - Copy the code from `add-to-cart-button.js` and paste it into the **Custom JavaScript** text area.

3. **Save Changes**:
   - Once the code is added, click **Save** to apply the changes.

### Step 3: Verify Functionality

- Open a product page on your Shopify store that uses the Customily modal.
- Open the product modal and ensure that the "Add to Cart" button is added below the product image.
- Test the button to make sure that clicking it adds the product to the cart and closes the modal as expected.

## Code Breakdown

Here's a brief explanation of what the script does:

1. **Create a Button**: The script creates a new button element with attributes that match the existing "Add to Cart" button.

2. **Style the Button**: The button is styled to match the original Shopify button, ensuring consistent design.

3. **Mutation Observer**: A `MutationObserver` is used to wait until the modal is added to the DOM before appending the button.

4. **Click Event Handling**: When the button is clicked, it triggers the original "Add to Cart" button's functionality and then closes the modal for a better user experience.

## Example Code
The core of the script looks like this:

```javascript
// Create and add the button
const button = document.createElement('button');
button.innerText = 'Add to Cart';
button.className = 'product-form__submit button button--full-width button--secondary ld-over-inverse';
// ... (additional code for functionality)
```

The script waits for the modal to be added and then inserts the button beneath the image in the modal content.

## Troubleshooting

- **Button Not Appearing**: Ensure that you have pasted the JavaScript code correctly in the Customily settings and that the modal structure matches the script's expectations.
- **Modal Not Closing**: Check if the close button on the modal is correctly targeted by the script (`.customily-close-button`). Make adjustments if the structure of the modal is different from what is expected.

## Contributing
If you'd like to contribute, feel free to open an issue or submit a pull request. Contributions that improve the functionality, efficiency, or usability of the code are always welcome.

## Contact
For any questions or support, please open an issue in the GitHub repository or contact me via GitHub.

