import './overView.scss'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react';
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function OverView({setIsLoading}:Props) {

    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 9) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
    }, [setIsLoading, imgCount]);
    return (
        <>
            <div className="overView_section" id='overview'>

                <div className="content">
                    <div className="wrapper reverse">
                        <div className="item" data-aos="fade-right">
                            <img src="/assets/img_01.png" alt="" className="img" onLoad={onLoad}/>
                            <div className="effect"></div>
                        </div>
                        <div className="item" data-aos="fade-left">
                            <h2>SoulMate the <span>New Order</span> </h2>

                            <p>Soulmates.AI is a groundbreaking Web3 platform that combines cutting-edge AI technologies and blockchain to create a new era of AI companionship. </p>

                            <p>Our mission is to offer users an emotionally satisfying and personalized AI companion that enhances their lives and fosters healthy, fulfilling relationships.</p>

                            <div className="btns">
                            <HashLink to="#whitepaper" className="launchBtn"><img src="/assets/icons/icon_book.svg" alt="" /> Whitepaper</HashLink>
                            </div>
                        </div>
                    </div>
                    
                    <div className="wrapper">
                        <div className="item" data-aos="fade-right">
                            <h2>Read The <span>SoulMate</span> Whitepaper </h2>

                            <p>Our team has extensive experience in working for both institutional. To gain a deeper understanding of SoulMate and our future plans, be sure to check out our comprehensive Whitepaper. It provides valuable insights into our project and its potential impact in the long term.</p>

                            <div className="btns">
                            <HashLink to="#whitepaper" className="launchBtn"><img src="/assets/icons/icon_book.svg" alt="" /> Read The Whitepaper</HashLink>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-left">
                            <img src="/assets/img_02.png" alt="" className="img"  onLoad={onLoad}/>
                        </div>
                    </div>
                    <h2>Featured In</h2>
                    <div className="wrapper" data-aos="fade-up" style={{margin : 0}}>
                        <ul>
                            <li className='w_30'><img src="/assets/feature_img_01.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_30'><img src="/assets/feature_img_02.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_30'><img src="/assets/feature_img_03.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_25'><img src="/assets/feature_img_04.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_25'><img src="/assets/feature_img_05.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_25'><img src="/assets/feature_img_06.png" alt=""  onLoad={onLoad}/></li>
                            <li className='w_25'><img src="/assets/feature_img_07.png" alt=""  onLoad={onLoad}/></li>
                        </ul>
                    </div>
                </div>
            </div>
         </>
    )
}
 