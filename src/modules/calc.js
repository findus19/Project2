const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
        calcType = document.querySelector('.calc-type'), //тип помещения
        calcSquare = document.querySelector('.calc-square'), // площадь
        calcDay = document.querySelector('.calc-day'), // количество дней
        calcCount = document.querySelector('.calc-count'), // кол-во помещений
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
            countValue += (calcCount.value -1)  / 10;
        };

        if(calcDay.value && calcDay.value < 5){
            dayValue *= 2;
        } else if (calcDay.value && calcDay.value < 10){
            dayValue *= 1.5;
        };

        if(typeValue && squareValue){
            total = price * typeValue * squareValue * countValue * dayValue;
        };
        

        const totalAnimate = () =>{
            let speed = 50;
            let interval = setInterval(() => {
                if(totalValue.textContent * 1 +speed >= total){
                    clearInterval(interval);
                    totalValue.textContent = Math.ceil(total);
                }else {
                    totalValue.textContent = totalValue.textContent * 1 +speed;
                    
                }
        }, 50)
        }
        totalAnimate();
        
    };

    calcBlock.addEventListener('change', (event) => {
        const target = event.target
        if(target.matches('select') || target.matches('input')){
            countSum();
        }
    });
};

export default calc;