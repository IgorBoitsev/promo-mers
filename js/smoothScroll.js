export const smoothScroll = () => {
  
  const menuListLinks = document.querySelectorAll('.menu-list__link'),
        mainScroll = document.querySelector('.main__scroll'),
        allLinksToSections = [...menuListLinks, mainScroll];

  allLinksToSections.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const sectionId = e.target.getAttribute('href').substr(1),
            section = document.getElementById(sectionId);

      // Прокрутка до секции с помощью встроенной функции
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  });

  

}