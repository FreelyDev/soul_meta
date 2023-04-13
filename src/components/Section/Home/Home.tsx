import './home.scss'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react';
import Timer from 'components/timer/Timer';
import clsx from 'clsx'
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function Home({setIsLoading}:Props) {

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
    const [coinID, setCoinID] = useState(0)
    const onClickCoinBtn = (id : number) => {
        setCoinID(id)
    }
    return (
        <>
            <div className="home_section">
                <div className="content">
                    <div className="wrapper">
                        <div className="left" data-aos="fade-right">
                        <h1>Step Into a <span>New World</span> of <span>AI Companionship</span></h1>
                        <p>with the Soulmate AI Personalized, emotionally intelligent virtual partners that transform the way you connect.</p>
                        <p>Join the Presale today.</p>
                        <div className="btns">
                        <HashLink to="#whitepaper" className="launchBtn"><img src="/assets/icons/icon_book.svg" alt="" /> Whitepaper</HashLink>
                        <HashLink to="#token" className="launchBtn"><img src="/assets/icons/icon_sheild.svg" alt="" />Token</HashLink>
                        </div>
                        
                        </div>
                        <div className="right"data-aos="fade-left">
                            <div className="card">
                                <div className="card_top">
                                    <div className="timer_div">
                                        <Timer deadLine={1682424000}/>
                                    </div>
                                    <p>USDT raised: <strong>$139,743 / $850,000</strong> </p>
                                    <h5>Future Listing Price: <span>$0.01</span></h5>
                                </div>
                                <div className="card_content">
                                    <h3>1 SMT = $0.004</h3>
                                    <div className="btns">
                                        <button className={clsx('button', coinID === 0?'active_btn':'')} onClick = {()=>onClickCoinBtn(0)}><img src="/assets/icons/icon_eth.svg" alt=""  onLoad={onLoad}/> ETH</button>

                                        <button className={clsx('button', coinID === 1?'active_btn':'')} onClick = {()=>onClickCoinBtn(1)}><img src="/assets/icons/icon_usdt.svg" alt=""  onLoad={onLoad}/> USDT</button>

                                        <button className={clsx('button', coinID === 2?'active_btn':'')} onClick = {()=>onClickCoinBtn(2)}><img src="/assets/icons/icon_usdc.svg" alt=""  onLoad={onLoad}/> USDC</button>
                                    </div>
                                    <div className="row">
                                        <h4>Amount in {coinID === 0 ? 'ETH' : coinID === 1 ? 'USDT' : 'USDC'} you Pay</h4>
                                        <div className="input_div">
                                            <input type="number"  />
                                            <div className="img_div">
                                                {coinID === 0 ? <img src="/assets/icons/icon_eth.svg" alt="" />:coinID === 1 ? <img src="/assets/icons/icon_usdt.svg" alt="" /> : <img src="/assets/icons/icon_usdc.svg" alt="" />}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <h4>Amount in SMT you receive</h4>
                                        <div className="input_div">
                                            <input type="number" />
                                            <div className="img_div">
                                                <img src="/assets/icons/icon_smt.svg" alt="" onLoad={onLoad}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <button className="connectBtn">Connect Wallet</button>
                                    </div>
                                    <HashLink to="#how_to_buy" className="launchBtn"><i className="fas fa-question-circle"></i> How to Buy</HashLink>
                                </div>
                            </div>
                            <div className="effect"></div>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
 