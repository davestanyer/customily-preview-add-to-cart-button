// Create a button element
const button = document.createElement('button');

// Set the button text and other attributes
button.innerText = 'Add to Cart';
button.id = 'customily-add-to-cart-copy';
button.type = 'button';
button.name = 'add';
button.className = 'product-form__submit button button--full-width button--secondary ld-over-inverse';
button.style.display = 'block';

// Create the loading animation div to match the original button
const loadingDiv = document.createElement('div');
loadingDiv.className = 'ld ld-cycle ld-ring';
button.appendChild(loadingDiv);

// Apply additional styles to ensure it's centered below the image
button.style.padding = '10px 20px';
button.style.fontSize = '16px';
button.style.backgroundColor = '#ff5722'; // Bright orange color
button.style.color = '#ffffff';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.cursor = 'pointer';
button.style.margin = '20px auto';  // Add margin for spacing and ensure it's centered
button.style.display = 'block';  // Make sure the button takes up its own line
button.style.width = 'fit-content';  // Set width to fit the content

// Mutation observer to detect when the modal is added to the DOM
const observer = new MutationObserver((mutations, observerInstance) => {
  const modal = document.querySelector('.customily-modal-preview-only');

  if (modal) {
    // Find the image wrapper
    const imageWrapper = modal.querySelector('.cl-preview-wrapper');
    if (imageWrapper) {
      // Append the button directly after the image wrapper
      imageWrapper.parentElement.insertBefore(button, imageWrapper.nextSibling);
      console.log('Button added below the image');

      // Stop observing once the button is added
      observerInstance.disconnect();
    } else {
      console.error('Image wrapper not found');
    }
  } else {
    console.error('Modal not found');
  }
});

// Start observing the body for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Add an event listener to handle button click
button.addEventListener('click', function handleButtonClick() {
  console.log('Add to Cart button clicked!');

  // Find the original "Add to Cart" button
  const originalButton = document.querySelector('#customily-cart-btn');
  if (originalButton) {
    // Trigger a click event on the original "Add to Cart" button
    originalButton.click();
    console.log('Original Add to Cart button triggered');

    // Find and click the modal close button to close the modal
    const closeButton = document.querySelector('.customily-close-button');
    if (closeButton) {
      closeButton.click();
      console.log('Modal close button clicked');
    } else {
      console.error('Modal close button not found');
    }
  } else {
    console.error('Original Add to Cart button not found');
  }
});