"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

export const SidebarItem = ({
                                label = "",
                                href = "",
                                icon
                            }: {
    label: string,
    href: string,
    icon: React.ReactNode
}) => {
    const pathname = usePathname()
    const isActive =
        pathname === href || pathname.startsWith(href + "/");

    return (
        <Link
            href={href}
            data-active={isActive}
            className={`capitalize flex w-full items-center gap-2 rounded-md p-2 h-8 text-sm transition-all hover:bg-accent hover:text-accent-foreground ${isActive &&
            "bg-accent font-medium text-accent-foreground"}`}
        >
            {icon}
            {label}
        </Link>
    )
}
