var valores = new Object([0,2,4,5,56,7]);


function testandoArray(arr, num){
    try {
        if(arr !== undefined && num !== undefined){

            if(typeof arr !== 'object' || typeof num !== 'number'){
                throw new TypeError("O array precisa ser do tipo Object. \n O número precisa ser do tipo númerico.");
            
            }else if(arr.length !== num){
                throw new RangeError("A quantidade de elementos no array não bate com o valor númerico.");
            
            }else{
                return "A quantidade de elementos é o valor passado são iguais."
            }

        }else{
            throw new ReferenceError("Envie os parâmetros");
        }

    } catch (e) {
            console.log(e.message,
            e.name);

        if(e instanceof TypeError){
            return "\nerror TypeError";

        }else if(e instanceof ReferenceError){
            return "\nerror ReferenceError";

        }else if(e instanceof RangeError){
            return "\nerror RangeError";
        }
    }
}

console.log(testandoArray(valores));