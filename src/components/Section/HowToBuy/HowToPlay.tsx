import './howToBuy.scss'
import { useEffect, useState } from 'react';
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function HowToBuy({setIsLoading}:Props) {

    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 6) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
    }, [setIsLoading, imgCount]);

    return (
        <>
            <div className="howToBuy_section" id = 'how_to_buy'>
                <div className="content">
                    <h2>How To Buy?</h2>
                    <div className="wrapper">
                        <div className="item" data-aos="fade-right">
                            <h3>Step 1</h3>
                            <h4>Connect your Wallet</h4>
                            <p>Use Metamask or Trust Wallet to connect your wallet in seconds.</p>
                            <h3>Step 2</h3>
                            <h4>Choose Coin | Token</h4>
                            <p>The minimum is $100 and you can choose between USDT, ETH and USDC.</p>
                            <h3>Step 3</h3>
                            <h4>Confirm Transaction</h4>
                            <p>After checking your contribution amount you need to confirm the transaction </p>
                            <h3>Step 4</h3>
                            <h4>Claim Tokens</h4>
                            <p>Congratulations! You can claim your $SMT after the presale ends.</p>

                        </div>
                        <div className="item right" data-aos="fade-left">
                            <img src="/assets/screen_shot.png" alt="" className="img" onLoad = {onLoad}/>
                            <div className="wallet">
                            <div className="">
                                <img src="/assets/metamask.png" alt="" onLoad = {onLoad}/>
                                <h5>MetaMask</h5>
                            </div>
                            <div className="">
                                <img src="/assets/wallet-connect.png" alt="" onLoad = {onLoad}/>
                                <h5>Wallet Connect</h5>
                            </div>
                            </div>
                            
                            <div className="coin_list">
                                <img src="/assets/icons/icon_usdc_01.svg" alt="" onLoad = {onLoad}/>
                                <img src="/assets/icons/icon_usdt_01.svg" alt="" onLoad = {onLoad}/>
                                <img src="/assets/icons/icon_eth_01.svg" alt="" onLoad = {onLoad}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
 