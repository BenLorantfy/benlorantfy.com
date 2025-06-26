import "./page.css";
import Image, { StaticImageData } from "next/image";
import heroImageBackground from "../assets/hero-image-background.png"
import heroImageForeground from "../assets/hero-image-foreground.png"
import styles from "./page.module.css"
import Heading from "~/components/Heading/Heading";
import { theme } from "~/theme";
import { Button } from "~/components/Button";
import { Flex } from "~/components/Flex";
import { MailIcon } from "~/icons/MailIcon";
import { OpenInNewIcon } from "~/icons/OpenInNewIcon";
import { SparklesIcon } from "~/icons/SparklesIcon";
import { Text } from "~/components/Text";
import { Stack } from "~/components/Stack";
import { isValidElement } from "react";

import legacyFpAdvisor from "../assets/legacy-fp-advisor.png"
import fpAdvisor from "../assets/fp-advisor.png"
import postmediaHub from "../assets/postmediahub.png"
import oldAppPage from "../assets/oldapppage.png"
import { TabletFrame } from "~/components/TabletFrame";
import { Box } from "~/components/Box/Box";
import { Card } from "~/components/Card";
import { Tag } from "~/components/Tag";
import { AwardIcon } from "~/icons/AwardIcon";

import mountainVector from "../assets/mountain-vector.svg"
import applyBoard from "../assets/applyboard.svg"
import financialPost from "../assets/financial-post.png"
import postmedia from "../assets/postmedia.png"
import crystal from "../assets/crystal.png"
import qpt from "../assets/qpt.png"
import brose from "../assets/brose.png"
import nestjsZod from "../assets/nestjs-zod.svg"
import { createResponsiveStyles } from "~/utils/createResponsiveStyles";
import { BeforeAndAfter } from "~/components/BeforeAndAfter";


