export const sendForm = () => {

  const formTestDrive = document.querySelector('.form-test-drive');

  formTestDrive.addEventListener('submit', e => {
    e.preventDefault();

    let data = {};

    for (let { name, value } of formTestDrive) {
      if (name) {
        // console.log(`${name}: ${value}`);
        data[name] = value;
      }
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          console.log('Данные успешно отправлены');
          formTestDrive.reset();
        } else {
          throw new Error(response.status);
        }
      })
      .catch(error => {
        console.warn(`Произошла ошибка, статус ${error.message}`);
      })
  })

}