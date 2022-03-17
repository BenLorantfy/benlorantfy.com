import { getPaddingClassesFromCodes, PaddingCode } from "../../utils";

export function ExternalLink(props: { href: string, children: React.ReactNode, pl?: PaddingCode, pr?: PaddingCode, pt?: PaddingCode, pb?: PaddingCode }) {
    const paddingClasses = getPaddingClassesFromCodes({
        pl: props.pl,
        pr: props.pr,
        pt: props.pt,
        pb: props.pb
    });
    
    return (
        <a 
            className={`inline-block after:relative after:h-px after:left-1/2 after:w-0 hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0 after:transition-all after:bg-black after:block ${paddingClasses}`}
            href={props.href}
            rel="noopener"
        >
            {props.children}
        </a>
    );
}
