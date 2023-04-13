import Loading from 'components/loading/Loading';
import Menu from 'components/menu/Menu';
import Topbar from 'components/topbar/Topbar';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Footer from 'components/Section/footer/Footer';
import './style.scss'
import Home from 'components/Section/Home/Home';
import Secure from 'components/Section/Secure/Secure';
import OverView from 'components/Section/OverView/OverView';
import HowToPlay from 'components/Section/HowToBuy/HowToPlay';
import Token from 'components/Section/Token/Token';
import RoadMap from 'components/Section/RoadMap/RoadMap';
import Faq from 'components/Section/FAQ/Faq';

export default function HomePage( ) {
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading1, setIsLoading1] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const [isLoading3, setIsLoading3] = useState(true);
    const [isLoading4, setIsLoading4] = useState(true);
    const [isLoading5, setIsLoading5] = useState(true);
    const [isLoading6, setIsLoading6] = useState(true);

    const [menuOpen, setMenuOpen] = useState(false);
    const isTabletOrMobile = useMediaQuery({query: "screen and (max-width: 640px) and (orientation:portrait)",});
    const isLandOrMobile = useMediaQuery({query: "screen and (max-height: 640px) and (orientation:landscape)",});
    useEffect(() => {

        if (!isLandOrMobile && !isTabletOrMobile) {
            setMenuOpen(false);
        }
       
    }, [ isTabletOrMobile, isLandOrMobile]);

    useEffect(() => {

        if (isLoading1 || isLoading1 || isLoading2 || isLoading3 || isLoading4 || isLoading5 || isLoading6) {
            setIsLoading(true);
        }
        else{
            setIsLoading(false)
        }
       
    }, [ isLoading1, isLoading2, isLoading3, isLoading4, isLoading5, isLoading6]);
    window.onload = ()=> {
        setIsLoading(false)
        setIsLoading1(false)
        setIsLoading2(false)
        setIsLoading3(false)
        setIsLoading4(false)
        setIsLoading5(false)
        setIsLoading6(false)
    };
    return (
        <>
            <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
            <Loading isLoading={isLoading} />
            <div className="sections" >
                <Home setIsLoading={setIsLoading1}/>
                <Secure setIsLoading={setIsLoading2}/>
                <OverView setIsLoading={setIsLoading3}/>
                <HowToPlay setIsLoading={setIsLoading4}/>
                <Token setIsLoading={setIsLoading5}/>
                <RoadMap setIsLoading={setIsLoading6}/>
                <Faq/>
                <Footer/>
            </div>
            
        </>
    )
}
