var modal = document.getElementById("myModal");
var img = document.getElementById("Jackson Photo.jpg");
var modalImg = document.getElementById("modalImg");
var closeBtn = document.getElementById("closeBtn");

img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt; 
    document.getElementById("caption").innerHTML = this.alt; 
}

closeBtn.onclick = function() {
    modal.style.display = "none"; 
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"; 
    }
}
