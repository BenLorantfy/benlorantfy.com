import React from "react";
import { Link, NavLink } from "remix";
import { Logo } from "../Logo";
import { NavBarLink } from "../NavBarLink";

export function Nav() {
    return (
        <nav className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 pt-1 pb-1">

            <ul className="flex items-center justify-center md:justify-start">
                <li className="-ml-2">
                    <NavLink className="inline-block hover:scale-125 focus:scale-125 transition-all pl-2 pr-2 pt-7 pb-7" to="/" aria-label="Home">
                        <Logo />
                    </NavLink>
                </li>
                <li className="ml-2">
                    <NavBarLink pl={4} pr={4} pt={7} pb={7} to="/about">About</NavBarLink>
                </li>
                <li className="ml-2">
                    <NavBarLink pl={4} pr={4} pt={7} pb={7} to="/#blog">Blog</NavBarLink>
                </li>
                <li className="ml-2">
                    <NavBarLink pl={4} pr={4} pt={7} pb={7} to="/#portfolio">Portfolio</NavBarLink>
                </li>
                {/* <li className="ml-2">
                    <NavBarLink pl={4} pr={4} pt={7} pb={7} to="/#consulting">Consulting</NavBarLink>
                </li> */}
            </ul>
        </nav>
    )
}
