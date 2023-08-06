export const convertChain = (chain: string) =>
    ({
        gnosis: "xdai",
        avalanche: "avax",
    })[chain] ?? chain

export const convertChainToFlipside = (chain: string) =>
    ({
        xdai: "gnosis",
        avax: "avalanche",
    })[chain] ?? chain

export const convertChainToIndexa = (chain: string) => ({})[chain] ?? chain

//export const isAcceptedChain = (chain:string) => ["arbitrum", "avax", "bsc", "ethereum", "xdai", "optimism", "polygon"].includes(chain)
export const isAcceptedChain = (chain: string) => ["arbitrum", "avax", "ethereum", "optimism", "polygon", "bsc"].includes(chain)
