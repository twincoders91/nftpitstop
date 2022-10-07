import React from "react";
import { UilTrashAlt } from "@iconscout/react-unicons";

const WatchList = (props) => {
  const x = props.watchListApp;

  let nftListToWatch = x.map((data, i) => {
    return (
      <div className="watchListCard">
        <div
          className="watchListCard--components"
          onClick={() =>
            props.handleOpenModalDetails({
              id: data.id,
              title: data.title,
              address: data.address,
              image: data.image,
              description: data.description,
              attributes: data.attributes,
              tokenType: data.tokenType,
              averagePrice: data.averagePrice,
              floorPriceHistory30: data.floorPriceHistory30,
              priceChange30: data.priceChange30,
              totalVolume: data.totalVolume,
              statistics: data.statistics,
            })
          }
        >
          <img src={data.image} className="watchListImage" alt="Images"></img>
          <div className="watchListCard--Title">
            <p>{data.title ? data.title : "NIL"}</p>
            <p>{data.tokenType}</p>
          </div>
        </div>
        <UilTrashAlt
          className="watchListCard--delete--button"
          size={40}
          key={i}
          onClick={() => props.handleRemoveWatchListItem(data.id)}
        />
      </div>
    );
  });

  return <div>{nftListToWatch.slice(0, 5)}</div>;
};

export default WatchList;
