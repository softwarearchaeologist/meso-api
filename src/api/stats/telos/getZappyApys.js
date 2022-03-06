const { telosWeb3: web3 } = require('../../../utils/web3');
const { TELOS_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/telos/zappyLpPools.json');

const getZappyApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x3D2c6bCED5f50f5412234b87fF0B445aBA4d10e9',
    tokenPerBlock: 'zapPerSecond',
    hasMultiplier: false,
    liquidityProviderFee: 0.0025,
    pools: pools,
    singlePools: [],
    oracleId: 'ZAP',
    oracle: 'tokens',
    decimals: '1e18',
    // secondsPerBlock: 1,
    // log: true,
  });

module.exports = getZappyApys;
