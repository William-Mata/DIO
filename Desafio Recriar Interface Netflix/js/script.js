$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    })
});



var modal;
function Modal(modau) {
    if (modau === "informacao") {
        modal = document.getElementById("informacao");
    } else {
        modal = document.getElementById("trailler");
    }
    modal.style.display = "block";
}

function Close() {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}