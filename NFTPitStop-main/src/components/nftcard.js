import React from "react";

const NFTCard = ({
  image,
  id,
  title,
  address,
  description,
  attributes,
  supply,
  tokenType,
  floorPrice,
  handleOpenModalDetails,
}) => {
  return (
    <>
      <div
        className="nft--card"
        onClick={() =>
          handleOpenModalDetails({
            id,
            title,
            address,
            image,
            description,
            attributes,
            tokenType,
          })
        }
      >
        <img className="nft--images" src={image} alt={"Images"}></img>
        <div className="nft--card--description--container">
          <div className="nft--card--description--left--container">
            <div className="nft--title">
              <p className="description-mini-headers">Title:</p>
              <p className="description-mini-texts">{title ? title : "NIL"}</p>
            </div>
            <div className="nft--supply">
              <p className="description-mini-headers">Total Supply:</p>
              <p className="description-mini-texts">
                {supply ? supply : "NIL"}
              </p>
            </div>
          </div>
          <div className="nft--card--description--right--container">
            <div className="nft--token">
              <p className="description-mini-headers">Floor Price:</p>
              <p className="description-mini-texts">
                {/* {floorPrice ? floorPrice : "NIL"} */}
                Not Available
              </p>
            </div>
            <div className="nft--token">
              <p className="description-mini-headers">Token Type:</p>
              <p className="description-mini-texts">
                {tokenType ? tokenType : "NIL"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NFTCard;
