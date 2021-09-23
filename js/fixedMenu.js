export const fixedMenu = () => {

  const header = document.querySelector('.header'),
        headerWrapper = document.querySelector('.header-wrapper'),
        mainSection = document.querySelector('#main');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      header.style.position = 'fixed';
      header.style.width = '100%';
      header.style.zIndex = '999';
      header.style.background = '#080808';
      // header.style.transform = 'translateY(-150px)';
      headerWrapper.style.paddingTop = '10px';
      mainSection.style.paddingTop = '179px';
    } else {
      header.style.position = '';
      headerWrapper.style.paddingTop = '42px';
      mainSection.style.paddingTop = '30px';
      header.style.background = '';
    }
  })

}