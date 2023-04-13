import { useWeb3React } from '@web3-react/core';
// import CustomDropdown from 'components/dropdown/CustomDropdown';
import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link'
import { truncateWalletString } from 'utils';
import { getICOEngineInfo } from 'utils/contracts';
import ConnectModal from 'components/Modals/connectModal/ConnectModal';
import AccountModal from "components/Modals/accountModal/AccountModal";
import { ICOEngineDetail } from "utils/typs";
import './topbar.scss'
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

type MenuType = {
    menuOpen?: boolean;
    setMenuOpen(flag: boolean): void;
};
export default function Topbar({ menuOpen, setMenuOpen }: MenuType) {
    const [showConnectModal, setShowConnectModal] = useState(false);
    const [showAccountModal, setShowAccountModal] = useState(false);
    const [loginStatus, setLoginStatus] = useState(false);
    const { connector, library, chainId, account, active } = useWeb3React();
    const [/*ICOEngineDetail*/, setICOEngineDetail] = useState<ICOEngineDetail>(null);

    useEffect(() => {
        const isLoggedin = account && active && chainId === parseInt(process.env.REACT_APP_NETWORK_ID, 10);
        setLoginStatus(isLoggedin);
        if (isLoggedin) {
            getICOEngineInfo(account).then(
                (engineInfo: ICOEngineDetail) => {
                    setICOEngineDetail(engineInfo);
                }
            );
        }
    }, [connector, library, account, active, chainId]);
    
    const [navId, setNavId] = useState("");
    const search = useLocation();
    useEffect(() => {
      
      if(search.hash.includes("#")){
        const hash = search.hash.replace("#", "");
        setNavId(hash);
      }else{
        const hash = search.pathname.replace("/", "");
        setNavId(hash);
      }
      
    }, [setNavId, search]);

    

    return (
        <div className="topbar">
            <div className="content">
            <div className="logo">
                <HashLink to="/#" ><img src="assets/logo.png" alt="" /> <h1>SoulMateAI</h1></HashLink>
                
            </div>
            <div className="navList">
                <ul>
                    <li className={clsx(navId === "" ? "active_tab" : "")}><HashLink to="/#" smooth>Ecosystem</HashLink></li>
                    <li className={clsx(navId === "overview" ? "active_tab" : "")}><HashLink to="#overview" smooth>Overview</HashLink></li>
                    <li className={clsx(navId === "token" ? "active_tab" : "")}><HashLink to="/#token" smooth>Token</HashLink></li>
                    <li className={clsx(navId === "how_to_buy" ? "active_tab" : "")}><HashLink to="#how_to_buy" smooth>How to Buy</HashLink></li>
                    <li className={clsx(navId === "more" ? "active_tab" : "")}><HashLink to="/" smooth>Whitepaper</HashLink></li>
                    <li className={clsx(navId === "faq" ? "active_tab" : "")}><HashLink to="/#faq" smooth>FAQ</HashLink></li>
                </ul>
            </div>
            <div className="btns">
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
                <div className="connectBtn button" onClick={() => { !loginStatus ? setShowConnectModal(true) : setShowAccountModal(true);}}>
        
                    <p>{loginStatus ? truncateWalletString(account) : <><i className="fas fa-wallet"/> Connect Wallet</>}</p>
                </div>
            </div>

            </div>
            
            <div className={(menuOpen ? "hamburger active" : "hamburger")} onClick={() => setMenuOpen(!menuOpen)}>
                <span className="line1"></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
            
            <ConnectModal showConnectModal={showConnectModal} setShowConnectModal={setShowConnectModal} />
            <AccountModal showAccountModal={showAccountModal} setShowAccountModal={setShowAccountModal} />
        </div>
    )
}
