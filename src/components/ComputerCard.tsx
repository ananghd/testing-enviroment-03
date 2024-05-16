import React from "react";
import "./ComputerCard.css";

interface ComputerCardProps {
  name?: string;
  connected?: boolean;
  company?: string;
  camerasOffline?: number;
  displaysOffline?: number;
}

export const ComputerCard: React.FC<ComputerCardProps> = (props) => {
  const { name, connected, company, camerasOffline, displaysOffline } = props;

  return (
    <div className="computer-card">
      <div className="field" id="connectivity">
        <p className="label">Conn.</p>
        <div
          className="connection-indicator"
          data-is-connected={connected ? "true" : "false"}
        />
      </div>
      <div className="field" id="name">
        <p className="label">Name</p>
        <p>{name || "-"}</p>
      </div>
      <div className="field" id="company">
        <p className="label">Company</p>
        <p>{company || "-"}</p>
      </div>
      <div className="field" id="cameras-disconnected">
        <p className="label">Cameras Offline</p>
        <p>{camerasOffline || "-"}</p>
      </div>
      <div className="field" id="displays-disconnected">
        <p className="label">Displays Offline</p>
        <p>{displaysOffline || "-"}</p>
      </div>
    </div>
  );
};
