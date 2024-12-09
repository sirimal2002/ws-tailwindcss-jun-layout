"use client";
import React from "react";
import { menuGroups } from "@/app/dashboard/_data/menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  ChevronDown,
  Database,
  icons,
  MoreHorizontal,
  Plus,
} from "lucide-react";
import { triggerEdgeCollapse, triggerEdgeDrawer } from "tailwindcss-jun-layout";

export default function WorkshopDashboard() {
  const [sidebar, setSidebar] = React.useState<null | Element>(null);
  React.useEffect(() => {
    setSidebar(document.querySelector(".jun-edgeSidebar"));
  }, []);
  return (
    <TooltipProvider delayDuration={0}>
      <div className="jun-layout">
        <header className="jun-header">
          <button
            className="jun-edgeDrawerTrigger"
            onClick={() => triggerEdgeDrawer()}
          >
            Toggle
          </button>
          <button
            className="jun-edgeCollapseTrigger"
            onClick={(event) => triggerEdgeCollapse({ event })}
          >
            Collapse
          </button>
          Header
        </header>
        <aside
          //   className="
          // jun-edgeSidebar
          // jun-edgeSidebar-w-[256px]
          // jun-edgeSidebar-drawer
          // sm:jun-edgeSidebar-permanent
          // sm:jun-edgeSidebar-collapsed-w-[45px]
          // sm:jun-edgeSidebar-permanent-hoverUncollapse
          // jun-edgeSidebar-permanent-autoCollapse-lg
          // "
          className="
      jun-edgeSidebar
      jun-edgeSidebar-w-[256px]
      jun-edgeSidebar-permanent
      jun-edgeSidebar-collapsed-w-[60px]
      
      jun-edgeSidebar-permanent-autoCollapse-lg
      "
        >
          <div className="jun-edgeContent">
            <div className="jun-sidebarContainer">
              {menuGroups.map((group, index) => (
                <div key={group.label} className="jun-sidebarGroup">
                  <div className="jun-sidebarGroupLabel">{group.label}</div>
                  <ul className="jun-sidebarMenu">
                    {group.items.map((menu, index) => {
                      const Icon = menu.icon;
                      return (
                        <li key={menu.label} className="jun-sidebarMenuItem">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <label className="jun-sidebarMenuButton jun-collapsibleTrigger">
                                <Icon className="jun-sidebarIcon jun-sidebarIcon-size-6" />

                                <span className="jun-sidebarText">
                                  {menu.label}
                                </span>
                                <Plus className="size-4 jun-collapsibleIcon-rotate-45" />
                                <input
                                  className="sr-only"
                                  type="checkbox"
                                  defaultChecked
                                />
                              </label>
                            </TooltipTrigger>
                            <TooltipContent
                              side="right"
                              className="jun-sidebarTooltip"
                              container={sidebar}
                            >
                              {menu.label}
                            </TooltipContent>
                          </Tooltip>

                          {!!menu.menus && (
                            <div className="jun-sidebarGroupText jun-collapsibleContent">
                              <div>
                                <ul className="jun-sidebarMenu jun-sidebarMenu-nested">
                                  {menu.menus.map((submenu) => (
                                    <li
                                      key={submenu.title}
                                      className="jun-sidebarMenuItem"
                                    >
                                      <button className="jun-sidebarMenuButton">
                                        <span className="jun-sidebarText">
                                          {submenu.title}
                                        </span>
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>
        <main className="jun-content">Content</main>
        <footer className="jun-footer">Footer</footer>
      </div>
    </TooltipProvider>
  );
}
