import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Card } from "./components/Card";
import { ComputerCard } from "./components/ComputerCard";
import "./App.css";

export default function App() {
  const [computers, setComputers] = React.useState([
    {
      company: "Brand X",
      name: "DESKTOP-1",
      connected: false,
      camerasOffline: 10,
      camerasTotal: 10,
      displaysOffline: 0,
      displaysTotal: 10,
    },
    {
      company: "Brand XYZ",
      name: "DESKTOP-M",
      connected: false,
      camerasOffline: 1,
      camerasTotal: 10,
      displaysOffline: 0,
      displaysTotal: 10,
    },
    {
      company: "Brand A",
      name: "DESKTOP-C",
      connected: false,
      camerasOffline: 0,
      camerasTotal: 10,
      displaysOffline: 2,
      displaysTotal: 10,
    },
    {
      company: "Brand XYZ",
      name: "DESKTOP-5",
      connected: false,
      camerasOffline: 3,
      camerasTotal: 10,
      displaysOffline: 2,
      displaysTotal: 10,
    },
    {
      company: "Brand XYZ",
      name: "DESKTOP-8",
      connected: false,
      camerasOffline: 4,
      camerasTotal: 10,
      displaysOffline: 1,
      displaysTotal: 10,
    },
    {
      company: "Brand XYZ",
      name: "DESKTOP-9",
      connected: true,
      camerasOffline: 0,
      camerasTotal: 10,
      displaysOffline: 2,
      displaysTotal: 10,
    },
    {
      company: "Brand M",
      name: "DESKTOP-D",
      connected: false,
      camerasOffline: 8,
      camerasTotal: 10,
      displaysOffline: 5,
      displaysTotal: 10,
    },
    {
      company: "Brand M",
      name: "DESKTOP-99",
      connected: true,
      camerasOffline: 9,
      camerasTotal: 10,
      displaysOffline: 6,
      displaysTotal: 10,
    },
    {
      company: "Brand X",
      name: "DESKTOP-99",
      connected: false,
      camerasOffline: 2,
      camerasTotal: 10,
      displaysOffline: 3,
      displaysTotal: 10,
    },
  ]);

  const goodPercentage = 20;
  let totalDevices = 0;
  let totalOfflineDevices = 0;
  let totalOfflinePC = 0;
  let totalOfflineCameras = 0;
  let totalOfflineDisplays = 0;
  let isGoodHealthStatus = false;
  let offlinePCIndex = -1;

  let calculateHealth = () => {
    for (let i = 0; i < computers.length; i++) {
      let comp = computers[i];
      let offlinePC = comp.connected ? 0 : 1;
      offlinePCIndex =
        offlinePCIndex > -1 ? offlinePCIndex : offlinePC ? i : offlinePCIndex;
      totalOfflinePC += offlinePC;
      totalOfflineCameras += comp.camerasOffline;
      totalOfflineDisplays += comp.displaysOffline;

      totalDevices += comp.camerasTotal + comp.displaysTotal + 1;
    }
    totalOfflineDevices +=
      totalOfflinePC + totalOfflineCameras + totalOfflineDisplays;
    isGoodHealthStatus =
      (totalOfflineDevices / totalDevices) * 100 < goodPercentage
        ? true
        : false;
  };
  calculateHealth();

  useEffect(() => {
    if (offlinePCIndex > -1) {
      setTimeout(() => {
        computers[offlinePCIndex].connected = true;
        setComputers(computers);
      }, 1000);
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <div className="cards">
          <Card label="Overall Health" id="overall-health">
            <h1
              className="health"
              status={isGoodHealthStatus ? "true" : "false"}
            >
              {isGoodHealthStatus ? "Good" : "Bad"}
            </h1>
          </Card>
          <Card label="PC Connectivity">
            <p>
              <span className="big">
                {computers.filter((c) => !c.connected).length}
              </span>{" "}
              offline
            </p>
          </Card>
          <Card label="Cameras">
            <p>
              <span className="big">{totalOfflineCameras}</span> offline
            </p>
          </Card>
          <Card label="Displays">
            <p>
              <span className="big">{totalOfflineDisplays}</span> offline
            </p>
          </Card>
        </div>

        <div className="computers">
          <h3>Computers</h3>
          {computers.map((computer, index) => (
            <ComputerCard
              key={`computer-${index}`}
              connected={computer.connected}
              company={computer.company}
              name={computer.name}
              camerasOffline={computer.camerasOffline}
              displaysOffline={computer.displaysOffline}
            />
          ))}
        </div>
      </main>
    </>
  );
}
