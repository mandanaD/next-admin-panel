import {Biohazard} from "lucide-react";
import {SidebarItem} from "@/src/components/layout/Sidebar/SidebarItem";
import {SIDEBAR_LINKS} from "@/src/components/layout/Sidebar/sidebar.links";

export const Sidebar = () => {
    return (
        <div className={"md:block hidden"}>
            <div
                data-slot={"sidebar"}
                className={"border-r border-border md:static fixed inset-y-0 z-10 hidden h-svh w-64 transition-[inset-inline,width] duration-200 ease-linear md:flex start-0 p-2"}>
                <div
                    className={"flex h-full w-full flex-col bg-background gap-2"}
                    data-slot={"sidebar-content"}
                >
                    <div
                        data-slot={"header"}
                        className={"flex flex-col gap-2 p-2"}
                    >
                        <div
                            className={" flex w-full items-center gap-2 overflow-hidden rounded-md p-2 h-12 text-sm"}>
                            <div
                                className={"flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-black"}
                            >
                                <Biohazard size={20}/>
                            </div>
                            <div className={"grid flex-1 text-start text-sm leading-tight"}>
                                  <span className={"truncate font-semibold"}>
                                      Next Admin
                                  </span>
                                <span className={"truncate text-xs"}>
                                      NextJs + Tailwind
                                  </span>
                            </div>
                        </div>
                    </div>
                    <div className={"flex min-h-0 flex-1 flex-col gap-2 overflow-auto"}>
                        {/*group*/}
                        {
                            SIDEBAR_LINKS.map((item, index) => (
                                <div
                                    key={index}
                                    className={"relative flex w-full min-w-0 flex-col p-2"}>
                                    <div
                                        className={"flex h-8 px-2 text-xs font-medium text-foreground/70"}
                                    >
                                        {item.group}
                                    </div>
                                    <ul className={"flex w-full min-w-0 flex-col gap-1"}>
                                        {item.items.map((link, index) => {
                                            const Icon = link.icon
                                            return (
                                                <li key={link.name + "-" + index}>
                                                    <SidebarItem icon={<Icon size={16}/>} href={link.href}
                                                                 label={link.name}/>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}