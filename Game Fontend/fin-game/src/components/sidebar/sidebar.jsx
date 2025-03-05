import React from "react";
import {
    LineStyle, Timelapse, BarChartOutlined, MonetizationOn, ShoppingBasketTwoTone, RequestQuoteTwoTone,
    ExitToApp, LeaderboardTwoTone, LinkTwoTone, LocalLibraryTwoTone
} from "@mui/icons-material";
import "./sidebar.css";
import { Link } from "react-router-dom";


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Dashboard
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard" className="link">
                            <li className="sidebarListItem">
                                <LineStyle className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timelapse className="sidebarIcon" />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <BarChartOutlined className="sidebarIcon" />
                            Stats
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Quick Action
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/FinancialQuiz" className="link">
                            <li className="sidebarListItem">
                                <MonetizationOn className="sidebarIcon" />
                                Finencial Quizes
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className="sidebarListItem">
                                <RequestQuoteTwoTone className="sidebarIcon" />
                                Price Checking Tool
                            </li>
                        </Link>
                        <Link to="/marketPlace" className="link">
                            <li className="sidebarListItem">
                                <ShoppingBasketTwoTone className="sidebarIcon" />
                                Market Place
                            </li>
                        </Link>
                     
                    </ul>
                </div>

                
            <div className="sidebarMenu">
                    <h3 className="sidebarTitel">
                        Learning Module
                    </h3>
                    <ul className="sidebarList">
                        <Link to="/dashboard" className="link">
                            <li className="sidebarListItem">
                                <LocalLibraryTwoTone className="sidebarIcon" />
                                Basic Tutorial
                            </li>
                        </Link>
                        <Link to="/externalLink" className="link">
                        <li className="sidebarListItem">
                            <LinkTwoTone className="sidebarIcon" />
                            External Links
                        </li>
                        </Link>
                        <Link to="/leaderBoard" className="link">
                        <li className="sidebarListItem">
                            <LeaderboardTwoTone className="sidebarIcon" />
                            Leader Board
                        </li>
                        </Link>
                    </ul>
                </div>

            </div>



            <div className="sidebarFooter">
                <div className="sidebarFooterWrapper">
                    Hello, Player
                    <Link to="/logout" className="link">
                        <li className="sidebarListItem">
                            <ExitToApp className="sidebarIcon" />
                            Logout
                        </li>
                    </Link>
                </div>
            </div>
        </div>
    )
}
