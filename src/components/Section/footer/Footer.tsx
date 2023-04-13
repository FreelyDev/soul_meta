import './footer.scss'
import { HashLink } from 'react-router-hash-link'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerContent">
                <div className="wrapper">
                   <ul>
                        <li className='w_100'>
                            <div className="logo">
                                <HashLink to="/#" ><img src="assets/logo.png" alt="" /> SoulMateAI</HashLink>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis at quam ratione ipsum quos. Quo accusantium tempore, atque ab distinctio laboriosam commodi repellendus rerum quos aliquid perspiciatis aut quod illo.</p>
                        </li>
                        <li className='w_30'>
                            <h2>Home</h2>
                            <div className="links">
                                <HashLink to="/#" smooth>Ecosystem</HashLink>
                                <HashLink to="/#overview" smooth>Overview</HashLink>
                                <HashLink to="/#Token" smooth>Token</HashLink>
                                <HashLink to="/#how_to_buy" smooth>How to Buy</HashLink>
                                
                            </div>
                        </li>
                        <li className='w_30'>
                            <h2>Legal</h2>
                            <div className="links">
                                <a href="/" target="_blank"rel="noreferrer">Terms and Conditions</a>
                                <a href="/" target="_blank"rel="noreferrer">Privacy policy</a>
                            </div>
                        </li>
                        <li className='w_30'>
                            <h2>Help</h2>
                            <div className="links">
                                <HashLink to="/" smooth>Whitepaper</HashLink>
                                <HashLink to="/#faq" smooth>FAQ</HashLink>
                            </div>
                        </li>
                   </ul>
                    
                </div>
                <div className="bottom">
                    <div className="socialLinks">

                        <a href="https://t.me/" target="_blank"rel="noreferrer">
                            <img src="/assets/icons/icon_telegram.svg" alt="" />
                        </a>
                        <a href="https://twitter.com/" target="_blank"rel="noreferrer">
                            <img src="/assets/icons/icon_twitter.svg" alt="" />
                        </a> 
                        <a href="https://github.com/" target="_blank"rel="noreferrer">
                            <img src="/assets/icons/icon_github.svg" alt="" />
                        </a> 
                        <a href="https://discord.com/" target="_blank"rel="noreferrer">
                            <img src="/assets/icons/icon_discord.svg" alt="" />
                        </a> 
                        <a href="https://twitter.com/" target="_blank"rel="noreferrer">
                            <img src="/assets/icons/icon_medium.svg" alt="" />
                        </a> 
                    
                    </div>
                    <p>Copyright Ⓒ 2023 SoulMateAi</p>
                </div>
            </div>
        </div>
    )
}
 