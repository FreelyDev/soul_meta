import "./timer.scss"
import { useState, useEffect } from 'react';
import { useWeb3React } from "@web3-react/core";

type TimeNumber = {
    deadLine:number,
    setEndTime?(value: boolean): void
};
export default function Timer({ setEndTime, deadLine }: TimeNumber) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const { connector, library, chainId, account, active } = useWeb3React();
    useEffect(() => {

        let myInterval = setInterval(() => {
            const currentDate: any = Date.now()/1000;
            const diff = deadLine - currentDate;
            const dayNum = diff > 0 ? Math.floor(diff  / 60 / 60 / 24) : 0;
            const hourNum = diff > 0 ? Math.floor(diff  / 60 / 60) % 24 : 0;
            const minNum = diff > 0 ? Math.floor(diff  / 60) % 60 : 0;
            const secNum = diff > 0 ? Math.floor(diff ) % 60 : 0;

            if (currentDate < deadLine) {
                setDays(dayNum);
                setHours(hourNum);
                setMinutes(minNum);
                setSeconds(secNum);
            }
            else{
                setEndTime && setEndTime(true)
            }

        }, 0)
        return () => {
            clearInterval(myInterval);
        };

    }, [connector, library, account, active, chainId, deadLine, setEndTime]);

    return (
        <div className="timer">
            <div className="timerNums">
                <div className="numbers">
                    <div className="number">
                        <span>{Math.floor(days/10)} <div className=""></div></span>
                        <span>{days%10}<div className=""></div></span>
                    </div>:
                    <div className="number">
                        <span>{Math.floor(hours/10)}<div className=""></div></span>
                        <span>{hours%10}<div className=""></div></span>
                    </div>:
                    <div className="number">
                        <span>{Math.floor(minutes/10)}<div className=""></div></span>
                        <span>{minutes%10}<div className=""></div></span>
                    </div>:
                    <div className="number">
                        <span>{Math.floor(seconds/10)}<div className=""></div></span>
                        <span>{seconds%10}<div className=""></div></span>
                    </div>
                    
                </div>
                <div className="texts">
                    <div className="text">DAYS</div>
                    <div className="text">HOURS</div>
                    
                    <div className="text">MINUTES</div>
                    
                    <div className="text">SECONDS</div>
                </div>
            </div>
        </div>
    )
}