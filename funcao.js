const fdl_valor = document.getElementById('fdl_valor');
const placeHolder_resultado = document.getElementById('resultado');
const placeholder_erro = document.getElementById('msgErro');

const writeResultado = str => placeHolder_resultado.innerHTML += str;

const buildResult = n => {
    placeholder_erro.style.opacity = 0;
    placeHolder_resultado.innerHTML = "";

    const array = [];

    if(n >= 2 && n <= 9){

        let ns = [];
        
        for (let ni = 0; ni < n; ni++) {
            ns.push(n);        
        }
        
        ns = ns.toString().replace(/[,]+/g, "");
        
        for (let i = 0; i < 5; i++) {
            array.push(ns);
        }

        for (let ih = 0; ih < array.length; ih++) {
            !!(ih % 2 === 0) ? writeResultado(array[ih] + '<br>') : writeResultado(array[ih].split("").join('<br>') + '<br>');        
        }
    } else if(n == 1){
        writeResultado(n);
    } else if(n.length >= 1 && n >= 10 || n <= 0){
        placeholder_erro.style.opacity = 1;
    } else if (n.toString() === '' || n === null || n === undefined || n.length === 0){
        placeholder_erro.style.opacity = 0;
    }
}
