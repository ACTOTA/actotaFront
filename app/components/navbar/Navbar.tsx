'use client';

import Container from "../Container";
import Activities from "../Activities";
import Logo from "../Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface NavbarProps {
    currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
    currentUser
}) => {
    console.log("Navbar currentUser:    ", currentUser);
    return (
        <div className="fixed h-28 z-10 w-full bg-none text-white">
            <div
                className="py-3 "
            >
                <Container>
                    <div
                        className="flex flex-row items-center justify-between md:gap-0"
                    >
                        <Logo />
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>

        </div>
    );
}

export default Navbar;
