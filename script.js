let previewImg = document.getElementById("img-preview");
let specificImg = document.getElementById("specific-img");

function openImgPreview(images){
    previewImg.style.display = "flex";
    specificImg.src = images;
}
function closeImgPreview(){
    previewImg.style.display="none";
}