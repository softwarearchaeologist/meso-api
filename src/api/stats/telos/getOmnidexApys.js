const { telosWeb3: web3 } = require('../../../utils/web3');
const { TELOS_CHAIN_ID: chainId } = require('../../../constants');
const { getMasterChefApys } = require('../common/getMasterChefApys');
const pools = require('../../../data/telos/omnidexLpPools.json');

const getOmnidexApys = async () =>
  await getMasterChefApys({
    web3: web3,
    chainId: chainId,
    masterchef: '0x79f5A8BD0d6a00A41EA62cdA426CEf0115117a61',
    tokenPerBlock: 'charmPerBlock',
    hasMultiplier: false,
    liquidityProviderFee: 0.0025,
    pools: pools,
    singlePools: [
      {
        name: 'charm-charm',
        poolId: 0,
        address: '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df',
        oracle: 'tokens',
        oracleId: 'CHARM',
        decimals: '1e18',
      },
    ],
    oracleId: 'CHARM',
    oracle: 'tokens',
    decimals: '1e18',
    // secondsPerBlock: 1,
    // log: true,
  });

module.exports = getOmnidexApys;
