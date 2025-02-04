import Hero from '@/components/home/Hero'
import Features from '@/components/home/Features'
import Services from '@/components/home/Services'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <Contact />
    </main>
  )
} 