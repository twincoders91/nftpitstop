import React from "react";
import { UilHeart } from "@iconscout/react-unicons";
import { UilCheckCircle } from "@iconscout/react-unicons";

const Modal = (props) => {
  const openModalDetails = props.openModalDetails;
  const { statistics } = props.nftPortData;
  const nextNFTDetails = { ...openModalDetails, statistics };

  if (!props.openModal) return null;
  console.log(nextNFTDetails);

  //=================heart icon to determine whether event id in Watch List Array is equal to current id=========================
  //==================returns true if similar id is found======================
  const isFav = () =>
    props.watchListApp.find((e) => e.id === nextNFTDetails.id);

  // console.log({ value: isFav(), watchlist: props.watchListApp });

  return (
    <div className="overlay">
      <div className="modal--container">
        <div className="modal--image--container">
          {isFav() ? (
            <UilCheckCircle
              size={50}
              className="addedToWatchList--Button"
              onClick={() => props.handleRemoveWatchListItem(nextNFTDetails.id)}
            ></UilCheckCircle>
          ) : (
            <UilHeart
              size={50}
              className="addToWatchList--Button"
              onClick={() => {
                props.addToWatchListClick(nextNFTDetails);
              }}
            ></UilHeart>
          )}
          <img
            className="modal--image"
            src={openModalDetails.image}
            alt="images"
          />
        </div>
        <div className="modal--Right">
          <button
            onClick={props.closeModal}
            id="modal--closeButton"
            className="modal--closeButton"
          >
            &times;
          </button>
          <div className="title--box">
            <p className="title--header">Title:</p>
            <p className="modal--title">
              {openModalDetails.title ? openModalDetails.title : "No Title"}
            </p>
          </div>
          <a
            href={`https://etherscan.io/token/${openModalDetails.address}`}
            className="modal--nft--contract--address"
          >{`${openModalDetails.address.slice(
            0,
            4
          )}...${openModalDetails.address.slice(
            openModalDetails.address.length - 4
          )}`}</a>
          <div className="description--box">
            <div className="nft--description">
              {openModalDetails.description
                ? openModalDetails.description
                : "None"}
            </div>
            <div className="modal--grid--box">
              <div className="modal--attributes--box">
                {openModalDetails.attributes &&
                Array.isArray(openModalDetails.attributes)
                  ? openModalDetails.attributes.map((attri) => {
                      return (
                        <>
                          <div className="attri--type">{attri.trait_type}:</div>
                          <div className="attri--value">{attri.value}</div>
                        </>
                      );
                    })
                  : "None"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
