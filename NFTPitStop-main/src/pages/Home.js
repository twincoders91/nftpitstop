import React from "react";
import { UilSearch } from "@iconscout/react-unicons";
import { NavLink, useNavigate } from "react-router-dom";

const Home = (props) => {
  let inputValue = props.inputValue;
  let setInputValue = props.setInputValue;
  let setOwner = props.setOwner;

  const handleClick = () => {
    setOwner(inputValue);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "nft";
    navigate(path);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleClick();
      routeChange();
    }
  };

  //=========================================NFT Examples to use for APP=========================================

  const handleNFTExampleClick1 = () => {
    setOwner("0x84dEd90C6E1F90Ab5344Ca0E86022a9Ff215D8e8");
    routeChange();
  };

  const handleNFTExampleClick2 = () => {
    setOwner("0xde355642A001B212e524acc5B99660a5224db9E8");
    routeChange();
  };

  const handleNFTExampleClick3 = () => {
    setOwner("0x28E82FB4be146d3128DC7125F8A989B2f25eAf1B");
    routeChange();
  };

  //=============================================================================================================

  // 0x50F6Ce36457aF140c7fBd1F44F33820E3F15530a - Eminem
  // 0xde355642A001B212e524acc5B99660a5224db9E8 - TJH
  // 0xc10E432D1CdC03Ceb32952B6C21305AA77e3fcd1
  // 0x90BBCbe91a042558ed9589ddf9f180E736886FC3
  // 0x28E82FB4be146d3128DC7125F8A989B2f25eAf1B -nutz
  // 0x84dEd90C6E1F90Ab5344Ca0E86022a9Ff215D8e8 - MINT
  //0x22BD99E6b00e7e5cD7EDf0D4F07D7885cADf4ADa - Ian

  return (
    <div className="home--page">
      <div className="home--page--container">
        <div className="home--page--main--title">NFT Pit Stop</div>
        <div className="home--page--input--box">
          <input
            className="home--page--input"
            placeholder="Enter Wallet Address..."
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            onKeyPress={handleKeyPress}
          />
          <NavLink className="home--page--icon--search--box" to="nft">
            <UilSearch
              size={30}
              className="home--page--icon--search"
              onClick={handleClick}
            />
          </NavLink>
        </div>
        <div className="nft--examples--container">
          <div className="nft--examples--header">View Random NFT Wallets</div>
          <div className="nft--examples">
            <button
              className="nft--examples-buttons"
              onClick={handleNFTExampleClick1}
            >
              MINT-IST
            </button>
            <button
              className="nft--examples-buttons"
              onClick={handleNFTExampleClick2}
            >
              TJH
            </button>
            <button
              className="nft--examples-buttons"
              onClick={handleNFTExampleClick3}
            >
              Ddog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
