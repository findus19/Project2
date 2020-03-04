const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        successMessage = 'Заявка отправлена';

    const form = document.querySelectorAll('form');
    const input = document.querySelectorAll('input');

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    form.forEach((e) => {
        e.addEventListener('submit', (event) => {
            event.preventDefault();
            e.appendChild(statusMessage);
            statusMessage.classList.add('loader');
            
            const formData = new FormData(e);
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });

            const postData = (body) => {
                return fetch('./server.php', {
                    method: 'POST',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
            }; 

            postData(body)
            .then((response) => {
                statusMessage.classList.add('loader');
                return response
            })
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('status net work not 200')
                } 
                statusMessage.classList.remove('loader');
                statusMessage.textContent = successMessage;
                statusMessage.style.color = '#19b5fe'; 
                setTimeout(() => statusMessage.textContent = ' ', 5000);
                input.forEach(item => {
                    item.value = ''
                });
            })
            .catch((error) => {
                statusMessage.classList.remove('loader');
                console.log(error)
                statusMessage.textContent = errorMessage;
                statusMessage.style.color = '#f6023c';   
                setTimeout(() => statusMessage.textContent = ' ', 5000);
            });
        });
    });
    statusMessage.style.color = '';
};

export default sendForm;