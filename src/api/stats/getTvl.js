const getChainTvl = require('./getChainTvl.js');

const {
  BSC_CHAIN_ID,
  BSC_VAULTS_ENDPOINT,

  HECO_CHAIN_ID,
  HECO_VAULTS_ENDPOINT,

  AVAX_CHAIN_ID,
  AVAX_VAULTS_ENDPOINT,

  POLYGON_CHAIN_ID,
  POLYGON_VAULTS_ENDPOINT,

  FANTOM_CHAIN_ID,
  FANTOM_VAULTS_ENDPOINT,

  ONE_CHAIN_ID,
  ONE_VAULTS_ENDPOINT,

  ARBITRUM_CHAIN_ID,
  ARBITRUM_VAULTS_ENDPOINT,

  CELO_CHAIN_ID,
  CELO_VAULTS_ENDPOINT,

  MOONRIVER_CHAIN_ID,
  MOONRIVER_VAULTS_ENDPOINT,

  CRONOS_CHAIN_ID,
  CRONOS_VAULTS_ENDPOINT,
  
  TELOS_CHAIN_ID,
  TELOS_VAULTS_ENDPOINT,

  //AURORA_CHAIN_ID,
  //AURORA_VAULTS_ENDPOINT,

  FUSE_CHAIN_ID,
  FUSE_VAULTS_ENDPOINT,

  METIS_CHAIN_ID,
  METIS_VAULTS_ENDPOINT,
} = require('../../constants');

const INIT_DELAY = 40 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let tvl = {};

const chains = [
  {
    chainId: CRONOS_CHAIN_ID,
    vaultsEndpoint: CRONOS_VAULTS_ENDPOINT,
    name: 'cronos'
    // governancePool: require('../../data/cronos/governancePool.json'),
  },
  {
    chainId: TELOS_CHAIN_ID,
    vaultsEndpoint: TELOS_VAULTS_ENDPOINT,
    name: 'telos'
  },

];

const getTvl = () => {
  return tvl;
};

const updateTvl = async () => {
  console.log('> updating tvl');

  try {
    let promises = [];

    chains.forEach(chain => promises.push(getChainTvl(chain)));

    const results = await Promise.allSettled(promises);

    for (const result of results) {
      if (result.status !== 'fulfilled') {
        console.warn('getChainTvl error', result.reason);
        continue;
      }
      tvl = { ...tvl, ...result.value };
    }

    console.log('> updated tvl');
  } catch (err) {
    console.error('> tvl initialization failed', err);
  }

  setTimeout(updateTvl, REFRESH_INTERVAL);
};

setTimeout(updateTvl, INIT_DELAY);

module.exports = getTvl;
