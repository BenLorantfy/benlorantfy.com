import { Flex } from "~/components/Flex";
import { Box } from "~/components/Box/Box";
import { theme } from "~/theme";
import { createResponsiveStyles } from "~/utils/createResponsiveStyles";
import Image from "next/image";
import arrow from "../../assets/arrow.svg";
import upArrow from "../../assets/up-arrow.svg"

export function BeforeAndAfter({ before, after }: { before: React.ReactNode, after: React.ReactNode }) {
    return (
        <div style={{ position: "relative" }}>
            <Flex
                direction="column"
                gap={{
                    xs: 4,
                    md: 0
                }}
                align={{
                    xs: "center",
                    md: "start"
                }}
                width="100%"
            >
                <div
                    style={createResponsiveStyles({
                        width: "40%",
                        height: "auto",
                    }, {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    })}
                >
                    {before}
                </div>
                <Flex
                    direction="row"
                    gap={3}
                    align="start"
                    width={{
                        xs: "calc(100% + 54px)",
                        md: "100%"
                    }}
                >
                    <div style={createResponsiveStyles({ width: "15%" }, {
                        display: {
                            xs: "none",
                            md: "block"
                        }
                    })}>
                        <div style={createResponsiveStyles({ fontFamily: "var(--font-baloo-2)", fontSize: 20, color: theme.colors.primary, fontWeight: 600 }, {
                            fontSize: {
                                xs: 16,
                                lg: 20
                            }
                        })}>
                            Before
                        </div>
                        <Box pl={4} pr={1}>
                            <Image
                                src={arrow}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "auto"
                                }}
                            />
                        </Box>
                        <div style={createResponsiveStyles({ fontFamily: "var(--font-baloo-2)", fontSize: 20, color: theme.colors.primary, fontWeight: 600, textAlign: "right", marginRight: theme.spacing[1] }, {
                            fontSize: {
                                xs: 16,
                                lg: 20
                            }
                        })}>
                            After
                        </div>
                    </div>
                    <div
                        style={createResponsiveStyles({
                            width: '100%'
                        }, {
                            marginTop: {
                                xs: 0,
                                md: theme.spacing[-18]
                            }
                        })}
                    >
                        {after}
                    </div>
                </Flex>
                <Image
                    src={upArrow}
                    alt=""
                    style={createResponsiveStyles({
                        width: "10%",
                        height: "auto"
                    }, {
                        display: {
                            xs: "block",
                            md: "none"
                        }
                    })}
                />
                <div
                    style={createResponsiveStyles({
                        width: "80%",
                        height: "auto",
                    }, {
                        display: {
                            xs: "block",
                            md: "none"
                        }
                    })}
                >
                    {before}
                </div>
            </Flex>
        </div>
    )
}