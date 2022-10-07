import React, { useState, useEffect } from "react";
import NFT from "./pages/NFT";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./NavBar";
import WatchListPage from "./pages/WatchListPage";
import { fetchNFTs } from "./nftAPI/fetchAPIs";

export default function App() {
  //====================================States==============================================
  const [inputValue, setInputValue] = useState(""); //setting user's input value - owner address
  const [owner, setOwner] = useState(""); //setting owner's NFT address
  const [NFTsApp, setNFTsApp] = useState(""); //setting NFT's meta data from fetchNFT() and prop to NFT Cards
  const [watchListApp, setWatchListApp] = useState([]); //creating an Array for WatchList and WatchListPage (to be propped)
  const [collectionSize, setCollectionSize] = useState(""); //setting the collectionSize of the NFT collection and propped for display
  const [loading, setLoading] = useState(false); //For loading during fetching NFT data from wallet address
  const [nftPortData, setNftPortData] = useState(""); //Getting additional market data for each NFT Collection by fetching

  const handleRemoveWatchPageItem = (index) => {
    const watchListPageArr = watchListApp.filter((d, i) => i !== index);
    setWatchListApp(watchListPageArr);
  };

  console.log(watchListApp);

  useEffect(() => {
    if (owner) {
      fetchNFTs(owner, setCollectionSize, setLoading, setNFTsApp);
    }
  }, [owner]);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              inputValue={inputValue}
              setInputValue={setInputValue}
              setOwner={setOwner}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/nft"
          element={
            <NFT
              inputValue={inputValue}
              setInputValue={setInputValue}
              setOwner={setOwner}
              setNFTsApp={setNFTsApp}
              NFTsApp={NFTsApp}
              watchListApp={watchListApp}
              setWatchListApp={setWatchListApp}
              setCollectionSize={setCollectionSize}
              collectionSize={collectionSize}
              loading={loading}
              nftPortData={nftPortData}
              setNftPortData={setNftPortData}
            />
          }
        />
        <Route
          path="/watchlistpage"
          element={
            <WatchListPage
              watchListApp={watchListApp}
              setWatchListApp={setWatchListApp}
              handleRemoveWatchPageItem={handleRemoveWatchPageItem}
            />
          }
        />
      </Routes>
    </div>
  );
}