export default function Home() {
  return (
    <>
      <Image
        src={mountainVector}
        alt=""
        width={1000}
        height={1000}
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "80%",
          zIndex: -1,
          objectFit: "contain",
          objectPosition: "bottom left"
        }}
      />
      <div style={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100vh",
        backgroundColor: "#95bbea"
      }}>
        <Image
          src={heroImageBackground}
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "left bottom" }}
        />
        <div className={`${styles.foregroundWrapper} ${styles.entrance}`}>
          <div className={styles.foregroundImage} style={{ position: "absolute", bottom: 0, right: 0, width: "100%", height: "100%" }}>
            <Image
              src={heroImageForeground}
              alt=""
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div style={createResponsiveStyles({ 
          position: "absolute", 
          bottom: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
        },{
          background: {
            xs: "linear-gradient(20deg, rgba(30,81,141,0.9) 0%,  rgba(30,81,141,0.4) 40%, rgba(30,81,141,0.1) 100%)",
            sm: "linear-gradient(20deg, rgba(30,81,141,0.9) 0%,  rgba(30,81,141,0.4) 35%, rgba(30,81,141,0.1) 40%, rgba(30,81,141,0.1) 100%)",
          }
        })} />
        <div className={styles.textWrapper}>
          <div className={styles.entrance} style={{ animationDelay: "100ms" }}>
            <h1
              className={styles.textParallax}
              style={createResponsiveStyles({
                position: "absolute",
                top: 0,
                left: 0,
                padding: 50,
                fontFamily: "var(--font-baloo-2)",
                color: "#1E518D",
                paddingTop: 150
              }, {
                paddingTop: {
                  xs: 50,
                  sm: 150,
                },
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem"
                }
              })}
            >
              Hey, I&apos;m Ben 👋
            </h1>
          </div>
          <div
            className={styles.textParallax}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: 50,
              color: "white",
              fontSize: "2rem",
              fontFamily: "var(--font-albert-sans)",
              fontWeight: 100,
              width: "100%"
            }}
          >
            <p className={styles.entrance} style={{ opacity: 0, marginBottom: 52, width: "500px", maxWidth: "100%", animationDelay: "200ms" }}>
              I build <strong>good software</strong>,<br /> and <i>okay</i> wooden furniture
            </p>
            <p className={styles.entrance} style={{ opacity: 0, marginBottom: 52, width: "500px", maxWidth: "100%", animationDelay: "300ms" }}>
              It&apos;s easy to use, accessible, maintainable, and reliable (The software, <i>not</i> the furniture)
            </p>
            <p className={styles.entrance} style={{ opacity: 0, width: "600px", maxWidth: "100%", animationDelay: "400ms" }}>
              I also teach others how to do the same
            </p>
          </div>
        </div>
      </div>
      <div style={createResponsiveStyles({ 
        width: "100%", height: "1000px", margin: "auto", maxWidth: 1400 }, {
          padding: {
            xs: "32px",
            sm: "60px"
          }
        })}>
        <div
          style={createResponsiveStyles({
            backgroundColor: "#d9d9d985",
            backdropFilter: 'blur(10px)',
            padding: 24,
            marginTop: 60,
            marginBottom: 120,
            borderRadius: 4,
          }, {
            marginInline: {
              xs: -16,
              sm: 24,
            }
          })}
        >
          <Flex
            direction={{ xs: "column", md: "row" }}
            gap={4}
          >
            <Flex direction="column" gap={1}>
              <h2
                style={{
                  color: theme.colors.primary,
                  fontSize: 36,
                  fontFamily: "var(--font-baloo-2)",
                }}
              >
                I&apos;m For Hire!
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-albert-sans)",
                  fontSize: 24,
                  color: theme.colors.primary,
                  marginBottom: '16px'
                }}
              >
                I&apos;ve been building <strong><i>good</i> software</strong> and <strong>teaching others</strong> how to do the same for <strong>9+ years</strong>.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-albert-sans)",
                  fontSize: 24,
                  color: theme.colors.primary,
                }}
              >
                I&apos;ve helped organizations with technology modernization, performance problems, accessibility, localization, and more.  <strong>Send me a note</strong> and let&apos;s talk how I can help
              </p>
            </Flex>
            <Flex direction="column" gap={2}>
              <Button
                width="md"
                leadIcon={<MailIcon />}
                as="a"
                href="mailto:ben@lorantfy.com"
              >
                ben@lorantfy.com
              </Button>
              <Button
                width="md"
                leadIcon={<OpenInNewIcon />}
                as="a"
                href="/resume"
              >
                Resumé
              </Button>
            </Flex>
          </Flex>
        </div>

        {/* <Heading level={2} decoration="underline">About</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat pharetra lorem, eget rhoncus massa consectetur egestas. Proin vehicula semper ipsum, at lobortis quam efficitur sit amet. Etiam cursus malesuada nisi sagittis interdum. Cras fermentum turpis nibh, eu mollis nulla tincidunt rhoncus. Etiam sit amet suscipit ipsum, sit amet tempor justo. Sed tellus diam, lobortis sit amet orci in, maximus molestie magna. Vestibulum eget tristique ligula, porta imperdiet felis. Pellentesque eu dictum lorem, non aliquet sapien. Donec ultrices quam ex, eget tempus purus elementum eget. Nam ultricies sed odio eget aliquam.
        </p> */}
        <Heading level={2} decoration="underline" mb={12} align="center" size="5xl">Portfolio</Heading>
        <Stack gap={4}>
          <Card bleed>
            <Stack gap={3}>
              <Stack gap={1}>
                <Image
                  src={applyBoard}
                  alt="ApplyBoard"
                  width={120}
                  height={20}
                />
                <Box>
                  <Heading level={3} size="4xl" mb={1}>
                    Application Page <span style={{ color: theme.colors.secondary }}>Modernization</span>
                  </Heading>
                  <Stack>
                    <Flex direction="row" gap={1} wrap>
                      <Tag tone="magic">Tech Lead</Tag>
                      <Tag>React.js</Tag>
                      <Tag>TypeScript</Tag>
                      <Tag>CSS</Tag>
                      <Tag>Accessibility</Tag>
                    </Flex>
                    <Text size="2xl">
                      I led frontend development on a comprehensive UI/UX revamp of ApplyBoard&apos;s <strong>Application Page</strong>.  This is the core page in the ApplyBoard platform, and is used by tens of thousands of international students each year to facilitate the process to apply abroad.
                    </Text>
                    <Text size="2xl">
                      We modernized the decade-old page, signficantly improving not only the user experience, but also accessibility, stability, performance, and maintainbility.
                    </Text>
                    <KeyAchievements 
                      achievements={[
                        "Led a team of 3-4 frontend developers",
                        "Increased enrollment rate (conversion rate) by 13%",
                        "Increased developer productivity by ~3-4x",
                        "Achieved WCAG AA compliance"
                      ]} 
                    />
                  </Stack>
                </Box>
              </Stack>
              <BeforeAndAfter 
                before={
                  <Image
                    src={oldAppPage}
                    alt=""
                    width={1843}
                    height={1079}
                    style={{
                      width: "100%",
                      height: "auto"
                    }}
                  />
                }
                after={
                  <TabletFrame>
                    <iframe
                      src="https://app.storylane.io/demo/namo1rpv8fpb?embed=inline"
                      style={{ width: "100%", height: "100%", border: "none" }}
                    ></iframe>
                  </TabletFrame>
                }
              />
            </Stack>
          </Card>
          <Card bleed>
            <PortfolioItem
              image={
                <div style={{ width: '100%', flexShrink: 0, aspectRatio: "16/9" }}>
                  <TabletFrame>
                    <iframe
                      src="https://app.storylane.io/demo/2xefgijmup6t?embed=inline"
                      style={{ width: "100%", height: "100%", border: "none" }}
                    ></iframe>
                  </TabletFrame>
                </div>
              }
              headerImage={
                <Image
                  src={applyBoard}
                  alt="ApplyBoard"
                  width={120}
                  height={20}
                />
              }
              title={<>
                Automated Application Processing
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Tech Lead</Tag>
                  <Tag>React.js</Tag>
                  <Tag>ReactFlow</Tag>
                  <Tag>form.io</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>CSS</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I led frontend development on ApplyBoard&apos;s <strong>AI-powered automatic application evaluation system</strong>.  
                  </Text>
                  <Text size="2xl">
                    This included building a dynamic form rendering engine, a custom workflow builder, and AI feedback features.
                  </Text>
                  <KeyAchievements 
                    achievements={[
                      "Reduced average application processing time by 50%",
                    ]} 
                  />
                </Stack>
              }
            />
          </Card>
          <Card bleed>
            <PortfolioItem
              image={crystal}
              headerImage={
                <Image
                  src={applyBoard}
                  alt="ApplyBoard"
                  width={120}
                  height={20}
                />
              }
              title={<>
                Crystal <span style={{ color: theme.colors.secondary }}>Design System</span>
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Co-creator</Tag>
                  <Tag tone="magic">Maintainer</Tag>
                  <Tag>React.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Accessibility</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I co-created ApplyBoard&apos;s design system, named <strong>Crystal UI</strong>.  It includes <i>70+ high-quality react components</i> that are accessible, responsive, themeable, and easy to use.  
                  </Text>
                  <Text size="2xl">
                    Crystal UI is one of ApplyBoard&apos;s most successful projects.  It has been heavily integrated into the company&apos;s products, and has made the platform significantly more consistent, accessible, and maintainable.
                  </Text>
                  <KeyAchievements 
                    achievements={[
                      "Increased developer productivity by ~2-3x",
                      "Improved WCAG AA compliance by ~80%"
                    ]} 
                  />
                </Stack>
              }
            />
          </Card>
          <Card bleed>
            <PortfolioItem
              image={
                <BeforeAndAfter 
                  before={
                    <Image
                      src={legacyFpAdvisor}
                      alt=""
                      width={7164}
                      height={4044}
                      style={{
                        width: "100%",
                        height: "auto"
                      }}
                    />
                  }
                  after={
                    <Image
                      src={fpAdvisor}
                      alt=""
                      width={7164}
                      height={4044}
                      style={{
                        width: "100%",
                        height: "auto"
                      }}
                    />
                  }
                />
              }
              headerImage={
                <Image
                  src={financialPost}
                  alt=""
                  width={135}
                  height={20}
                />
              }
              title={<>
                FP Advisor <span style={{ color: theme.colors.secondary }}>Modernization</span>
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Consultant</Tag>
                  <Tag>React.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Accessibility</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I helped the team behind the Financial Post modernize their public research tool called <strong>FP Advisor</strong>, Canada&apos;s leading corporate information database.
                  </Text>
                  <Text size="2xl">
                    While a valuable resource, the aging website was not responsive and had accessibility concerns.  I established the technical foundation by implementing a robust frontend architecture including responsive layouts and accessible core components.
                  </Text>
                  <Text size="2xl">
                    The redesigned site delivers a modern experience across all devices while following accessibility best practices
                  </Text>
                </Stack>
              }
            />
          </Card>
          <Card bleed>
            <PortfolioItem
              image={postmediaHub}
              headerImage={
                <Image
                  src={postmedia}
                  alt=""
                  width={128}
                  height={20}
                />
              }
              title={<>
                Postmedia Hub
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Tech Lead</Tag>
                  <Tag>React.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Node.js</Tag>
                  <Tag>MongoDB</Tag>
                  <Tag>Accessibility</Tag>
                  <Tag>Localization</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I led frontend development on the <strong>Postmedia Hub</strong>, Postmedia&apos;s marketing analytics platform, included free of charge to any Postmedia Marketing customer.
                  </Text>
                  <Text size="2xl">
                    This included leading major projects to add new marketing integrations and other product features.  I also oversaw efforts to improve our accessibility, mobile friendliness, and localization.
                  </Text>
                  <KeyAchievements 
                    achievements={[
                      "Led a team of 3-4 frontend developers"
                    ]} 
                  />
                </Stack>
              }
            />
          </Card>
          <Card bleed>
            <PortfolioItem
              image={qpt}
              headerImage={
                <Image
                  src={brose}
                  alt=""
                  width={90}
                  height={20}
                />
              }
              title={<>
                Quality Process Tool
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Co-Op</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>jQuery</Tag>
                  <Tag>C#</Tag>
                  <Tag>MSSQL</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I created Brose&apos;s <strong>Quality Process Tool (QPT)</strong>, a web application that allowed Brose London&apos;s quality lab to track and manage their quality tests for the company&apos;s automotive components.
                  </Text>
                  <Text size="2xl">
                    As the only developer on the project, I was responsible for the entire product, including the requirement gathering, UX design, frontend, backend, database design, and infrastructure.
                  </Text>
                  <KeyAchievements 
                    achievements={[
                      "Saved the plant an estimated $100k/year in increased efficiency",
                    ]}
                    awards={[
                      "Co-Op Student of the Year Award"
                    ]}
                  />
                </Stack>
              }
            />
          </Card>
          <Card bleed>
            <PortfolioItem
              image={(
                <Image
                  src={nestjsZod}
                  style={{
                    width: "100%",
                    height: "auto",
                    aspectRatio: "16 / 9",
                  }}
                  alt="nestjs-zod"
                />
              )}
              title={<>
                nestjs-zod <span style={{ color: theme.colors.secondary }}>& other open source</span>
              </>}
              tags={
                <Flex direction="row" gap={1} wrap>
                  <Tag tone="magic">Maintainer</Tag>
                  <Tag>nestjs</Tag>
                  <Tag>zod</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="2xl">
                    I maintain <a href="https://github.com/BenLorantfy/nestjs-zod">nestjs-zod</a>, a library with 500k+ downloads / month on npm that integrates zod with nestjs.  
                  </Text>
                  <Text size="2xl">
                    I&apos;ve also contributed to other open source projects, including <a href="https://github.com/react-boilerplate/react-boilerplate/pull/2749">react-boilerplate</a>, <a href="https://github.com/reduxjs/cra-template-redux/pull/1">reduxjs/redux-templates</a>, <a href="https://github.com/radix-ui/primitives/pull/3115">radix-ui/primitives</a>, <a href="https://github.com/KnapsackPro/knapsack-pro-js/pull/104">@knapsack-pro/vitest</a>, <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3ABenLorantfy+is%3Aclosed">DefinitelyTyped</a>, and more.
                  </Text>
                </Stack>
              }
            />
          </Card>
        </Stack>
        {/* <Heading level={2} decoration="underline">Blog</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat pharetra lorem, eget rhoncus massa consectetur egestas. Proin vehicula semper ipsum, at lobortis quam efficitur sit amet. Etiam cursus malesuada nisi sagittis interdum. Cras fermentum turpis nibh, eu mollis nulla tincidunt rhoncus. Etiam sit amet suscipit ipsum, sit amet tempor justo. Sed tellus diam, lobortis sit amet orci in, maximus molestie magna. Vestibulum eget tristique ligula, porta imperdiet felis. Pellentesque eu dictum lorem, non aliquet sapien. Donec ultrices quam ex, eget tempus purus elementum eget. Nam ultricies sed odio eget aliquam.
        </p> */}
      </div>
    </>
  );
}

