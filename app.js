//Task 1 functions

//Display images in browser

var sceneriesDiv = document.getElementById("sceneries-div");
var images = sceneriesDiv.getElementsByTagName("img");
var imagePaths = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.jpg", "7.png", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.png", "15.jpg"];
for (var i = 0; i < images.length; i++) {
    images[i].src = imagePaths[i];
}

//Display an image in the modal

function openModal(image) {
    var modal = document.getElementById("modal");
    modal.classList.add("modal-open");
    modal.classList.remove("modal-close");
    modal.style.display = "block";
    document.getElementById("modal-img").src = image.src;
}

//Close the modal

function onClosedImagModal() {
    var modal = document.getElementById("modal");
    modal.classList.remove("modal-open");
    modal.classList.add("modal-close");
    setTimeout(() => {
        modal.style.display = "none";
    }, 550);
}

//Task 2 functions

var fontSize = 16;
document.getElementById("para").style.fontSize = fontSize + "px";

//Increase text size

function enlarge() {
    if (fontSize !== 56) {
        fontSize += 10;
        document.getElementById("para").style.fontSize = fontSize + "px";
    }
}

//Decrease text size

function shrink() {
    if (fontSize !== 16) {
        fontSize -= 10;
        document.getElementById("para").style.fontSize = fontSize + "px";
    }
}
