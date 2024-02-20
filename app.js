const mintButton = document.getElementById("mint");

const listOfAllNFTs = JSON.parse(localStorage.getItem("nfts"));

console.log(listOfAllNFTs);

function storeNFTs() {
  const listOfAllNFTs = JSON.parse(localStorage.getItem("nfts"));

  if (!listOfAllNFTs) {
    const newNFTs = [];
    localStorage.setItem("nfts", JSON.stringify(newNFTs));
    mintButton.href = "/new/new-nft.html";
  }

  if (listOfAllNFTs === null || listOfAllNFTs.length === 4) {
    localStorage.removeItem("nfts");
    const newNFTs = [];
    localStorage.setItem("nfts", JSON.stringify(newNFTs));
    mintButton.href = "/new/new-nft.html";
  }
  mintButton.href = "/new/new-nft.html";
}

mintButton.addEventListener("click", storeNFTs);
