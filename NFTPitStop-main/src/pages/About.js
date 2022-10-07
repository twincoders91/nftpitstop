import React from "react";
import bayc from "../assets/baycnft.png";
import azuki from "../assets/azuki.png";
import invisibleGIF from "../assets/invisiblefriends.gif";

const About = () => {
  return (
    <div className="about--page--overview">
      <div className="about--page--container">
        <div className="about--title--container">
          <p className="about--title">Your One Stop NFT Space</p>
          <div className="about--subheader">
            <p className="about--subheader--content">
              With just the Wallet Address you can View and Share NFT
              Collections! Keep track of your favourite NFTs' market trends by
              adding them into your Watchlist! Information as shown below can be
              found in your Watchlist cards and are data relating to the NFT{" "}
              <b>Collection</b>.
            </p>
          </div>
        </div>
        <div className="about--content--container">
          <p></p>
        </div>
        <div className="instructions--container">
          <div className="instructions--table">
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">Average Price:</p>
              <p className="instructions--individual--content">
                Average price of the collection since inception in ETH.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">
                Floor Price(30):
              </p>
              <p className="instructions--individual--content">
                Floor price 30 days ago in ETH.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">
                Price Change(30):
              </p>
              <p className="instructions--individual--content">
                Change in volume of sales in the last 30 days in ETH.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">Total Volume:</p>
              <p className="instructions--individual--content">
                Total volume of sales in ETH.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">No. Of Owners:</p>
              <p className="instructions--individual--content">
                Total number of owners.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">Market Cap:</p>
              <p className="instructions--individual--content">
                Market cap of the collection in ETH.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">Total Minted:</p>
              <p className="instructions--individual--content">
                Total number of NFTs minted.
              </p>
            </div>
            <div className="instructions--individual--box">
              <p className="instructions--individual--title">Total Sales:</p>
              <p className="instructions--individual--content">
                Total number of sales.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about--images">
        <img
          src={invisibleGIF}
          alt="images"
          className="about--image--invisiblefriends"
        />
        {/* <img src={bayc} alt="images" className="about--image--bayc" /> */}
        <img src={azuki} alt="images" className="about--image--azuki" />
      </div>
    </div>
  );
};

export default About;
