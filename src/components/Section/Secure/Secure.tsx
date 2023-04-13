import './secure.scss'
import { useEffect, useState } from 'react';
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function Secure({setIsLoading}:Props) {

    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 2) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
    }, [setIsLoading, imgCount]);

    return (
        <>
            <div className="secure_section">
                <div className="content"data-aos="fade-up">
                    <h2><span>100%</span> Secure</h2>
                    <div className="wrapper">
                        <div className="item left">
                            <img src="/assets/secure_img_01.png" alt="" onLoad = {onLoad}/>
                            <h3>Team Verified by CertiK</h3>
                            <p>Entire team KYC verified by CertiK, view certificate <a href="/" target={"_blank"}>here.</a></p>
                        </div>
                        <div className="item right">
                            <img src="/assets/secure_img_02.png" alt="" onLoad = {onLoad}/>
                            <h3>Security Audit by PeckShield</h3>
                            <p>Contract code fully audited by PeckShield and shown to be 100% secure.</p> 
                            <p>View audit <a href="/" target={"_blank"}>here.</a></p>
                        </div>
                    </div>
                </div>
            </div>
         </>
    )
}
 