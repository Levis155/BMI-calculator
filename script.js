const imperialRadio = document.querySelector('#imperial-radio')
const metricRadio = document.querySelector('#metric-radio')

let metricChecked = true;

metricRadio.addEventListener('click', () => {
    document.querySelector('#height-unit')
    .innerHTML = 'm'
    document.querySelector('#weight-unit')
    .innerHTML = 'kg'
    
    metricChecked = true;
})

imperialRadio.addEventListener('click', () => {
    document.querySelector('#height-unit')
    .innerHTML = 'inch'
    document.querySelector('#weight-unit')
    .innerHTML = 'lbs'
    
    metricChecked = false;
})

document.body.addEventListener('keyup', () => {
    if (metricChecked === true) {
            if(document.querySelector('#height-input').value != '' && document.querySelector('#weight-input').value != '') {
                document.querySelector('#BMI-result-subcont1')
                .classList.add('BMI-result-subcont1-hidden')
                document.querySelector('#BMI-result-subcont2')
                .classList.add('BMI-result-subcont2-visible')
            } else{
                document.querySelector('#BMI-result-subcont1')
                .classList.remove('BMI-result-subcont1-hidden')
                document.querySelector('#BMI-result-subcont2')
                .classList.remove('BMI-result-subcont2-visible')
            }
            
            const height = Number(document.querySelector('#height-input').value)
            const weight = Number(document.querySelector('#weight-input').value)

            const BMI = Math.round((weight / ((height) * (height))) * 10) / 10 ;
            
            document.querySelector('#BMI-out')
            .innerHTML = `${BMI}`;

            if(BMI <= 18.5) {
                document.querySelector('#health-level')
                .innerHTML = 'underweight.'
            } else if (BMI > 18.5 && BMI <= 24.9) {
                document.querySelector('#health-level')
                .innerHTML = 'a healthy weight.'
            } else if (BMI > 24.9 && BMI <= 29.9) {
                document.querySelector('#health-level')
                .innerHTML = 'overweight.'
            } else if (BMI > 29.9) {
                document.querySelector('#health-level')
                .innerHTML = 'obese.'
            }

            if(height >= 0 && height <= 1.36) {
                document.querySelector('#ideal-weight')
                .innerHTML = '25.8kgs - 40.7kgs'
            } else if(height > 1.36 && height <= 1.55) {
                document.querySelector('#ideal-weight')
                .innerHTML = '30.65kgs - 55.8kgs'
            } else if (height > 1.55 && height <= 1.75) {
                document.querySelector('#ideal-weight')
                .innerHTML = '43.1kgs - 79.8kgs'
            } else if (height > 1.75) {
                document.querySelector('#ideal-weight')
                .innerHTML = '59.4kgs - 103.8kgs'
            }
        
    } else if (metricChecked === false) {

            if(document.querySelector('#height-input').value != '' && document.querySelector('#weight-input').value != '') {
                document.querySelector('#BMI-result-subcont1')
                .classList.add('BMI-result-subcont1-hidden')
                document.querySelector('#BMI-result-subcont2')
                .classList.add('BMI-result-subcont2-visible')
            } else{
                document.querySelector('#BMI-result-subcont1')
                .classList.remove('BMI-result-subcont1-hidden')
                document.querySelector('#BMI-result-subcont2')
                .classList.remove('BMI-result-subcont2-visible')
            }


            const height = Number(document.querySelector('#height-input').value)
            const weight = Number(document.querySelector('#weight-input').value)

            const BMI = Math.round(((weight / (height * height)) * 703) * 10) / 10;
            
            document.querySelector('#BMI-out')
            .innerHTML = `${BMI}`;

            if(BMI <= 18.5) {
                document.querySelector('#health-level')
                .innerHTML = 'underweight.'
            } else if (BMI > 18.5 && BMI <= 24.9) {
                document.querySelector('#health-level')
                .innerHTML = 'a healthy weight.'
            } else if (BMI > 24.9 && BMI <= 29.9) {
                document.querySelector('#health-level')
                .innerHTML = 'overweight.'
            } else if (BMI > 29.9) {
                document.querySelector('#health-level')
                .innerHTML = 'obese.'
            }

            if(height >= 0 && height <= 53.5) {
                document.querySelector('#ideal-weight')
                .innerHTML = '50lbs - 88lbs'
            } else if(height > 53.5 && height <= 61) {
                document.querySelector('#ideal-weight')
                .innerHTML = '67.6lbs - 123lbs'
            } else if (height > 61 && height <= 68.9) {
                document.querySelector('#ideal-weight')
                .innerHTML = '95lbs - 175.9lbs'
            } else if (height > 68.9) {
                document.querySelector('#ideal-weight')
                .innerHTML = '130.9lbs - 228.8lbs'
            }
    }

    }
)
