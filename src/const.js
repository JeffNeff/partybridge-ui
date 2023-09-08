export const wOCTATokenContractAddress = "0xa013e56ed460eCAaE5dc4c5019b2c8470aC09441"
export const wGRAMSTokenContractAddress = "0xa013e56ed460eCAaE5dc4c5019b2c8470aC09441"
export const wBSCUSDTOnPartyChainTokenContractAddress = "0x3fDAf375a16E2806B68F260b6EFab02D42Af948e"
export const wBSCUSDTOnOctaSpaceTokenContractAddress = "0x541e16D0ef928d2068fCd3192b33E8F25077B22D"
export const BSCUSDTOnBSCContractAddress = "0x55d398326f99059fF775485246999027B3197955"

export const octaAssets = [
  { value: 'octa', text: 'OCTA' },
  { value: 'wgrams', text: 'wGRAMS' },
  { value: 'wbscusdt', text: 'wBSCUSDT' },
];

export const partyAssets = [
  { value: 'grams', text: 'GRAMS' },
  { value: 'wocta', text: 'wOCTA' },
  { value: 'wbscusdt', text: 'wBSCUSDT' },
];

export const bscAssets = [
  { value: 'bscusdt', text: 'BSCUSDT' },
];

export const octaBridgeTo = [
  { value: 'grams', text: 'PartyChain' },
  { value: 'bscusdt', text: 'BSCUSDT' },
];

export const partyBridgeTo = [
  { value: 'octa', text: 'OctaSpace' },
  { value: 'bscusdt', text: 'BSCUSDT' },
];

export const bscUSDTBridgeTo = [
  { value: 'grams', text: 'PartyChain' },
  { value: 'octa', text: 'OctaSpace' },
];

export const bscUSDTBridgeFrom = [
  { value: 'bscusdt', text: 'BSCUSDT' },
];

export const octaAssetsTo = {
  'octa': 'wOCTA',
  'wgrams': 'GRAMS',
  'wbscusdt': 'BSCUSDT',
};

export const partyAssetsTo = {
  'grams': 'wGRAMS',
  'wocta': 'OCTA',
  'wbscusdt': 'BSCUSDT',
};

export const bscUSDTAssetsTo = {
  'bscusdt': 'wBSCUSDT',
};

export const ChainIdBSC = '0x38';          // Decimal: 56;
export const ChainIdOctaSpace = '0xC3501'; // Decimal: 800001
export const ChainIdPartyChain = '0x6ED';  // Decimal: 1773
