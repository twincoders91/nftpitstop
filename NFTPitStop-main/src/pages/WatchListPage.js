import React, { useState } from "react";
import { UilArrowGrowth } from "@iconscout/react-unicons";
import { UilChartDown } from "@iconscout/react-unicons";
import { UilTrashAlt } from "@iconscout/react-unicons";
import { UilArrowUp } from "@iconscout/react-unicons";
import Modal2 from "../components/Modal2";
import cryptopunk from "../assets/cryptopunk1.png";
import cryptopunk2 from "../assets/cryptopunk2.png";

const WatchListPage = (props) => {
  const [openModal2, setOpenModal2] = useState(false);
  const [openModalDetails2, setOpenModalDetails2] = useState("");
  const [filterClicked, setFilterClicked] = useState(false);
  const [filterAvgPriceClicked, setfilterAvgPriceClicked] = useState(false);

  const x = props.watchListApp;

  const handleOpenModal2 = (modalData) => {
    setOpenModal2(true);
    setOpenModalDetails2(modalData);
    console.log(modalData);
  };
  console.log(x);
  const closeModal2 = () => {
    setOpenModal2(false);
  };

  //=========================================sorting by prices=============================================
  //=======================================================================================================

  const sortByPrice = () => {
    if (
      x.find(
        (e) =>
          !e.statistics ||
          (!e.statistics.thirty_day_change &&
            isNaN(e.statistics.thirty_day_change))
      )
    ) {
      alert(
        "One or more of the prices is not found, unable to filter. Please try again."
      );
    } else {
      const sortedArray = [...x].sort(
        (a, b) =>
          a.statistics.thirty_day_change - b.statistics.thirty_day_change
      );
      props.setWatchListApp(sortedArray);
      setFilterClicked(true);
    }
  };

  const sortByReversePrice = () => {
    if (
      x.find(
        (e) =>
          !e.statistics ||
          (!e.statistics.thirty_day_change &&
            isNaN(e.statistics.thirty_day_change))
      )
    ) {
      alert(
        "One or more of the prices is not found, unable to filter. Please try again."
      );
    } else {
      const sortedArray = [...x].reverse(
        (a, b) =>
          a.statistics.thirty_day_change - b.statistics.thirty_day_change
      );
      props.setWatchListApp(sortedArray);
      setFilterClicked(false);
    }
  };

  //=========================================sorting by avg prices===========================================
  //=========================================================================================================

  const sortByAvgPrice = () => {
    if (
      x.find(
        (e) =>
          !e.statistics ||
          (!e.statistics.average_price && isNaN(e.statistics.average_price))
      )
    ) {
      alert(
        "One or more of the prices is not found, unable to filter. Please try again."
      );
    } else {
      const sortedArray = [...x].sort(
        (a, b) => a.statistics.average_price - b.statistics.average_price
      );
      props.setWatchListApp(sortedArray);
      setfilterAvgPriceClicked(true);
    }
  };

  const sortByReverseAvgPrice = () => {
    if (
      x.find(
        (e) =>
          !e.statistics ||
          (!e.statistics.average_price && isNaN(e.statistics.average_price))
      )
    ) {
      alert(
        "One or more of the prices is not found, unable to filter. Please try again."
      );
    } else {
      const sortedArray = [...x].reverse(
        (a, b) => a.statistics.average_price - b.statistics.average_price
      );
      props.setWatchListApp(sortedArray);
      setfilterAvgPriceClicked(false);
    }
  };

  //=============================================================================================
  //=============================================================================================
  //=======================Creating the WatchList Page by mapping================================

  let nftListToWatchPage = x.map((nft, i) => {
    return (
      <>
        <div className="individual--watchListCards">
          <div
            className="individual--watchListCard--sections"
            onClick={() => {
              handleOpenModal2(nft);
            }}
          >
            <div className="inidividual--watchListCard--left">
              <img
                src={nft.image}
                className="watchListCard--image"
                alt="images"
              />
            </div>
            <div className="inidividual--watchListCard--center">
              <div className="watchList--title--box">
                <div className="title--header--watchList">Title:</div>
                <div className="title--name--watchList">{nft.title}</div>
              </div>
              <div className="watchList--etherscan">
                <a
                  href={`https://etherscan.io/token/${nft.address}`}
                  className="watchList--etherscan--text"
                >{`${nft.address.slice(0, 4)}...${nft.address.slice(
                  nft.address.length - 4
                )}`}</a>
              </div>
              <div className="main--desc">{nft.description}</div>
              <div className="owners--minted--market--cap--box">
                <div className="owners--minted--market--cap--box--left">
                  <div className="number--of--owners--box">
                    <div className="number--of--owners--title">
                      Number of owners:
                    </div>
                    <div className="number--of-owners--value">
                      {(nft.statistics && nft.statistics.num_owners) ||
                      (nft.statistics &&
                        !isNaN(nft.statistics.num_owners) &&
                        nft.statistics.num_owners !== null)
                        ? nft.statistics.num_owners
                        : "Not Found"}
                    </div>
                  </div>
                  <div className="total--minted--box">
                    <div className="total--minted--title">Total minted:</div>
                    <div className="total--minted--value">
                      {(nft.statistics && nft.statistics.total_minted) ||
                      (nft.statistics &&
                        !isNaN(nft.statistics.total_minted) &&
                        nft.statistics.total_minted !== null)
                        ? nft.statistics.total_minted
                        : "Not Found"}
                    </div>
                  </div>
                </div>
                <div className="owners--minted--market--cap--box--right">
                  <div className="marketCap--box">
                    <div className="marketCap--title">Market cap (ETH):</div>
                    <div className="marketCap--value">
                      {(nft.statistics && nft.statistics.market_cap) ||
                      (nft.statistics &&
                        !isNaN(nft.statistics.market_cap) &&
                        nft.statistics.market_cap !== null)
                        ? nft.statistics.market_cap.toFixed(2)
                        : "Not Found"}
                    </div>
                  </div>
                  <div className="marketCap--box">
                    <div className="marketCap--title">Total sales:</div>
                    <div className="marketCap--value">
                      {(nft.statistics && nft.statistics.total_sales) ||
                      (nft.statistics &&
                        !isNaN(nft.statistics.total_sales) &&
                        nft.statistics.total_sales !== null)
                        ? nft.statistics.total_sales
                        : "Not Found"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="individual--watchListCard--right">
              <div className="statistics--left">
                <div className="average--price--box">
                  <div className="statistics--header">Average Price:</div>
                  <div>
                    {(nft.statistics && nft.statistics.average_price) ||
                    (nft.statistics &&
                      !isNaN(nft.statistics.average_price) &&
                      nft.statistics.average_price !== null)
                      ? nft.statistics.average_price.toFixed(4)
                      : "Not Found"}
                  </div>
                </div>
                <div className="history30--price--box">
                  <div className="statistics--header">Floor Price(30):</div>
                  <div>
                    {(nft.statistics &&
                      nft.statistics.floor_price_historic_thirty_day) ||
                    (nft.statistics &&
                      !isNaN(nft.statistics.floor_price_historic_thirty_day) &&
                      nft.statistics.floor_price_historic_thirty_day !== null)
                      ? nft.statistics.floor_price_historic_thirty_day.toFixed(
                          4
                        )
                      : "Not Found"}
                  </div>
                </div>
              </div>
              <div className="statistics--right">
                <div className="price--change--30">
                  <div className="statistics--header">Price Change(30):</div>
                  <div className="statistics--report">
                    {(nft.statistics && nft.statistics.thirty_day_change) ||
                    (nft.statistics &&
                      !isNaN(nft.statistics.thirty_day_change) &&
                      nft.statistics.thirty_day_change !== null) ? (
                      nft.statistics.thirty_day_change >= 0 ? (
                        <>
                          {nft.statistics.thirty_day_change.toFixed(4)}
                          <UilArrowGrowth
                            className="price--change--30--arrow--green"
                            size={30}
                          />
                        </>
                      ) : (
                        <>
                          {nft.statistics.thirty_day_change.toFixed(4)}
                          <UilChartDown
                            className="price--change--30--arrow--red"
                            size={30}
                          />
                        </>
                      )
                    ) : (
                      "Not Found"
                    )}
                  </div>
                </div>
                <div className="totalVolume">
                  <div className="statistics--header">Total Volume (ETH):</div>
                  <div>
                    {(nft.statistics && nft.statistics.total_volume) ||
                    (nft.statistics &&
                      !isNaN(nft.statistics.total_volume) &&
                      nft.statistics.total_volume !== null)
                      ? nft.statistics.total_volume.toFixed(2)
                      : "Not Found"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <UilTrashAlt
            className="watchListPageCard--delete--button"
            size={40}
            key={i}
            onClick={() => props.handleRemoveWatchPageItem(i)}
          />
        </div>
      </>
    );
  });

  //=============================================================================================
  //=============================================================================================

  return (
    <>
      {x.length ? (
        <div className="filters-bar">
          <div className="filters--buttons">
            <button
              className="filters--button"
              onClick={() => {
                if (filterClicked) {
                  sortByReversePrice();
                } else {
                  sortByPrice();
                }
              }}
            >
              Filter by Price <UilArrowUp />
            </button>
            <button
              className="filters--button"
              onClick={() => {
                if (filterAvgPriceClicked) {
                  sortByReverseAvgPrice();
                } else {
                  sortByAvgPrice();
                }
              }}
            >
              Filter by Average Price <UilArrowUp />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img src={cryptopunk} className="cryptopunk--image" alt="images" />
          <img src={cryptopunk2} className="cryptopunk--image2" alt="images" />
        </div>
      )}

      <div className="watchListPage--container">
        <div>
          {x.length !== 0 ? (
            <div>{nftListToWatchPage}</div>
          ) : (
            <div className="no--watchlist--collection--container">
              <div className="no--watchlist-collection--title">
                <p>your watch list is empty</p>
              </div>
            </div>
          )}
        </div>
        <Modal2
          openModalDetails2={openModalDetails2}
          openModal2={openModal2}
          setOpenModal2={setOpenModal2}
          closeModal2={closeModal2}
        />
      </div>
    </>
  );
};

export default WatchListPage;
