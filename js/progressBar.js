export const progressBar = () => {

  const progressBar = document.querySelector('.progress-bar');

  let documentHeight = document.documentElement.scrollHeight,
      windowHeight = document.documentElement.clientHeight,
      progressBarWidth = documentHeight - windowHeight,
      progressBarWidthDeg = 100 / progressBarWidth,
      currentPprogressBarWidth = 0;

  window.addEventListener('scroll', () => {
    currentPprogressBarWidth = window.scrollY * progressBarWidthDeg;
    progressBar.style.width = `${currentPprogressBarWidth}%`;
  })

}