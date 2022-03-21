const axios = require('axios');

const getVaults = async vaultsEndpoint => {
  try {    
    const { data: vaults } = await axios.get(vaultsEndpoint);        
    return vaults;
  } catch (err) {
    console.error(err);
    return 0;
  }
};

module.exports = getVaults;
