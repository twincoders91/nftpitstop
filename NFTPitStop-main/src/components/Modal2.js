import React from "react";

const Modal2 = (props) => {
  if (!props.openModal2) return null;

  return (
    <div className="overlay">
      <div className="modal--container">
        <div className="modal--image--container">
          <img
            className="modal--image"
            src={props.openModalDetails2.image}
            alt="images"
          />
        </div>
        <div className="modal--Right">
          <button
            onClick={props.closeModal2}
            id="modal--closeButton"
            className="modal--closeButton"
          >
            &times;
          </button>
          <div className="title--box">
            <p className="title--header">Title:</p>
            <p className="modal--title">
              {props.openModalDetails2.title
                ? props.openModalDetails2.title
                : "No Title"}
            </p>
          </div>
          <a
            href={`https://etherscan.io/token/${props.openModalDetails2.address}`}
            className="modal--nft--contract--address"
          >{`${props.openModalDetails2.address.slice(
            0,
            4
          )}...${props.openModalDetails2.address.slice(
            props.openModalDetails2.address.length - 4
          )}`}</a>
          <div className="description--box">
            <div className="nft--description">
              {props.openModalDetails2.description}
            </div>
            <div className="modal--grid--box">
              <div className="modal--attributes--box">
                {props.openModalDetails2.attributes &&
                Array.isArray(props.openModalDetails2.attributes)
                  ? props.openModalDetails2.attributes.map((attri) => {
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

export default Modal2;
