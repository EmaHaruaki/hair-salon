import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react"
import { MenuTable } from "@/components/menu-table"
import { Navigation } from "@/components/navigation"
import { StaffSection } from "@/components/staff-section"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        <Image
          src="/top2.jpg?height=1080&width=1920"
          alt="Salon Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="space-y-6 text-white">
            <h1 className="text-5xl font-serif tracking-wider">ABC HAIR</h1>
            <p className="text-xl font-light">自然体の美しさを、あなたに</p>
          </div>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24">
        <div className="grid md:grid-cols-2">
          <div className="bg-accent p-12 flex items-center">
            <div className="max-w-md mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif">Concept</h2>
                <p className="text-muted-foreground leading-relaxed">
                  自然な美しさを大切にする私たちのサロンでは、お客様一人ひとりの個性に寄り添い、
                  心地よい空間と確かな技術で、あなたらしさを引き出します。
                  ナチュラルで上質なヘアスタイルを通じて、日々の暮らしに彩りを添えます。
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image src="/consept.jpg?height=800&width=800" alt="Salon Concept" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square">
            <Image src="/about_us.jpg?height=800&width=800" alt="About Us" fill className="object-cover" />
          </div>
          <div className="bg-secondary p-12 flex items-center">
            <div className="max-w-md mx-auto space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-serif">About Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  2020年にオープンしたABC HAIRは、「自然体の美しさ」をコンセプトに、
                  お客様一人ひとりに寄り添ったヘアスタイリングを提供しています。
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  経験豊富なスタイリストたちが、最新のトレンドと確かな技術で、
                  あなたの魅力を最大限に引き出すスタイルをご提案。ナチュラルで心地よい空間で、
                  リラックスしたサロンタイムをお過ごしください。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Menu</h2>
          <MenuTable />
        </div>
      </section>

      {/* Staff Section */}
      <StaffSection />

      {/* Access Section */}
      <section id="access" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Access</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="h-[400px] bg-muted rounded-lg">{/* Google Maps iframe would go here */}</div>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  <h3 className="font-medium">Address</h3>
                </div>
                <p className="text-muted-foreground">
                  〒000-0000
                  <br />
                  東京都渋谷区○○町0-0-0
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <h3 className="font-medium">Hours</h3>
                </div>
                <p className="text-muted-foreground">
                  火-日: 10:00 - 20:00
                  <br />
                  定休日: 月曜日
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  <h3 className="font-medium">Tel</h3>
                </div>
                <p className="text-muted-foreground">00-0000-0000</p>
              </div>
              <Button size="lg" className="w-full">
                予約する
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex space-x-4">
              <a href="#" className="hover:opacity-70">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:opacity-70">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 ABC HAIR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

