import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow flex items-center justify-center py-24">
        <div className="container-custom">
          <div className="max-w-md mx-auto text-center space-y-6">
            <h1 className="text-6xl font-bold">404</h1>
            <h2 className="text-2xl font-semibold">Az oldal nem található</h2>
            <p className="text-muted-foreground">A keresett oldal nem létezik vagy eltávolításra került.</p>
            <Button asChild>
              <Link href="/">Vissza a főoldalra</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

