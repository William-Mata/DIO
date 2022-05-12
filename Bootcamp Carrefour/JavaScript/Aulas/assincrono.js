const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const btnC = document.getElementById('btnCat');
const imgC = document.getElementById('imgCat');

const getCats = async () => {
    try {
        const data = await fetch(BASE_URL);    
        const json = await data.json();

        return json.webpurl;
    } catch (error) {
        console.log(error.message);
    }
}



 const loadImg = async () =>{
   imgC.src = await getCats();
}

btnC.addEventListener('click', loadImg)

loadImg();