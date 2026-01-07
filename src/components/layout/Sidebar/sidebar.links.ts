import {LayoutDashboard, ListTodoIcon, Users, LucideFileBox} from "lucide-react";

export const SIDEBAR_LINKS = [
    {
        group: "General",
        items: [
            {
                name: "dashboard",
                icon: LayoutDashboard,
                href: "/",
                disabled: false,
            },
            {
                name: "tasks",
                icon: ListTodoIcon,
                href: "/tasks",
                disabled: true,
            },
            {
                name: "tickets",
                icon: LucideFileBox,
                href: "/tickets",
                disabled: true,
            },
            {
                name: "users",
                icon: Users,
                href: "/users",
                disabled: true,
            }
        ]
    }
]