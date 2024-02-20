// Get elements from the document using unique ids
const totalNFTs = document.getElementById("total-nfts");
const getNFTsTotal = document.getElementById("getNFTsTotal");
let NFTContainer = document.getElementById("list-of-nfts");

// Get the Minted NFTs array from localStorage
const getAllNFTs = JSON.parse(localStorage.getItem("nfts"));

console.log(getAllNFTs);

// Hide total number of NFTs by default
totalNFTs.style.display = "none";

// Print all of your NFTs metadata to the screen
function listMintedNFTs(getAllNFTs) {
  const displayNFTs = getAllNFTs.map((nft, index) => {
    return `<div class="card" key=${index}>
              <img
                src=${nft.image}
                alt="Polo NFT"
                accept="image/*"
                class="image" />
              <div class="card-details">
                <p>Brand Name: ${nft.brandName}</p>
                <p>Size: ${nft.size}</p>
              </div>
          </div>`;
  });

  return displayNFTs;
}

// Get the total number of NFTs Minted
function getTotalSupply(getAllNFTs) {
  const totalNFTsQty = getAllNFTs.length;
  totalNFTs.textContent = "Total NFT Supply: " + totalNFTsQty;
  totalNFTs.style.display = "block";
}

// Print to the screen instead of console
NFTContainer.innerHTML = listMintedNFTs(getAllNFTs);

// Print to the screen instead of console
getNFTsTotal.addEventListener("click", () => getTotalSupply(getAllNFTs));
