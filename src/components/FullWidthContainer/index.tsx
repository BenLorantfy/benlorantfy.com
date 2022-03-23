import { ReactNode } from "react";

/**
 * @see https://gomakethings.com/how-to-break-an-image-out-of-its-parent-container-with-css/
 */
export function FullWidthContainer(props: { children: ReactNode }) {
    return (
        <div 
            style={{ 
                left: "50%",
                marginLeft: "-50vw",
                marginRight: "-50vw",
                maxWidth: "100vw",
                position: "relative",
                right: "50%",
                width: "100vw"
            }}
            className="pl-4 pr-4"
         >
            {props.children}
        </div>
    )
}
