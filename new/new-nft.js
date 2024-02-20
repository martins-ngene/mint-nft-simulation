// Get elements from the document using unique ids
let imageUrl = document.getElementById("image");
let brandName = document.getElementById("brandName");
let poloSize = document.getElementById("size");
const inputs = document.querySelectorAll("#image, #brandName, #size");
let addNewNFT = document.getElementById("addNFT");

addNewNFT.addEventListener("click", () => mintNFT(image, brandName, poloSize));

// Mint an NFT by calling function with arguments
function mintNFT(image, brand, size) {
  // Get list of NFTs
  const listOfNFTs = JSON.parse(localStorage.getItem("nfts"));

  // Variable to store new NFT
  let newNFT;

  // Check if the number of NFTs is at max
  if (listOfNFTs.length === 4) {
    inputs.forEach(input => {
      input.value = "";
    });
    addNewNFT.href = "/all/nfts.html";
    return null;
  }

  // Exit program if fields are empty
  if (image.value === "" || brand.value === "" || size.value === "") {
    return null;
  }

  // Mint New NFT
  newNFT = {
    image: image.value,
    brandName: brand.value,
    size: size.value,
  };

  listOfNFTs.push(newNFT);

  // Reset inputs
  inputs.forEach(input => {
    input.value = "";
  });

  // Update NFTs store variable
  localStorage.setItem("nfts", JSON.stringify(listOfNFTs));
  addNewNFT.href = "/all/nfts.html";
}
