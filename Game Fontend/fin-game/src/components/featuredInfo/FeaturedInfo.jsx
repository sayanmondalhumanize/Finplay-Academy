import React from 'react';
import { ArrowDownwardTwoTone, ArrowUpwardTwoTone }  from "@mui/icons-material";
import "./featuredInfo.css";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Total Cash
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 1000 </span>
                    <span className="featuredMoneyRate"> 
                    -11% <ArrowDownwardTwoTone className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Stock Market Investment
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 3000 </span>
                    <span className="featuredMoneyRate"> 
                    11% <ArrowUpwardTwoTone className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Crypto Currency Investment
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 3650 </span>
                    <span className="featuredMoneyRate"> 
                    11% <ArrowUpwardTwoTone className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitel">
                    Other Investment
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 1234 </span>
                    <span className="featuredMoneyRate"> 
                    -1% <ArrowDownwardTwoTone className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Financial Literacy Score
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 80/130 </span>
                    <span className="featuredMoneyRate"> 
                    {((80 /130) * 100).toFixed(2) } % <ArrowUpwardTwoTone className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last check </span>
            </div>
            
        </div>
    );
}