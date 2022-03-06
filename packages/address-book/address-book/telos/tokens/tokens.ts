import { ConstRecord } from '../../../types/const';
import Token from '../../../types/token';

const TLOS = {
    name: 'Wrapped TLOS',
    address: '0xD102cE6A4dB07D247fcc28F366A623Df0938CA9E',
    symbol: 'WTLOS',
    decimals: 18,
    chainId: 40,
    website: 'https://www.telos.net/',
    description: 'Telos Coin',
    logoURI: 'https://raw.githubusercontent.com/softwarearchaeologist/meso-assets/main/tokens/TLOS.svg',
} as const;
  
const _tokens = {
    TLOS: TLOS,
    WTLOS: TLOS,
    WNATIVE: TLOS,
    CHARM: {
        name: 'CHARM',
        symbol: 'CHARM',
        address: '0xd2504a02fABd7E546e41aD39597c377cA8B0E1Df',
        chainId: 40,
        decimals: 18,
        website: 'https://omnidex.finance/',
        description:
          'OmniDex is an automated market-making (AMM) decentralized exchange.',
        logoURI: 'https://raw.githubusercontent.com/softwarearchaeologist/meso-assets/main/tokens/charm.png',
    },
    ZAP: {
        name: 'ZAP',
        symbol: 'ZAP',
        address: '0x9a271e3748f59222f5581bae2540daa5806b3f77',
        chainId: 40,
        decimals: 18,
        website: 'https://zappy.finance/',
        description:
          'Zappy is an automated market-making (AMM) decentralized exchange (DEX) for the Telos network.',
        logoURI: 'https://raw.githubusercontent.com/softwarearchaeologist/meso-assets/main/tokens/charm.png',
    },
    USDC: {
        name: 'USDC',
        symbol: 'USDC',
        address: '0x818ec0A7Fe18Ff94269904fCED6AE3DaE6d6dC0b',
        chainId: 40,
        decimals: 6,
        website: 'https://www.circle.com/usdc',
        description:
          'USDC is a fully collateralized US dollar stablecoin. USDC is issued by regulated financial institutions, backed by fully reserved assets, redeemable on a 1:1 basis for US dollars.',
        logoURI: 'https://raw.githubusercontent.com/softwarearchaeologist/meso-assets/main/tokens/usdc.png',
    },
}

export const tokens: ConstRecord<typeof _tokens, Token> = _tokens;