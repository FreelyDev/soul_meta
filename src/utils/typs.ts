export interface ICOEngineDetail {
    ETHBalance: number;
    DPPEDecimals: number;

    price: number;
    minContribute: number;
    maxContribute: number;
    hardcap: number;
    softcap: number;
    startTimestamp: number;
    endTimestamp: number;
    ICOEnded: boolean;
    deposit: number;
    claim: number;
    totalDeposit: number;
}

