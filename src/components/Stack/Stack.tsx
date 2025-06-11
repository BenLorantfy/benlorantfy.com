import { Flex } from "~/components/Flex";
import { SpacingToken } from "~/theme";

export function Stack({ 
    children,
    gap = 3 
}: { 
    children: React.ReactNode;
    gap?: SpacingToken;
}) {
    return (
        <Flex direction="column" gap={gap}>
            {children}
        </Flex>
    )
}