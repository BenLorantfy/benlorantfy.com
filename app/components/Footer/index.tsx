import { NavLink } from "react-router-dom";
import { ExternalLink } from "../ExternalLink";
import { Logo } from "../Logo";
import { NavBarLink } from "../NavBarLink";

export function Footer() {
    return (
        <footer className="bg-neutral-100 mt-32">
            <div className="pl-8 pr-8 sm:pl-16 sm:pr-16 lg:pl-32 lg:pr-32 xl:pl-44 xl:pr-44 pt-16 pb-16 md:pt-32 md:pb-32 flex flex-col sm:flex-row">
                <ul aria-label="Site pages" className="flex-1">
                    <li>
                        <NavLink className="inline-block hover:scale-125 focus:scale-125 transition-all" to="/" aria-label="Home">
                            <Logo size="lg"/>
                        </NavLink>
                    </li>
                    <li className="mt-4">
                        <NavBarLink to="/about">About</NavBarLink>
                    </li>
                    <li className="mt-4">
                        <NavBarLink to="/#blog">Blog</NavBarLink>
                    </li>
                    <li className="mt-4">
                        <NavBarLink to="/#portfolio">Portfolio</NavBarLink>
                    </li>
                </ul>
                <div className="flex-1">
                    <h2 id="social-links" className="font-bold mt-8 md:mt-0">Social Links</h2>
                    <ul aria-label="Social links" aria-labelledby="social-links">
                        <ul aria-label="Social Media Links">
                            <li className="mt-4">
                                <ExternalLink href="https://twitter.com/benlorantfy">Twitter</ExternalLink>
                            </li>
                            <li className="mt-4">
                                <ExternalLink href="https://www.linkedin.com/in/ben-lorantfy/">LinkedIn</ExternalLink>
                            </li>
                            <li className="mt-4">
                                <ExternalLink href="https://github.com/BenLorantfy">GitHub</ExternalLink>
                            </li>
                        </ul>
                    </ul>
                </div>
                <div className="flex-1 mt-16 md:mt-0">
                    <div role="text">Made with <span className="sr-only">love</span><span aria-hidden>❤️</span> in Kitchener, <span aria-hidden>ON</span><span className="sr-only">Ontario</span></div>
                    <div role="text" className="mt-4">All rights reserved <span className="sr-only">. Copyright</span><span aria-hidden>©</span> Ben Lorantfy {new Date().getFullYear()}</div>
                </div>
     
            </div>
        </footer>
    )
}
