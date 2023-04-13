import './roadMap.scss'
import { HashLink } from 'react-router-hash-link'
import { useEffect, useState } from 'react';
const data = [
    {
        title : 'Phase 1 - Q1 2023',
        sub_title : 'Setup the legal Structure',
        step : ['SoulMate Concept creation ', 'Core team formation hiring key positions', 'Market research and analysis', 'Al technology and infrastructure design', 'Tokenomics and business model development', 'Publishing Pitch desk', 'Publishing Website']
    },
    {
        title : 'Phase 2 - Q2 2023',
        sub_title : 'Release the first Beta Version of the SoulMate App',
        step : ['Token presale initiation', 'Seed round and presale stages 2-4', 'Smart contract audits and security testing', 'Finalize partnerships and collaborations', 'Development of the TheSoulmate.Al platform prototype', 'TheSoulmate.Al platform alpha testing']
    },
    {
        title : 'Phase 3 - Q3 2023',
        sub_title : 'Release the first Beta Version of the SoulMate App',
        step : ['Token presale stages 5-7', 'Platform beta testing with a limited user base', 'Begin development of voice technology integration', 'Token distribution to presale participants', 'Listing on centralized exchanges', 'Initiate marketing campaigns and user acquisition', 'TheSoulmate.Al platform official launch', 'TheSoulmate.Al mobile app release for iOS and Android']
    },
    {
        title : 'Phase 4 - Q4 2023',
        sub_title : 'Release the first Beta Version of the SoulMate App',
        step : ['Introduction of new Al companion customization options', 'Continuous improvement of Al technology for enhanced user experience', 'Ongoing user support and community engagement', 'Token governance features implementation', 'Expansion to new markets and demographics', 'Collaborations with industry leaders for Al research and development', 'Consistent platform updates and improvements']
    },
    {
        title : 'Phase 5 - Q1 2024',
        sub_title : 'Release the first Beta Version of the SoulMate App',
        step : ['Introduce corporate solutions', 'Enhance employee efficiency with Al technology in a corporate framework', 'Periodic user surveys and feedback collection', 'Exploration of potential partnerships for extended platform features', 'Continued growth and success of the TheSoulmate.Al community']
    }
]
interface Props {
    setIsLoading?(flag: boolean): void;
}

export default function RoadMap({setIsLoading}:Props) {

    const [imgCount, setImgCount] = useState(0)
    const onLoad = () => {
        setImgCount(imgCount + 1)
    }
    useEffect(() => {
        if (imgCount >= 25) {
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
        }
    }, [setIsLoading, imgCount]);
    return (
        <>
            <div className="roadMap_section" id='overview'>

                <div className="content">
                    <div className="wrapper mb_5 reverse">
                        <div className="item" data-aos="fade-right">
                            <img src="/assets/img_01.png" alt="" className="img" onLoad = {onLoad}/>
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
                    
                    <div className="wrapper mb_5">
                        <div className="item" data-aos="fade-right">
                            <h2>Read The <span>SoulMate</span> Whitepaper </h2>

                            <p>Our team has extensive experience in working for both institutional. To gain a deeper understanding of SoulMate and our future plans, be sure to check out our comprehensive Whitepaper. It provides valuable insights into our project and its potential impact in the long term.</p>

                            <div className="btns">
                            <HashLink to="#whitepaper" className="launchBtn"><img src="/assets/icons/icon_book.svg" alt="" /> Read The Whitepaper</HashLink>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-left">
                            <img src="/assets/img_02.png" alt="" className="img" onLoad = {onLoad}/>
                        </div>
                    </div>

                    <div className="wrapper mb_5 reverse">
                        <div className="item" data-aos="fade-right">
                            <img src="/assets/img_01.png" alt="" className="img" onLoad = {onLoad}/>
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
                    
                    <div className="wrapper mb_8">
                        <div className="item" data-aos="fade-right">
                            <h2>Read The <span>SoulMate</span> Whitepaper </h2>

                            <p>Our team has extensive experience in working for both institutional. To gain a deeper understanding of SoulMate and our future plans, be sure to check out our comprehensive Whitepaper. It provides valuable insights into our project and its potential impact in the long term.</p>

                            <div className="btns">
                            <HashLink to="#whitepaper" className="launchBtn"><img src="/assets/icons/icon_book.svg" alt="" /> Read The Whitepaper</HashLink>
                            </div>
                        </div>
                        <div className="item" data-aos="fade-left">
                            <img src="/assets/img_02.png" alt="" className="img" onLoad = {onLoad}/>
                        </div>
                    </div>

                    <div className="wrapper" data-aos="fade-up" style={{margin : 0}}>
                        <ul>
                            {data.map((d, k)=>(
                                <li className=''key={k}>
                                    <h3>{d.title}</h3>
                                    <h4>{d.sub_title}</h4>
                                    {d.step.map((t, i)=>(
                                        <span key={i}>
                                            <img src="/assets/icons/icon_clock.svg" alt="" onLoad = {onLoad}/>
                                            <p>{t}</p>
                                        </span>
                                    ))}
                                    
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
         </>
    )
}
 