import {Sidebar} from "@/src/components/layout/Sidebar/Sidebar";

export default function PanelLayout({
                                        children,
                                    }: {
    children: React.ReactNode
}) {
    return (
        <div className="h-screen">

            <div className="flex flex-1 overflow-hidden">
                <Sidebar/>
                <main className="flex-1 overflow-y-auto p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}