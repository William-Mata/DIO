const body = document.getElementsByTagName('body')[0];
const title = document.getElementById('page-title');
const btn = document.getElementsByClassName('btn-mode')[0];
const footer = document.getElementsByName('footer')[0];


const changeColor = () => {
    body.classList.toggle('dark-mode');
    title.classList.toggle('dark-mode');
    btn.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');

    if (!(body.classList.contains('dark-mode'))) {
        btn.innerHTML = "Dark Mode"
        title.innerHTML = "Ligth Mode ON";

    } else {
        btn.innerHTML = "Ligth Mode"
        title.innerHTML = "Dark Mode ON";
    }
}


btn.addEventListener('click', changeColor);