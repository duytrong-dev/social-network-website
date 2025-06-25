import FloatingCreateButton from "@/components/FloatingCreateButton";
// import FocusOverlay from "@/components/FocusOverlay";
import MainFeed from "@/components/MainFeed";
import MobileBottomNav from "@/components/MobileBottomNav";
import Navbar from "@/components/Navbar";
import SidebarLeft from "@/components/SidebarLeft";
import SidebarRight from "@/components/SidebarRight";

export default function Home() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <Navbar />
            <div className="flex flex-col md:flex-row">
                <SidebarLeft />
                <MainFeed />
                <SidebarRight />
            </div>
            <FloatingCreateButton />
            {/* <FocusOverlay /> */}
            <MobileBottomNav />
        </div>
    );
}
