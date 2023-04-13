import "@ethersproject/shims"
import { currentNetwork, getContractObj } from ".";
import { ICOEngineDetail } from "./typs";
import { BigNumber, ethers } from "ethers";
import { RPC_URLS } from "./connectors";
import toast from "react-hot-toast";


export async function getICOEngineInfo(account) {
    const jsonProvider = new ethers.providers.JsonRpcProvider(RPC_URLS[currentNetwork]);
    const ICOContract = getContractObj('DPPE_ICO', currentNetwork, jsonProvider);
    
    try {
        const [
            ETHBalance,
            DPPEDecimals,
            
            price,
            minContribute,
            maxContribute,
            hardcap,
            softcap,
            startTimestamp,
            endTimestamp,
            ICOEnded,
            deposit,
            claim,
            totalDeposit,

        ] = await Promise.all([
            account ? jsonProvider.getBalance(account) : BigNumber.from(0),
            ICOContract.DPPE_DECIMALS(),
            
            ICOContract.DPPE_PRICE(),
            ICOContract.MIN_CONTRIBUTE(),
            ICOContract.MAX_CONTRIBUTE(),
            ICOContract.HARDCAP(),
            ICOContract.SOFTCAP(),
            ICOContract.START_DATETIME(),
            ICOContract.END_DATETIME(),
            ICOContract.ICO_ENDED(),
            account ? ICOContract.MAP_DEPOSIT(account) : BigNumber.from(0),
            account ? ICOContract.MAP_CLAIM(account) : BigNumber.from(0),
            ICOContract.TOTAL_DEPOSIT(),
        ]);

        const ICOEngine: ICOEngineDetail = {
            ETHBalance: parseFloat(ethers.utils.formatEther(ETHBalance)),
            DPPEDecimals: DPPEDecimals,

            price: parseFloat(ethers.utils.formatEther(price)),
            minContribute: parseFloat(ethers.utils.formatEther(minContribute)),
            maxContribute: parseFloat(ethers.utils.formatEther(maxContribute)),
            hardcap: parseFloat(ethers.utils.formatEther(hardcap)),
            softcap: parseFloat(ethers.utils.formatEther(softcap)),
            startTimestamp: startTimestamp.toNumber(),
            endTimestamp: endTimestamp.toNumber(),
            ICOEnded: ICOEnded,
            deposit: parseFloat(ethers.utils.formatEther(deposit)),
            claim: parseFloat(ethers.utils.formatUnits(claim, DPPEDecimals)),
            totalDeposit: parseFloat(ethers.utils.formatEther(totalDeposit)),
        }

        return ICOEngine;
    } catch (e) {
        console.log(e);
        return null;
    }
}

/*************** CONTRIBUTE ***************/
export async function scContribute(chainId, provider, account, amount) {
    const ICOContract = getContractObj('DPPE_ICO', chainId, provider);
    try {
        const depositETH: BigNumber = ethers.utils.parseEther(amount.toString());
        const maxContribute: BigNumber = await ICOContract.MAX_CONTRIBUTE();
        const minContribute: BigNumber = await ICOContract.MIN_CONTRIBUTE();
        const currentDeposit: BigNumber = await ICOContract.MAP_DEPOSIT(account);

        if (maxContribute.lt(currentDeposit.add(depositETH))) {
            toast.error("Deposit Amount should be lower than Max Contribute.");
            return false;
        }

        if (minContribute.gt(currentDeposit.add(depositETH))) {
            toast.error("Deposit Amount should be higher than Min Contribute.");
            return false;
        }


        const tx = await ICOContract.contribute({
            value: depositETH
        });
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}

/*************** CLAIM ***************/
export async function scClaim(chainId, provider) {
    const ICOContract = getContractObj('DPPE_ICO', chainId, provider);
    try {
        const tx = await ICOContract.claim();
        await tx.wait(1);

        return true;
    } catch (e) {
        console.log(e);
        return false;
    }
}
