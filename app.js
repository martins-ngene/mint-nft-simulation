// Get elements from the document using unique ids
const mintButton = document.getElementById("mint");

// Get the Minted NFTs array from localStorage
// LocalStorage cannot hold arrays so we stringify them
const listOfAllNFTs = JSON.parse(localStorage.getItem("nfts"));

// Create a variable to store NFTs
function storeNFTs() {
  // Get list of NFTs if any and parse so we can manipulate array
  const listOfAllNFTs = JSON.parse(localStorage.getItem("nfts"));

  // Check if list of NFTs doesn't exist, then create one and
  // redirect to page to create new NFTs
  if (!listOfAllNFTs) {
    const newNFTs = [];
    localStorage.setItem("nfts", JSON.stringify(newNFTs));
    mintButton.href = "/new/new-nft.html";
  }

  // Check if list is null or at max of 4 NFTs, remove and recreate then
  // redirect to page to create new NFTs
  if (listOfAllNFTs === null || listOfAllNFTs.length === 4) {
    localStorage.removeItem("nfts");
    const newNFTs = [];
    localStorage.setItem("nfts", JSON.stringify(newNFTs));
    mintButton.href = "/new/new-nft.html";
  }

  // If NFTs aren't at max, redirect to page to create new NFTs
  mintButton.href = "/new/new-nft.html";
}

mintButton.addEventListener("click", storeNFTs);
