
let mainpic = document.querySelector(".nft");

mainpic.addEventListener("mouseover", function(){
    let nft = document.querySelector(".nft-view");
    nft.style.display = "block";
})
 mainpic.addEventListener("mouseout", function () {
    let nft = document.querySelector(".nft-view");
   nft.style.display = "none";
 });