//Implementa un ejemplo que haga uso de Spread

function spreadFunct(...param){

        for (let index = 0; index < param.length; index++) {
            const element = param[index];
            console.log(element);
        }

}
const args = [1,2,3,4,5]
spreadFunct(...args);
