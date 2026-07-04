"use client";

import { useState } from "react";
import { GOV_CLIENTS, CORP_CLIENTS } from "@/data/site";
import { Hospital } from "./icons";

export default function ClientsTabs() {
  const [tab, setTab] = useState<"gov" | "corp">("gov");
  const list = tab === "gov" ? GOV_CLIENTS : CORP_CLIENTS;

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Client categories">
        <button
          className={`tab${tab === "gov" ? " active" : ""}`}
          role="tab"
          aria-selected={tab === "gov"}
          onClick={() => setTab("gov")}
        >
          Government Hospitals
        </button>
        <button
          className={`tab${tab === "corp" ? " active" : ""}`}
          role="tab"
          aria-selected={tab === "corp"}
          onClick={() => setTab("corp")}
        >
          Corporate Hospitals
        </button>
      </div>
      <ul className="client-grid">
        {list.map((name) => (
          <li className="client" key={name}>
            <Hospital /> {name}
          </li>
        ))}
      </ul>
    </>
  );
}
