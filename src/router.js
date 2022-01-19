'use strict';

const Router = require('koa-router');
const router = new Router();

const noop = require('./api/noop');
const stats = require('./api/stats');
const price = require('./api/price');
const tvl = require('./api/tvl');
const multichainVaults = require('./api/vaults');



router.get('/apy', stats.apy);
router.get('/apy/breakdown', stats.apyBreakdowns);

router.get('/tvl', tvl.vaultTvl);


router.get('/lps', price.lpsPrices);
router.get('/prices', price.tokenPrices);

router.get('/vaults', multichainVaults.multichainVaults);

router.get('/', noop);

module.exports = router;
