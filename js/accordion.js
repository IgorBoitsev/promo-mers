// Функция раскрытия аккордеона
export const accordionOpen = () => {

  const featureLinksBtn = document.querySelectorAll('.feature__link'),
        featureSubs = document.querySelectorAll('.feature-sub');

  featureLinksBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (!btn.classList.contains('feature__link_active')) {
        // Скрытие всех списков аккордеона
        featureLinksBtn.forEach(itemBtn => itemBtn.classList.remove('feature__link_active'))
        featureSubs.forEach(sub => sub.classList.add('hidden'));
        // Раскрытие одного списка аккордеона, на который кликнули
        btn.classList.add('feature__link_active');
        featureSubs[index].classList.remove('hidden');
      } else {
        btn.classList.remove('feature__link_active');
        featureSubs[index].classList.add('hidden');
      }
    })
  });

}