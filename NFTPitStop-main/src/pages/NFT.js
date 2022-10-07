import React, { useState } from "react";
import NFTCard from "../components/nftcard";
import "../style.css";
import { UilSearch } from "@iconscout/react-unicons";
import Modal from "../components/Modal";
import WatchList from "../components/WatchList";
import ClipLoader from "react-spinners/HashLoader";
import ClipLoader2 from "react-spinners/PulseLoader";

export default function NFT(props) {
  //=============================================================================================
  //=============================================================================================
  //====================================States==============================================

  const [openModal, setOpenModal] = useState(false); //opening Modal - True or False
  const [openModalDetails, setOpenModalDetails] = useState(""); //opening Modal - True or False
  const [modalLoading, setModalLoading] = useState(false);

  const {
    NFTsApp,
    watchListApp,
    setWatchListApp,
    collectionSize,
    inputValue,
    setInputValue,
    setOwner,
    loading,
    nftPortData,
    setNftPortData,
  } = props;

  //=============================================================================================
  //=============================================================================================
  //=============================Fetching NFT Port Market Data===================================
  const getNFTsPortData = async (address) => {
    setModalLoading(true);
    console.log(modalLoading);
    try {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "efaddfe2-8f9c-4c03-a5b8-5a91820e7b19",
        },
      };

      const statisticsData = await fetch(
        `https://api.nftport.xyz/v0/transactions/stats/${address}?chain=ethereum`,
        options
      )
        .then((statisticsData) => statisticsData.json())
        .catch((err) => console.error(err));

      let nftStatistics;
      setModalLoading(false);
      if (statisticsData) {
        nftStatistics = statisticsData;
        setNftPortData(nftStatistics);
      } else {
        nftStatistics = statisticsData.error.code;
        setNftPortData(nftStatistics);
      }
    } catch (e) {
      setModalLoading(false);
    }
  };

  //============================================FUNCTIONS/HANDLECLICKS=================================================
  //===================================================================================================================

  const handleClick = () => {
    //setting owner as the wallet addressed key in by user
    setOwner(inputValue);
  };

  const addToWatchListClick = (watchListData) => {
    //pushing in data to an WatchList Array for population
    setWatchListApp([...watchListApp, watchListData]);
  };

  const handleRemoveWatchListItem = (index) => {
    //removing item from WatchList Array via index filtering
    const watchListArr = watchListApp.filter((d, i) => d.id !== index);
    setWatchListApp(watchListArr);
  };

  const handleOpenModalDetails = async (modalData) => {
    //Opening Modal and running a fetch async function to retreive market data
    console.log(modalLoading);
    await getNFTsPortData(modalData.address);
    setOpenModalDetails(modalData);
    setOpenModal(true);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  //=============================================================================================
  //=============================================================================================

  return (
    <>
      <div className="overview--nft--app">
        {loading ? (
          <ClipLoader size={100} color={"#ffffff"} loading={loading} />
        ) : (
          <div className="nft--app">
            <div className="search--bar">
              <input
                className="search--input"
                type="text"
                placeholder="Enter Wallet Address..."
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                value={inputValue}
              ></input>
              <UilSearch
                size={30}
                className="icon--search"
                onClick={handleClick}
              />
            </div>
            <div className="container">
              <div className="left--section--collectorDetails">
                {NFTsApp ? <h1 className="left-section-header">News</h1> : ""}
              </div>
              <div className="middle--section--container">
                {NFTsApp ? (
                  <h1 className="middle--section--header">
                    Digital Galleria{" "}
                    {collectionSize ? `- ${collectionSize}` : ""}{" "}
                  </h1>
                ) : (
                  ""
                )}

                <div className="main--nft--collection">
                  {NFTsApp ? (
                    <div className="nft--collection">
                      {NFTsApp.map((NFT) => {
                        return (
                          <NFTCard
                            key={NFT.value.title + `${Math.random() * 1000}`}
                            image={NFT.value.image}
                            id={NFT.value.id}
                            title={NFT.value.title}
                            address={NFT.value.contractAddress}
                            description={NFT.value.description}
                            attributes={NFT.value.attributes}
                            supply={NFT.value.supply}
                            tokenType={NFT.value.tokenType}
                            floorPrice={NFT.value.floorPrice}
                            openModal={openModal}
                            setOpenModal={setOpenModal}
                            handleOpenModalDetails={handleOpenModalDetails}
                          ></NFTCard>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div className="no--nft-collection--title">
                        <p>enter wallet address to view NFT collection</p>
                      </div>
                      <div className="no--nft--collection" />
                    </>
                  )}
                </div>
                <br />
              </div>
              <div className="right--section--container">
                {NFTsApp ? (
                  <h1 className="right--section-header">Watch List</h1>
                ) : (
                  ""
                )}
                <WatchList
                  key={Math.random() * 1000}
                  watchListApp={watchListApp}
                  handleOpenModalDetails={handleOpenModalDetails}
                  handleRemoveWatchListItem={handleRemoveWatchListItem}
                />
              </div>
            </div>
            <div>
              {modalLoading ? (
                <div className="overlay2">
                  <div className="modalLoading--icon">
                    <ClipLoader2 size={100} color={"#f0740d"} />
                  </div>
                </div>
              ) : (
                <Modal
                  key={openModalDetails.address + Math.random() * 1000}
                  openModal={openModal}
                  closeModal={closeModal}
                  setOpenModal={setOpenModal}
                  openModalDetails={openModalDetails}
                  addToWatchListClick={addToWatchListClick}
                  nftPortData={nftPortData}
                  watchListApp={watchListApp}
                  handleRemoveWatchListItem={handleRemoveWatchListItem}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
