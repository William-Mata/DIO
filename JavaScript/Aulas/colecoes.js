function getAdmins(map) {
    let admins = [];

    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key);
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set("William", "Admin");
usuarios.set("Nina", "User");
usuarios.set("Walace", "User");
usuarios.set("Alex", "User");
usuarios.set("Solange", "Admin");
usuarios.set("Manoel", "Admin");


console.log(getAdmins(usuarios));


const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr){
   const unicos = new Set(arr);

 

    return [...unicos];
}


console.log(valoresUnicos(meuArray))