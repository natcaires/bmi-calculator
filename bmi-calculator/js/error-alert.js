export const errorAlert = {
  element: document.querySelector('.error-alert'),
  open() {
    errorAlert.element.classList.add('open');
  },
  close() {
    errorAlert.element.classList.remove('open');
  }

}

