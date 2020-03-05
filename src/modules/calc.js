const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'), //тип помещения
        calcSquare = document.querySelector('.calc-square'), // площадь
        calcCount = document.querySelector('.calc-count'), // кол-во помещений
        calcDay = document.querySelector('.calc-day'), // количество дней
        totalValue = document.getElementById('total');
        
    const calcul = document.querySelector('#calc');
    calcul.addEventListener('input', e => {
        const target = e.target;
        if(e.target.matches('input')) {
            target.value = target.value.replace('/[^\D]/');
        }
    });

    const countSum = () => {
        totalValue.textContent = 0;
        let total = 0,
            countValue = 1,
            dayValue = 1;
        const typeValue = calcType.options[calcType.selectedIndex].value;
        let squareValue = +calcSquare.value;

        if(calcCount.value > 1){
            countValue = countValue + (calcCount.value -1)  / 10;
        };

        if(calcDay.value && calcDay.value < 5){
            totalValue.textContent = 0;
            dayValue = calcDay.value * 2;
        } else if (calcDay.value && calcDay.value < 10){
            totalValue.textContent = 0;
            dayValue = calcDay.value * 1.5;
        };

        if(typeValue && squareValue){
            total = price * typeValue * squareValue * countValue * dayValue;
        };
        

        const totalAnimate = (sum) =>{
            let inpuNumber = document.querySelectorAll('input[type="number"]'),
                calcItem = document.querySelector('.calc-type');
            let speed = 500;
            let interval = setInterval(() => {
                if(totalValue.textContent * 1 +speed >= sum){
                    clearInterval(interval);
                    totalValue.textContent = Math.ceil(sum);
                    inpuNumber.forEach(item => {
                        item.disabled = false;
                    });
                    calcItem.disabled = false;
                }else {
                    if(sum > 500000){
                        speed = 100000;
                    }else if (sum > 300000){
                        speed = 20000;
                    }else if (sum >150000){
                        speed = 10000;
                    }else if (sum > 50000){
                        speed = 5000;
                    }else if (sum > 20000){
                        speed = 1000;
                    }
                    totalValue.textContent = totalValue.textContent * 1 +speed;
                    
                    inpuNumber.forEach(item => {
                        item.disabled = true;
                    });
                    calcItem.disabled = true;
                }
            }, 50)
            
        }
        totalAnimate(total);
        
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target
        if(target.matches('select') || target.matches('input')){
            countSum();
        }
    });
};

export default calc;