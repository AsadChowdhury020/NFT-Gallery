import { Link } from "react-router-dom";

function NFTCard({ nft }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 border border-gray-100">
      {/* NFT Image */}
      <img
        src={nft.image}
        alt={nft.name}
        className="w-full h-64 object-cover"
      />

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* NFT Name */}
        <h2 className="text-2xl font-bold text-gray-800">{nft.name}</h2>

        {/* Artist Name */}
        <p className="text-gray-600 text-lg">👨‍🎨 Artist: {nft.artist}</p>

        {/* Price */}
        <p className="text-green-600 text-xl font-bold">
          💰 Price: {nft.price} BDT
        </p>

        {/* Extra Info */}
        <div className="flex justify-between text-sm text-gray-500">
          <span>🗂️ Category: {nft.category}</span>
          <span>💎 Rarity: {nft.rarity}</span>
        </div>

        {/* Button */}
        <div className="flex justify-end pt-3">
          <Link
            to={`/details/${nft.id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NFTCard;
