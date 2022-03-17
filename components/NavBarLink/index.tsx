import Link from "next/link";
import { useRouter } from "next/router";
import { getPaddingClassesFromCodes, PaddingCode } from "../../utils";

export function NavBarLink(props: { to: string, children: React.ReactNode, pl?: PaddingCode, pr?: PaddingCode, pt?: PaddingCode, pb?: PaddingCode }) {
    const paddingClasses = getPaddingClassesFromCodes({
        pl: props.pl,
        pr: props.pr,
        pt: props.pt,
        pb: props.pb
    });

    const router = useRouter();
    const isActive = router.pathname === props.to;
    
    const isHashLink = props.to.startsWith("/#");

    if (isHashLink) {
        return (
            <Link 
                href={props.to}
            >
                <a className={`inline-block after:relative after:h-px after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0 after:transition-all after:bg-black after:block ${paddingClasses}`}>
                    {props.children}
                </a>
            </Link>
        )        
    }

    return (
        <Link 
            href={props.to}
        >
            <a className={isActive ? `inline-block after:relative after:h-px after:w-full after:left-0 after:bg-black after:block ${paddingClasses}` : `inline-block after:relative after:h-px after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0 after:transition-all after:bg-black after:block ${paddingClasses}`}>
                {props.children}
            </a>
        </Link>
    )
}