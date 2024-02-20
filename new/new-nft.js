let imageUrl = document.getElementById("image");
let brandName = document.getElementById("brandName");
let poloSize = document.getElementById("size");
const inputs = document.querySelectorAll("#image, #brandName, #size");
let addNewNFT = document.getElementById("addNFT");

addNewNFT.addEventListener("click", e =>
  mintNFT(e, imageUrl, brandName, poloSize)
);

function mintNFT(e, image, brand, size) {
  // Prevent the default action
  // e.preventDefault();

  // Get list of NFTs
  const listOfNFTs = JSON.parse(localStorage.getItem("nfts"));

  let newNFT;

  // Check if the number of NFTs is at max
  if (listOfNFTs.length === 4) {
    inputs.forEach(input => {
      input.value = "";
    });
    addNewNFT.href = "/all/nfts.html";
    return null;
  }
  // Mint New NFT
  newNFT = {
    image: image.value,
    brandName: brand.value,
    size: size.value,
  };

  listOfNFTs.push(newNFT);

  inputs.forEach(input => {
    input.value = "";
  });

  // console.log(listOfNFTs);

  localStorage.setItem("nfts", JSON.stringify(listOfNFTs));
  // console.log(listOfNFTs);
  addNewNFT.href = "/all/nfts.html";
}
