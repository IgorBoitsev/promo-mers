export const tabs = () => {

  const tabsHandlerElements = document.querySelectorAll('[data-tabs-handler]'),
        tabsContentElements = document.querySelectorAll('[data-tabs-field]');
  
  for (let btn of tabsHandlerElements) {
    btn.addEventListener('click', () => {
      tabsHandlerElements.forEach(item => item.classList.remove('design-list__item_active'));
      btn.classList.add('design-list__item_active');

      tabsContentElements.forEach(elem => {
        if (btn.dataset.tabsHandler === elem.dataset.tabsField) {
          elem.classList.remove('hidden')
        } else {
          elem.classList.add('hidden')
        }
      })
    })
  }

}