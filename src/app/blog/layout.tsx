import "./layout.css"
import navBarBackground from '~/assets/nav-bar-background.png'
import Image from "next/image"

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
              <h1 className="text-white text-2xl drop-shadow-lg">Ben Lorantfy's Blog</h1>
            </div>
          </div>
          <Image src={navBarBackground} height={250} width={2668} style={{ objectFit: "cover", height: "80px" }} alt="" className="w-full" />
        </div>
        <div className="flex items-center justify-center">
          <div className="container max-w-3xl py-10 markdown">
            {children}
          </div>
        </div>
      </div>
    )
  }