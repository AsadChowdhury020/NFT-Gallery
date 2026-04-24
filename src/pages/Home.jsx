import { useState } from "react";
import nftData from "../data/nftData";
import NFTCard from "../components/NFTCard";

function Home() {
  const [artistFilter, setArtistFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  let filteredNFTs = [...nftData];

  if (artistFilter) {
    filteredNFTs = filteredNFTs.filter(
      (nft) => nft.artist === artistFilter
    );
  }

  if (sortOrder === "low") {
    filteredNFTs.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high") {
    filteredNFTs.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 max-w-430 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">
        NFT Gallery
      </h1>

      <div className="flex gap-4 justify-between mb-8">
        <select
          className="border p-2 md:py-2 md:px-10 rounded"
          onChange={(e) => setArtistFilter(e.target.value)}
        >
          <option value="">All Artists</option>
          <option value="Asad Studio">Asad Studio</option>
          <option value="Pixel Art">Pixel Art</option>
        </select>

        <select
          className="border p-2 md:py-2 md:px-10 rounded"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredNFTs.map((nft) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>
    </div>
  );
}

export default Home;