const reg = () => {
    const inputName = document.querySelectorAll('.form-name'),
        inputPhone = document.querySelectorAll('.form-phone'),
        inputEmail = document.querySelectorAll('.form-email'),
        inputMess = document.querySelectorAll('.mess'),
        inputNameTop = document.querySelectorAll('.top-form');

    inputName.forEach(item =>{
        item.addEventListener('input', () => {
            let inputValue = item.value;
            let reg = /[.:;/a-zA-Z0-9 ]/;
            if (reg.test(inputValue)){
                inputValue = inputValue.replace(reg, '');
                item.value = inputValue;
            }
        });
    });

    inputPhone.forEach(item =>{
        item.addEventListener('input', () => {
            let inputValue = item.value;
            let reg = /[.:;,/a-zA-Zа-яА-я]/;
            if (reg.test(inputValue)){
                inputValue = inputValue.replace(reg, '');
                item.value = inputValue;
            }
        });
    });

    inputEmail.forEach(item =>{
        item.addEventListener('input', () => {
            let inputValue = item.value;
            let reg = /[а-яА-Я ]/;
            if (reg.test(inputValue)){
                inputValue = inputValue.replace(reg, '');
                item.value = inputValue;
            }
        });
    });

    inputMess.forEach(item =>{
        item.addEventListener('input', () => {
            let inputValue = item.value;
            let reg = /[.:;/a-zA-Z0-9 ]/;
            if (reg.test(inputValue)){
                inputValue = inputValue.replace(reg, '');
                item.value = inputValue;
            }
        });
    });

    inputNameTop.forEach(item =>{
        item.addEventListener('input', () => {
            let inputValue = item.value;
            let reg = /[.:;/a-zA-Z0-9 ]/;
            if (reg.test(inputValue)){
                inputValue = inputValue.replace(reg, '');
                item.value = inputValue;
            }
        });
    });
};

export default reg;