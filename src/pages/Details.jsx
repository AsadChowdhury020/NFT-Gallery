import { Link, useParams } from "react-router-dom";
import nftData from "../data/nftData";
import { ArrowLeft } from "lucide-react";

function Details() {
  const { id } = useParams();

  const nft = nftData.find((item) => item.id == id);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-xl shadow-md max-w-xl overflow-hidden">
        <img
          src={nft.image}
          alt={nft.name}
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold">{nft.name}</h1>
          <p className="text-gray-600 mt-2">Artist: {nft.artist}</p>
          <p className="text-blue-600 font-bold mt-2">Price: {nft.price} ETH</p>
          <p className="mt-4">{nft.description}</p>
        </div>

        <div className="flex justify-start pt-3 p-4">
          <Link
            to="/"
            className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Details;
