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

// Apply additional styles to ensure it's visible and placed properly
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

// Create a container for the button to avoid disrupting other elements
const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = 'center';
buttonContainer.style.marginBottom = '20px'; // Space from the controls
buttonContainer.appendChild(button);

// Log message after styling
console.log('BOOM2');

// Function to insert the button
const insertButton = () => {
  const modal = document.querySelector('.customily-modal-preview-only');
  
  if (modal) {
    const canvasWrapper = modal.querySelector('.canvas-wrapper');
    const canvasContainer = canvasWrapper ? canvasWrapper.querySelector('.canvas-container') : null;
    const zoomControlsWrapper = canvasWrapper ? canvasWrapper.querySelector('.customily-mobile-controls') : null;

    if (canvasContainer && zoomControlsWrapper) {
      // Insert the button container after the canvas container but before the zoom controls
      canvasWrapper.insertBefore(buttonContainer, zoomControlsWrapper);
      console.log('Button container added between canvas and zoom controls');
      return true;
    } else {
      console.error('Canvas container or Zoom controls wrapper not found');
    }
  } else {
    console.error('Modal not found');
  }
  return false;
};

// Retry mechanism to ensure all elements are loaded before inserting the button
let retries = 0;
const maxRetries = 30; // More retries in case the modal takes longer to load
const retryInterval = 400;

const retryInsertButton = () => {
  if (insertButton()) {
    // Stop retrying once successful
    return;
  }
  retries++;
  if (retries < maxRetries) {
    setTimeout(retryInsertButton, retryInterval);
  } else {
    console.error('Failed to insert button after multiple attempts');
  }
};

// Mutation observer to detect when the modal is added to the DOM
const observer = new MutationObserver((mutations, observerInstance) => {
  mutations.forEach(mutation => {
    if (mutation.addedNodes.length) {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === 1 && node.classList.contains('customily-modal-pre
