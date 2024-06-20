import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { BiMenuAltLeft } from "react-icons/bi";

import Sidebar from '@/components/Sidebar';

const SheetNavbar = () => {
    return (
        <Sheet>
            <SheetTrigger><BiMenuAltLeft /></SheetTrigger>
            <SheetContent side={"left"} className="p-0">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}

export default SheetNavbar;