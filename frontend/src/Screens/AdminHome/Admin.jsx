import React from "react";
import { useNavigate } from "react-router-dom";
import { TwoPerson } from "./TwoPerson";
import "./style.css";

const Admin = () => {
    const navigate = useNavigate();
    return (
        <div className="macbook-pro">
            <div className="container">
                <div className="avatar">
                    <img className="rectangle" alt="Rectangle" src="rectangle-1.png" />
                </div>
                <div className="text-wrapper">Hope Church</div>
                
                <div className="frame">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="overlap-group">
                                <div className="frame-2">
                                    <img className="quran" alt="Quran" src="quran.svg" />
                                </div>
                                <div className="group-content">
                                    <div className="text-wrapper-2">Read, Study, Grow</div>
                                    <div className="frame-3">
                                        <img className="cib-readme" alt="Cib readme" src="cib-readme-1-3.svg" />
                                        <div className="text-wrapper-3">Explore Scriptures</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="overlap-group">
                                <div className="frame-2">
                                    <TwoPerson className="user-two-person" />
                                </div>
                                <div className="group-content">
                                    <div className="text-wrapper-4">View Current Members</div>
                                    <div className="frame-3">
                                        <img className="cib-readme" alt="Cib readme" src="cib-readme-1.svg" />
                                        <div className="text-wrapper-5">Explore Members</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="overlap-group">
                                <div className="frame-2">
                                    <img className="settings" alt="Settings" src="settings-1.png" />
                                </div>
                                <div className="group-content">
                                    <div className="text-wrapper-4">Manage your Organization</div>
                                    <div className="frame-3">
                                        <img className="cib-readme" alt="Cib readme" src="image.svg" />
                                        <div className="text-wrapper-6">Explore Organization</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="section">
                    <div className="group-wrapper">
                        <div className="group">
                            <div className="overlap-group">
                                <div className="frame-2">
                                    <img className="img" alt="Group" src="group.png" />
                                </div>
                                <div className="group-content">
                                    <div className="text-wrapper-4">Create and View Events</div>
                                    <div className="frame-3">
                                        <img className="cib-readme" alt="Cib readme" src="cib-readme-1-2.svg" />
                                        <div className="text-wrapper-5">Explore Events</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="search-bar">
                    <div className="overlap">
                        <div className="text-wrapper-7">Search</div>
                        <img className="search-line" alt="Search line" src="search-line-1.svg" />
                    </div>
                </div>
                
                <img className="logo-section" alt="Logo section" src="logo-section-1.png" />
                
                <div className="navigation">
                    <div className="home">
                        <div className="overlap-2">
                            <div className="text-wrapper-8">Home</div>
                        </div>
                    </div>
                    <div className="profile-info">
                        <div className="text-wrapper-9">Profile Info</div>
                    </div>
                    <div className="data-and-privacy">
                        <div className="text-wrapper-9">Support</div>
                    </div>
                    <div className="security">
                        <div className="text-wrapper-9">Security</div>
                    </div>
                    <div className="donate">
                        <div className="text-wrapper-9">Donate</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
