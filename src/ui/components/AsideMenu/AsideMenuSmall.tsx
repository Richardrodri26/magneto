"use client";

import { getRoutesByTypeOfUser } from "@/domain/routes.config";
import { useGeneral } from "@/stores";
import { Menu } from "lucide-react";
import { SmallMenuItem } from "./SmallMenuItem";

export const AsideMenuSmall = () => {
  const setIsMenuOpen = useGeneral((state) => state.setIsOpenMenu);
  const firstTaskInbox = useGeneral((state) => state.firstTaskInbox);
  const navRoutesByUserType = getRoutesByTypeOfUser();

  return (
    <>
      <div className="w-[100cwi] grow shrink basis-0 px-2 py-4 rounded-lg flex-col justify-center items-center gap-4 flex">
        <Menu
          className="w-6 h-6 cursor-pointer"
          onClick={() => setIsMenuOpen(true)}
        />

        <div className="h-px w-full rotate-180 border border-neutral-700"></div>

        {Boolean(firstTaskInbox) ? (
          <SmallMenuItem
            menuOption={{
              data: {},
              title: firstTaskInbox?.title || "",
              url: firstTaskInbox?.url || "",
              icon: firstTaskInbox?.icon,
              searchTag: firstTaskInbox?.searchTag,
            }}
          />
        ) : (
          <SmallMenuItem
            menuOption={{
              data: {},
              title: "Bandeja de Tareas",
              url: "/dashboard/taskInbox",
              icon: "Inbox",
              // searchTag: ""
            }}
          />
        )}

        {navRoutesByUserType?.map((route) => (
          <SmallMenuItem
            key={route.title}
            menuOption={{
              data: {},
              title: route.title,
              url: route.url,
              icon: route?.icon,
              children: route?.children,
            }}
          />
        ))}
      </div>
    </>
  );
};
