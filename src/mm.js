import * as Const from './const';

export const requestChangeToBSCUSDTNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: Const.ChainIdBSC }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: Const.ChainIdBSC,
              chainName: 'Binance Smart Chain Mainnet',
              rpcUrls: ['https://bsc-dataseed.binance.org/'],
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18
              },
              blockExplorerUrls: ['https://bscscan.com/'],
              iconUrls: ['https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png']
            },
          ],
        });
      } catch (addError) {
        console.error('Error adding BSC network:', addError);
        throw new Error("Error adding BSC network");
      }
    }
    if (switchError.code === 4001) {
      throw new Error("Switch network to OctaSpace is canceled");
    }
  }
};

export const requestChangeToOctaSpaceNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: Const.ChainIdOctaSpace }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: Const.ChainIdOctaSpace,
              chainName: 'OctaSpace',
              rpcUrls: ['https://rpc.octa.space'],
              nativeCurrency: {
                name: 'OCTA',
                symbol: 'OCTA',
                decimals: 18
              },
              blockExplorerUrls: ['https://explorer.octa.space'],
              iconUrls: ['https://raw.githubusercontent.com/octaspace/logos/main/logo-256x256.png']
            }
          ]
        });
      } catch (addError) {
        console.log('Error adding OctaSpace network:', addError);
        throw new Error("Error adding OctaSpace network");
      }
    }
    if (switchError.code === 4001) {
      console.log("Switch network to OctaSpace is canceled");
      throw new Error("Switch network to OctaSpace is canceled");
    }
  }
};

export const requestChangeToPartyChainNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: Const.ChainIdPartyChain }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: Const.ChainIdPartyChain,
              chainName: 'PartyChain',
              rpcUrls: ['https://tea.mining4people.com/rpc'],
              nativeCurrency: {
                name: 'GRAMS',
                symbol: 'GRAMS',
                decimals: 18
              },
              blockExplorerUrls: ['https://tea.mining4people.com']
            }
          ]
        });
      } catch (addError) {
        console.log('Error adding PartyChain network:', addError);
        throw new Error("Error adding PartyChain network");
      }
    }
    if (switchError.code === 4001) {
      console.log("Switch network to PartyChain is canceled");
      throw new Error("Switch network to PartyChain is canceled");
    }
  }
};
