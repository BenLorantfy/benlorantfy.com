import Image, { StaticImageData } from "next/image";
import heroImageBackground from "./hero-image-background.png"
import heroImageForeground from "./hero-image-foreground.png"
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

import fpAdvisor from "./fpadvisor.png"
import postmediaHub from "./postmediahub.png"
import oldAppPage from "./oldapppage.png"
import arrow from "./arrow.svg"
import { TabletFrame } from "~/components/TabletFrame";
import { Box } from "~/components/Box/Box";
import { Card } from "~/components/Card";
import { Tag } from "~/components/Tag";
import { AwardIcon } from "~/icons/AwardIcon";

import mountainVector from "./mountain-vector.svg"
import applyBoard from "./applyboard.svg"
import financialPost from "./financial-post.png"
import postmedia from "./postmedia.png"
import crystal from "./crystal.png"
import qpt from "./qpt.png"
import brose from "./brose.png"
import nestjsZod from "./nestjs-zod.svg"


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
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(20deg, rgba(30,81,141,0.9) 0%,  rgba(30,81,141,0.4) 35%, rgba(30,81,141,0.1) 40%, rgba(30,81,141,0.1) 100%)" }}></div>
        <div className={styles.textWrapper}>
          <div className={styles.entrance} style={{ animationDelay: "100ms" }}>
            <h1
              className={styles.textParallax}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                padding: 50,
                fontSize: 58,
                fontFamily: "var(--font-baloo-2)",
                color: "#1E518D",
                paddingTop: 150
              }}
            >
              Hey, I'm Ben 👋
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
              fontSize: 32,
              fontFamily: "var(--font-albert-sans)",
              fontWeight: 100
            }}
          >
            <p className={styles.entrance} style={{ opacity: 0, marginBottom: 52, width: "500px", animationDelay: "200ms" }}>
              I build <strong>good software</strong>,<br /> and <i>okay</i> wooden furniture
            </p>
            <p className={styles.entrance} style={{ opacity: 0, marginBottom: 52, width: "500px", animationDelay: "300ms" }}>
              It's easy to use, accessible, maintainable, and reliable (The software, <i>not</i> the furniture)
            </p>
            <p className={styles.entrance} style={{ opacity: 0, width: "600px", animationDelay: "400ms" }}>
              I also teach others how to do the same
            </p>
          </div>
        </div>
      </div>
      <div style={{ width: "100%", height: "1000px", margin: "auto", maxWidth: 1400, padding: "60px" }}>
        <div
          style={{
            backgroundColor: "#d9d9d985",
            backdropFilter: 'blur(10px)',
            padding: 24,
            marginLeft: 24,
            marginRight: 24,
            marginTop: 60,
            marginBottom: 120,
            borderRadius: 4,
          }}
        >
          <Flex
            direction="row"
            gap={6}
          >
            <Flex direction="column" gap={3}>
              <h2
                style={{
                  color: theme.colors.primary,
                  fontSize: 36,
                  fontFamily: "var(--font-baloo-2)",
                }}
              >
                I'm For Hire!
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-albert-sans)",
                  fontSize: 24,
                  color: theme.colors.primary,
                }}
              >
                I've been building <strong><i>good</i> software</strong> and <strong>teaching others</strong> how to do the same for <strong>9+ years</strong>.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-albert-sans)",
                  fontSize: 24,
                  color: theme.colors.primary,
                }}
              >
                I've helped organizations with technology modernization, performance problems, accessibility, localization, and more.  <strong>Send me a note</strong> and let's talk how I can help
              </p>
            </Flex>
            <Flex direction="column" gap={3}>
              <Button
                width="md"
                leadIcon={<MailIcon />}
              >
                ben@lorantfy.com
              </Button>
              <Button
                width="md"
                leadIcon={<OpenInNewIcon />}
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
        <Heading level={2} decoration="underline" mb={4} align="center">Portfolio</Heading>
        <Stack gap={15}>
          <Card bleed>
            <Stack gap={12}>
              <Stack gap={1}>
                <Image
                  src={applyBoard}
                  alt="ApplyBoard"
                  width={120}
                  height={20}
                />
                <Box>
                  <Heading level={3}>
                    Application Page <span style={{ color: theme.colors.secondary }}>Modernization</span>
                  </Heading>
                  <Stack>
                    <Flex direction="row" gap={1}>
                      <Tag tone="magic">Tech Lead</Tag>
                      <Tag>React.js</Tag>
                      <Tag>TypeScript</Tag>
                      <Tag>CSS</Tag>
                      <Tag>Accessibility</Tag>
                    </Flex>
                    <Text size="lg">
                      I led frontend development on a comprehensive UI/UX revamp of ApplyBoard's <strong>Application Page</strong>.  This is the core page in the ApplyBoard platform, and is used by tens of thousands of international students each year to facilitate the process to apply abroad.
                    </Text>
                    <Text size="lg">
                      We modernized the decade-old page, signficantly improving not only the user experience, but also accessibility, stability, performance, and maintainbility.
                    </Text>
                    <KeyAchievements 
                      achievements={[
                        "Led a team of 4-5 frontend developers",
                        "Increased enrollment rate (conversion rate) by up to 13%",
                        "Increased developer productivity by ~3-4x",
                        "Achieved WCAG AA compliance"
                      ]} 
                    />
                  </Stack>
                </Box>
              </Stack>
              <div style={{ position: "relative" }}>
                <Image
                  src={oldAppPage}
                  alt=""
                  width={1843}
                  height={1079}
                  style={{
                    width: "40%",
                    height: "auto",
                  }}
                />
                <Flex direction="row" gap={3} align="start">
                  <div style={{ width: "15%" }}>
                    <Box pl={4}>
                      <div style={{ fontFamily: "var(--font-baloo-2)", fontSize: 20, color: theme.colors.primary, fontWeight: 600 }}>
                        Before
                      </div>
                    </Box>
                    <Box pl={12} pr={2}>
                      <Image
                        src={arrow}
                        alt=""
                        style={{
                          width: "100%",
                          height: "auto"
                        }}
                      />
                    </Box>
                    <div style={{ fontFamily: "var(--font-baloo-2)", fontSize: 20, color: theme.colors.primary, fontWeight: 600, textAlign: "right" }}>
                      After
                    </div>
                  </div>
                  <TabletFrame mt={-15}>
                    <iframe
                      src="https://app.storylane.io/demo/namo1rpv8fpb?embed=inline"
                      style={{ width: "100%", height: "100%", border: "none" }}
                    ></iframe>
                  </TabletFrame>
                </Flex>
              </div>
            </Stack>
          </Card>
          <Card bleed>
            <PortfolioItem
              image={
                <div style={{ width: '50%', flexShrink: 0 }}>
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
                <Flex direction="row" gap={1}>
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
                  <Text size="lg">
                    I led frontend development on ApplyBoard's <strong>AI-powered automatic application evaluation system</strong>.  
                  </Text>
                  <Text size="lg">
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
                <Flex direction="row" gap={1}>
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
                  <Text size="lg">
                    I co-created ApplyBoard's design system, named <strong>Crystal UI</strong>.  It includes <i>70+ high-quality react components</i> that are accessible, responsive, themeable, and easy to use.  
                  </Text>
                  <Text size="lg">
                    Crystal UI is one of ApplyBoard's most successful projects.  It has been heavily integrated into the company's products, and has made the platform significantly more consistent, accessible, and maintainable.
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
              image={fpAdvisor}
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
                <Flex direction="row" gap={1}>
                  <Tag tone="magic">Consultant</Tag>
                  <Tag>React.js</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>CSS</Tag>
                  <Tag>Accessibility</Tag>
                </Flex>
              }
              description={
                <Stack>
                  <Text size="lg">
                    I helped the team behind the Financial Post modernize their public research tool called <strong>FP Advisor</strong>, Canada's leading corporate information database.
                  </Text>
                  <Text size="lg">
                    While a valuable resource, the aging website was not responsive and had accessibility concerns.  I established the technical foundation by implementing a robust frontend architecture including responsive layouts and accessible core components.
                  </Text>
                  <Text size="lg">
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
                  <Text size="lg">
                    I led frontend development on the <strong>Postmedia Hub</strong>, Postmedia's marketing analytics platform, included free of charge to any Postmedia Marketing customer.
                  </Text>
                  <Text size="lg">
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
                  <Text size="lg">
                    I created Brose's <strong>Quality Process Tool (QPT)</strong>, a web application that allowed Brose London's quality lab to track and manage their quality tests for the company's automotive components.
                  </Text>
                  <Text size="lg">
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
                  width={2823 / 10}
                  height={1057 / 10}
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
                  <Text size="lg">
                    I maintain <a href="https://github.com/BenLorantfy/nestjs-zod">nestjs-zod</a>, a library with 500k+ downloads / month on npm that integrates zod with nestjs.  
                  </Text>
                  <Text size="lg">
                    I've also contributed to other open source projects, including <a href="https://github.com/react-boilerplate/react-boilerplate/pull/2749">react-boilerplate</a>, <a href="https://github.com/reduxjs/cra-template-redux/pull/1">reduxjs/redux-templates</a>, <a href="https://github.com/radix-ui/primitives/pull/3115">radix-ui/primitives</a>, <a href="https://github.com/KnapsackPro/knapsack-pro-js/pull/104">@knapsack-pro/vitest</a>, <a href="https://github.com/DefinitelyTyped/DefinitelyTyped/pulls?q=is%3Apr+author%3ABenLorantfy+is%3Aclosed">DefinitelyTyped</a>, and more.
                  </Text>
                </Stack>
              }
            />
          </Card>
        </Stack>
        <Heading level={2} decoration="underline">Blog</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat pharetra lorem, eget rhoncus massa consectetur egestas. Proin vehicula semper ipsum, at lobortis quam efficitur sit amet. Etiam cursus malesuada nisi sagittis interdum. Cras fermentum turpis nibh, eu mollis nulla tincidunt rhoncus. Etiam sit amet suscipit ipsum, sit amet tempor justo. Sed tellus diam, lobortis sit amet orci in, maximus molestie magna. Vestibulum eget tristique ligula, porta imperdiet felis. Pellentesque eu dictum lorem, non aliquet sapien. Donec ultrices quam ex, eget tempus purus elementum eget. Nam ultricies sed odio eget aliquam.
        </p>
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
    <Flex direction="row" gap={10}>
      {isValidElement(image) ? image :
        <Image
          src={image as StaticImageData}
          alt=""
          style={{
            width: "50%",
            height: "auto",
          }}
        />
      }
      <div>
        {headerImage}
        <Heading level={3}>{title}</Heading>
        {tags}
        <Box pt={4}>
          {description}
        </Box>
      </div>
    </Flex>
  )
}

function KeyAchievements({ achievements, awards }: { achievements: string[], awards?: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {achievements.map((achievement, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <SparklesIcon />
          <Text size="lg" color="primary">{achievement}</Text>
        </li>
      ))}
      {awards && awards.map((award, index) => (
        <li key={index} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
          <AwardIcon />
          <Text size="lg" color="gold">{award}</Text>
        </li>
      ))}
    </ul>
  );
}