function PortfolioItem({
  image,
  headerImage,
  title,
  description,
  tags,
}: {
  image: StaticImageData | React.ReactNode;
  headerImage?: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  tags?: React.ReactNode;
}) {
  return (
    <Flex direction={{ xs: "column", md: "row" }} gap={5} align="start">
      <div>
        {headerImage}
        <Heading size="4xl" level={3} mb={1}>{title}</Heading>
        {tags}
        <Box pt={4}>
          {description}
        </Box>
      </div>
      <div
        style={createResponsiveStyles({
          height: "auto",
          flexShrink: 0,
          flexGrow: 0,
        },{
          width: {
            xs: "100%",
            md: "50%"
          },
        })}
      >
        {isValidElement(image) ? image :
          <Image
            src={image as StaticImageData}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        }
      </div>
    </Flex>
  )
}

function KeyAchievements({ achievements, awards }: { achievements: string[], awards?: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, marginTop: theme.spacing[4] }}>
      {achievements.map((achievement, index) => (
        <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <div style={{ flexGrow: 0, flexShrink: 0, marginTop: 6 }}>
            <SparklesIcon />
          </div>
          <Text size="2xl" color="primary">{achievement}</Text>
        </li>
      ))}
      {awards && awards.map((award, index) => (
        <li key={index} style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 12 }}>
          <AwardIcon />
          <Text size="2xl" color="gold">{award}</Text>
        </li>
      ))}
    </ul>
  );
}
