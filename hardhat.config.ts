import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/6f01a1a6792048e09192bcd4012d164d",
     
  },
}

};

export default config;
