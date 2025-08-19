import "./layout.css"
import navBarBackground from '~/assets/nav-bar-background.png'
import Image from "next/image"
import Link from "next/link"

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="container">
              <Link href="/" className="inline-block h-[60px] leading-[60px] text-white text-xl drop-shadow-lg font-bold hover:text-blue-200 focus:text-blue-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded">
                Ben Lorantfy&apos;s Blog
              </Link>
            </div>
          </div>
          <Image src={navBarBackground} height={250} width={2668} style={{ objectFit: "cover", height: "60px" }} alt="" className="w-full" />
        </div>
        <div className="flex items-center justify-center">
          <div className="container max-w-3xl py-10 markdown">
            {children}
          </div>
        </div>
      </div>
    )
  }