export const Modal = {
  card: document.querySelector(".bmi-calculator_modal-screen"),
  message: document.querySelector(".modal-message"),
  closeButton: document.querySelector(".modal-button"),

  open() {
    Modal.card.classList.add('open');
  },
  close() {
    Modal.card.classList.remove('open')
  }
}

Modal.closeButton.onclick = function() {
  Modal.close();
}

window.addEventListener('keydown', handleKeydown)

function handleKeydown(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}