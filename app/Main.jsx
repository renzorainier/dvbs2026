"use client";

import React, { useState, useEffect } from "react";
// Components
import Tab from "./Tab";
import StudentOutTime from "./StudentOutTime";
import PointingSystemGraph from "./PointingSystemGraph";
import AttendanceChart from "./AttendanceChart";
import Schedule from "./Schedule";
import DailyRewards from "./DailyRewards";
import SalvationDecision from "./SalvationDecision";
import StudentPointsRanking from "./StudentPointsRanking";
import Store from "./Store";
import DisplayControl from "./DisplayControl";
import RecitationPoints from "./RecitationPoints";
import Password from "./Password.jsx";
import Weather from "./Weather";

// Uniform Outlined Icons
import { FaChevronDown } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { FiClock, FiMonitor, FiAward, FiStar } from "react-icons/fi";
import {
  HiOutlineUserGroup,
  HiOutlineClipboardList,
  HiOutlineTrendingUp,
  HiOutlineUser,
} from "react-icons/hi";
import { TbDoorExit, TbCross } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";

function Main() {
  const [currentComponent, setCurrentComponent] = useState(null);
  const [isVisitorView, setIsVisitorView] = useState(false);
  const [cardExpanded, setCardExpanded] = useState(false);
  
  // New state to control the points overlay modal
  const [showPointsOverlay, setShowPointsOverlay] = useState(false);

  const toggleCard = () => setCardExpanded(!cardExpanded);

  const handleButtonClick = (componentName) => {
    setCurrentComponent(componentName);
    setShowPointsOverlay(false); // Ensure overlay closes when navigating
  };

  const handleBackButtonClick = () => {
    setCurrentComponent(null);
    setIsVisitorView(false);
  };

  const renderCurrentComponent = () => {
    switch (currentComponent) {
      case "Tab":
        return <Tab />;
      case "Out":
        return (
          <Password
            isVisitorView={isVisitorView}
            setIsVisitorView={setIsVisitorView}
            correctPassword="1111">
            <StudentOutTime isVisitorView={isVisitorView} />
          </Password>
        );
      case "Point":
        return (
          <Password
            isVisitorView={isVisitorView}
            setIsVisitorView={setIsVisitorView}
            correctPassword="9999">
            <PointingSystemGraph isVisitorView={isVisitorView} />
          </Password>
        );
      case "Attendance":
        return <AttendanceChart />;
      case "Schedule":
        return <Schedule />;
      case "Rewards":
        return <DailyRewards />;
      case "SalvationDecision":
        return <SalvationDecision />;
      case "Rank":
        return <StudentPointsRanking />;
      case "Store":
        return (
          <Password
            isVisitorView={isVisitorView}
            setIsVisitorView={setIsVisitorView}
            correctPassword="2026">
            <Store isVisitorView={isVisitorView} />
          </Password>
        );
      case "DisplayControl":
        return (
          <Password
            isVisitorView={isVisitorView}
            setIsVisitorView={setIsVisitorView}
            correctPassword="0000">
            <DisplayControl isVisitorView={isVisitorView} />
          </Password>
        );
      case "RecitationPoints":
        return (
          <Password
            isVisitorView={isVisitorView}
            setIsVisitorView={setIsVisitorView}
            correctPassword="4444">
            <RecitationPoints isVisitorView={isVisitorView} />
          </Password>
        );
      default:
        return (
          <div
            className="flex flex-col justify-center items-center min-h-[100dvh] relative overflow-y-auto overflow-x-hidden py-12"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
            }}>
            
            {/* === PREMIUM HEADER AREA === */}
            <div className="flex-shrink-0 w-full flex flex-col items-center z-10 mb-12 mt-4">
              <div className="text-center relative z-10 flex flex-col items-center select-none">
                <h1 className="font-black text-7xl min-[360px]:text-8xl sm:text-9xl lg:text-[10rem] tracking-tighter leading-none bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] pb-2 [-webkit-text-stroke:1px_white]">
                  POLAR
                </h1>
                <h2 className="font-light text-3xl min-[360px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-[0.4em] leading-none text-white/90 uppercase mt-2 drop-shadow-sm">
                  Extremes
                </h2>
                
                <div className="flex items-center justify-center gap-6 mt-8 w-full max-w-md opacity-80">
                  <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent to-white/60"></div>
                  <h3 className="font-medium text-xs sm:text-sm md:text-base tracking-[0.5em] text-white uppercase whitespace-nowrap">
                    DVBS 2026
                  </h3>
                  <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent to-white/60"></div>
                </div>
              </div>
            </div>
            {/* ======================================= */}

            {/* Grid Area - Premium Glass */}
            <div className="w-full px-20 sm:px-16 max-w-[420px] mx-auto z-10 flex flex-col justify-center min-h-0">
              <div className="grid grid-cols-2 gap-4">
                
                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Tab")}
                  style={{ animation: "slide-from-left 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <HiOutlineClipboardList
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Attendance</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Attendance")}
                  style={{ animation: "slide-from-left 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <HiOutlineTrendingUp
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">List</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Schedule")}
                  style={{ animation: "slide-from-left 1.0s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <FiClock
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Schedule</span>
                </button>

                {/* UPDATED: Main Points button with FiStar icon */}
                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => setShowPointsOverlay(true)}
                  style={{ animation: "slide-from-left 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <FiStar
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Points</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Rewards")}
                  style={{ animation: "slide-from-left 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <FiAward
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Rewards</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("SalvationDecision")}
                  style={{ animation: "slide-from-left 1.3s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <TbCross
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Salvation</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Store")}
                  style={{ animation: "slide-from-left 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <MdOutlineLocalGroceryStore
                    style={{ fontSize: "2.8rem" }}
                    className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                  />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Store</span>
                </button>

                <button
                  className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white hover:shadow-[0_8px_32px_rgba(255,255,255,0.05)] flex flex-col items-center justify-center w-full aspect-square p-4"
                  onClick={() => handleButtonClick("Out")}
                  style={{ animation: "slide-from-left 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
                  <TbDoorExit style={{ fontSize: "2.8rem" }} className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                  <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Out</span>
                </button>
              </div>

              {/* Minimalist Pill Dropdown Toggle */}
              <div className="flex justify-center items-center mt-8">
                <button 
                  className="flex justify-center items-center w-16 h-8 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-xl border border-white/10 shadow-lg transition-all duration-500 ease-out focus:outline-none group" 
                  onClick={toggleCard}
                  aria-label="Toggle Menu"
                >
                  <FaChevronDown
                    className={`text-white/60 group-hover:text-white text-sm transition-transform duration-500 ${
                      cardExpanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Expanded Menu Items - Centered Monitor Button */}
              <div 
                className={`flex justify-center transition-all duration-700 ease-in-out overflow-hidden ${
                  cardExpanded ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                  <button
                    className="group focus:outline-none bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 rounded-3xl shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out transform hover:-translate-y-1 hover:bg-white/10 hover:border-white/20 hover:text-white flex flex-col items-center justify-center w-[calc(50%-0.5rem)] aspect-square p-4"
                    onClick={() => handleButtonClick("DisplayControl")}>
                    <FiMonitor style={{ fontSize: "2.8rem" }} className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                    <span className="text-xs font-semibold tracking-widest uppercase opacity-90">Monitor</span>
                  </button>
              </div>
            </div>

            {/* === PREMIUM POINTS OVERLAY MODAL === */}
            {showPointsOverlay && (
              <div className="fixed inset-0 z-50 flex items-center justify-center px-6 bg-black/60 backdrop-blur-md transition-opacity duration-500">
                <div 
                  className="w-full max-w-[340px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col gap-6"
                  style={{ animation: "slide-from-left 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
                >
                  <div className="text-center space-y-2 mt-2">
                    <h3 className="text-white font-light tracking-[0.3em] uppercase text-sm">Select Points</h3>
                    <div className="h-[1px] w-12 mx-auto bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      className="group focus:outline-none bg-white/5 border border-white/10 text-white/70 rounded-2xl transition-all duration-500 ease-out hover:bg-white/15 hover:border-white/30 hover:text-white p-4 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl hover:-translate-y-1"
                      onClick={() => handleButtonClick("Point")}>
                      <HiOutlineUserGroup style={{ fontSize: "2.5rem" }} className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                      <span className="text-[10px] font-semibold tracking-widest uppercase opacity-90 text-center">Group</span>
                    </button>
                    
                    {/* UPDATED: Individual Points button with HiOutlineUser icon */}
                    <button
                      className="group focus:outline-none bg-white/5 border border-white/10 text-white/70 rounded-2xl transition-all duration-500 ease-out hover:bg-white/15 hover:border-white/30 hover:text-white p-4 flex flex-col items-center justify-center aspect-square shadow-lg hover:shadow-xl hover:-translate-y-1"
                      onClick={() => handleButtonClick("RecitationPoints")}>
                      <HiOutlineUser style={{ fontSize: "2.5rem" }} className="mb-3 transition-transform duration-500 group-hover:scale-110 drop-shadow-md" />
                      <span className="text-[10px] font-semibold tracking-widest uppercase opacity-90 text-center">Individual</span>
                    </button>
                  </div>

                  <button
                    className="w-full py-4 mt-2 rounded-full bg-white/5 border border-white/10 text-white/50 tracking-[0.3em] text-[10px] uppercase hover:bg-white/10 hover:text-white transition-all duration-500 focus:outline-none"
                    onClick={() => setShowPointsOverlay(false)}>
                    Cancel
                  </button>
                </div>
              </div>
            )}
            {/* ==================================== */}
            
          </div>
        );
    }
  };

  const backButton = currentComponent ? (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        className="flex items-center justify-center w-12 h-12 bg-black/20 backdrop-blur-xl border border-white/10 text-white/80 rounded-full shadow-2xl transition-all duration-500 ease-out hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-110 focus:outline-none"
        onClick={handleBackButtonClick}>
        <IoMdArrowRoundBack className="text-xl" />
      </button>
    </div>
  ) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentComponent]);

  return (
    <div className="fade-in min-h-[100dvh]">
      {backButton}
      {renderCurrentComponent()}
    </div>
  );
}

export default Main;