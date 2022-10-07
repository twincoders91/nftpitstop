const baseUrl =
  "https://eth-mainnet.g.alchemy.com/v2/aI_cBhmYAlW4vQpliiy2kfOUZCmtYC9m";

//================================fetching Owner's NFT array using wallet address================================================================
//===============================================================================================================================================
const getAddressNFTs = async (owner) => {
  if (owner) {
    let data;

    data = await fetch(`${baseUrl}/getNFTs?owner=${owner}`).then((data) =>
      data.json()
    );
    console.log(data);
    return data;
  }
};

//=============================fetching each individual NFT Meta Data using contract addresses - NFT.contract.address================================
//===================================================================================================================================================

const getNFTsMetaData = async (NFTs) => {
  const NFTsMetaData = await Promise.allSettled(
    NFTs.map(async (NFT) => {
      const metadata = await fetch(
        `${baseUrl}/getNFTMetadata?contractAddress=${NFT.contract.address}&tokenId=${NFT.id.tokenId}`
      );
      const metadataJSON = await metadata.json();

      //conditional statement to make sure IMAGES are present in meta data. Otherwise use placeholder image
      let imageUrl;
      if (metadataJSON.media[0].gateway.length) {
        imageUrl = metadataJSON.media[0].gateway;
      } else {
        imageUrl = "https://via.placeholder.com/500";
      }

      //conditional statement to make CONTRACTMETADATA is present. Else return UNDEFINED
      let totalSupply;
      if (metadataJSON.contractMetadata) {
        if (metadataJSON.contractMetadata.totalSupply) {
          totalSupply = metadataJSON.contractMetadata.totalSupply;
        } else {
          totalSupply = "Not Found";
        }
      }

      //conditional statement to make CONTRACTMETADATA is present. Else return UNDEFINED
      let title;
      if (metadataJSON.contractMetadata) {
        if (metadataJSON.contractMetadata.name) {
          title = metadataJSON.contractMetadata.name;
        } else {
          title = "Not Found";
        }
      }

      //conditional statement to make CONTRACTMETADATA is present. Else return UNDEFINED
      let tokenType;
      if (metadataJSON.contractMetadata) {
        if (metadataJSON.contractMetadata.tokenType) {
          tokenType = metadataJSON.contractMetadata.tokenType;
        } else {
          tokenType = "Not Found";
        }
      }

      //================================finding the floor price using a separate API================================
      //==============================and then setting it into getNFTsMetaData's return=============================

      // const floorPriceData = await fetch(
      //   `https://eth-mainnet.g.alchemy.com/nft/v2/aI_cBhmYAlW4vQpliiy2kfOUZCmtYC9m/getFloorPrice?contractAddress=${NFT.contract.address}`
      // );

      // const floorPriceDataJSON = await floorPriceData.json();
      // let nftFloorPrice;
      // if (floorPriceDataJSON.openSea.floorPrice) {
      //   nftFloorPrice = floorPriceDataJSON.openSea.floorPrice;
      // } else {
      //   nftFloorPrice = floorPriceDataJSON.openSea.error;
      // }

      //=============================================================================================================================
      //=============================================================================================================================
      return {
        id: NFT.id.tokenId,
        contractAddress: NFT.contract.address,
        image: imageUrl,
        title: title,
        description: metadataJSON.metadata.description,
        attributes: metadataJSON.metadata.attributes,
        supply: totalSupply,
        tokenType: tokenType,
        // floorPrice: nftFloorPrice,
      };
    })
  );

  return NFTsMetaData;
};

//========================Fecthing the data from the above 3 APIs to consolidate meta data and floor price================================
//========================================================================================================================================

const fetchNFTs = async (owner, setCollectionSize, setLoading, setNFTsApp) => {
  setLoading(true);
  try {
    const collectionSize = await getAddressNFTs(owner);
    setCollectionSize(collectionSize.totalCount);
    const data = await getAddressNFTs(owner);
    console.log(data);
    if (data.ownedNfts.length) {
      //passing in the owner's array of NFTs to get individual Meta Data
      const NFTs = await getNFTsMetaData(data.ownedNfts);
      //making sure that the metaData of NFTs fetched are fulfilled. Filter those our that arent fulfilled.
      let fulfilledNFTs = NFTs.filter((NFT) => NFT.status == "fulfilled");
      setLoading(false);
      setNFTsApp(fulfilledNFTs);
      console.log(fulfilledNFTs);
    } else {
      setNFTsApp(null);
    }
  } catch (e) {
    setLoading(false);
  }
};

export { fetchNFTs };
