"use client";
import { Menu } from "lucide-react";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";

export const TriggerMobileSidebar = () => (
  <button className="jun-edgeDrawerTrigger" onClick={() => triggerEdgeDrawer()}>
    <Menu className="h-5 w-5" />
  </button>
);

export const RailCollapse = () => (
  <button
    className="jun-sidebarRail jun-edgeCollapseTrigger"
    aria-label="Toggle Sidebar"
    tabIndex={-1}
    onClick={(event) => triggerEdgeCollapse({ event })}
    title="Toggle Sidebar"
  />
);
