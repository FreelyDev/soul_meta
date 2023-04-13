import './token.scss'
import { useEffect, useState } from 'react';
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function Token({setIsLoading}:Props) {

    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 4) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
    }, [setIsLoading, imgCount]);

    return (
        <>
            <div className="token_section" id = 'token'>
                <div className="content">
                    <h2>SoulMate AI Tokenomics</h2>
                    <div className="wrapper mb_5">
                        <img src="/assets/token.png" alt="" className='img' data-aos="fade-up" onLoad = {onLoad}/>
                    </div>
                    
                    <div className="wrapper mb_10">
                        <ul data-aos="fade-up">
                            <li className='w_30'>
                                <img src="/assets/icons/icon_eth_01.svg" alt="" onLoad = {onLoad}/>
                                <span>
                                    <h3>ERC-20</h3>
                                    <p>ETH Token!</p>
                                </span>
                            </li>
                            <li className='w_30'>
                                <img src="/assets/icons/icon_smt_01.svg" alt="" onLoad = {onLoad}/>
                                <span>
                                    <h3>138,744,444</h3>
                                    <p>Total Supply</p>
                                </span>
                            </li>
                            <li className='w_30'>
                                <img src="/assets/icons/icon_smt_01.svg" alt="" onLoad = {onLoad}/>
                                <span>
                                    <h3>$SMT</h3>
                                    <p>SoulMate Token</p>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <h2>Token Details</h2>
                    <h4>Use the contract information below to add the Metropoly token to your wallet.</h4>
                    <div className="wrapper border" data-aos="fade-up">
                        <div className="left">
                            <h3>Token Details</h3>
                            <span>
                                <h4>Token Name</h4>
                                <p>SoulMate Token</p>
                            </span>
                            <span>
                                <h4>Token Sale Stage</h4>
                                <p>7</p>
                            </span>
                            <span>
                                <h4>Token Type</h4>
                                <p>ERC-20 (Ethereum)</p>
                            </span>
                            <span>
                                <h4>Token Symbol</h4>
                                <p>$SMT</p>
                            </span>
                            <span>
                                <h4>Decimal</h4>
                                <p>18</p>
                            </span>
                            <span>
                                <h4>Token Contract Address</h4>
                                <p>0xD77401A76d6cDB7Ac3bb031Bf25dEc07615509E7</p>
                            </span>
                        </div>
                        <div className="right">
                            <h3>Presale Details</h3>
                            <span>
                                <h4>Token sold during the Pre-sale</h4>
                                <p>31,217,500 $SMT</p>
                            </span>

                            <span>
                                <h4>Token sold during the Pre-sale</h4>
                                <p>31,217,500 $SMT</p>
                            </span>

                            <span>
                                <h4>Token sold during the Pre-sale</h4>
                                <p>31,217,500 $SMT</p>
                            </span>

                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
 