export const mobileMenu = () => {

  const humburgerMenu = document.querySelector('.humburger-menu'),
        mobileMenu = document.querySelector('.menu'),
        mobileMenuListItems = mobileMenu.querySelectorAll('.menu-list__item');

  humburgerMenu.addEventListener('click', () => {
    humburgerMenu.classList.toggle('humburger-menu-active');
    mobileMenu.classList.toggle('menu-active');
  })
  mobileMenuListItems.forEach(item => {
    item.addEventListener('click', () => {
      humburgerMenu.classList.remove('humburger-menu-active');
      mobileMenu.classList.remove('menu-active');
    })
  });

}