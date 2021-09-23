export const openModal = () => {

  const modal = document.querySelector('.modal'),
        moreBtn = document.querySelector('.more'),
        modalWrapper = document.querySelector('.modal-wrapper');
  
  moreBtn.addEventListener('click', () => {
    modal.classList.remove('shifted-left');
    modalWrapper.classList.remove('shifted-top')
  })
  modal.addEventListener('click', e => {
    if (e.target.classList.contains('modal__close') ||
        e.target.classList.contains('overlay')) {
      modal.classList.add('shifted-left');
      modalWrapper.classList.add('shifted-top')
    }
  })

}