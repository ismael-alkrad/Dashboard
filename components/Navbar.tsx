import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import ToggleDarkMode from "@/components/ToggleDarkMode"
import SheetNavbar from "@/components/SheetNavbar"

const Navbar = () => {
    return (
        <div className="bg-primary text-white dark:bg-slate-700 px-5 py-2 flex justify-between items-center">
            <div className="block md:hidden">
                <SheetNavbar />
            </div>
            <Link href='/' className="hidden md:block">
                <h1>Navbar</h1>
            </Link>
            <div className="flex items-center">
                <ToggleDarkMode />
                <DropdownMenu>
                    <DropdownMenuTrigger className="focus:outline-none">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                            <AvatarFallback className="text-black">IA</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem><Link href='/profile'>Profile</Link></DropdownMenuItem>
                        <DropdownMenuItem><Link href='/auth'>Logout</Link></DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
}

export default Navbar;