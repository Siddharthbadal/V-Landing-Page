import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";

export default function Home() {
  return (
      <div>
          <Header />
          <Hero />
          <Features />
          <NewsLetter />
          <Footer />
      </div>
  )
}
