import { ConstInterface } from '../../types/const';
import { convertSymbolTokenMapToAddressTokenMap } from '../../util/convertSymbolTokenMapToAddressTokenMap';
import { omnidex } from './platforms/omnidex';
import { zappy } from './platforms/zappy';
import { tokens } from './tokens/tokens';
import Chain from '../../types/chain';
import { beefyfinance } from './platforms/beefyfinance';

const _telos = {
    platforms: {
        beefyfinance,        
        omnidex,
        zappy
    },
    tokens,
    tokenAddressMap: convertSymbolTokenMapToAddressTokenMap(tokens)
} as const;

export const telos: ConstInterface<typeof _telos, Chain> = _telos;