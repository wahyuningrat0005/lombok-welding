
import Navbar from '@/components/Navbar'
import HeroSection from '../components/HeroSection'
import ProblemSection from '@/components/ProblemSection'
import SolutionSection from '@/components/SolutionSection'
import PortfolioSection from '../components/PortfolioSection'
import ARVSection from '@/components/ARVSection'
import TestimonialSection from '@/components/TestimonialSection'
import ProcessSection from '@/components/ProcessSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home(){
  return (
    <main>
       <Navbar />
       <HeroSection />
       <ProblemSection />
       <SolutionSection />
       <PortfolioSection />
       <ARVSection />
       <TestimonialSection />
       <ProcessSection />
       <FAQSection />
       <ContactSection />
       <Footer />
    </main>
    /*<>
      <ServicesGrid />
      <section className="container py-12">
        <h2 className="text-2xl font-semibold text-center">Portofolio</h2>
        <p className="text-center text-gray-600 mt-2">Geser kursor untuk melihat before/after</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <PortfolioBeforeAfter before="/images/portfolio1-before.jpg" after="/images/portfolio1-after.jpg" caption="Pagar Minimalis" />
          <PortfolioBeforeAfter before="/images/portfolio2-before.jpg" after="/images/portfolio2-after.jpg" caption="Kanopi Industrial" />
          <PortfolioBeforeAfter before="/images/portfolio3-before.jpg" after="/images/portfolio3-after.jpg" caption="Teralis Elegan" />
        </div>
      </section>

      <ARVisualizer />

      <section id="contact" className="container py-12">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl font-semibold">Siap Wujudkan Pagar Impian Anda?</h2>
            <p className="text-gray-600 mt-2">Isi formulir dan tim akan menghubungi Anda untuk survei gratis.</p>
            <div className="mt-6">
              <p className="text-sm text-gray-500">📞 +62 812-3456-789</p>
              <p className="text-sm text-gray-500">📧 info@lombokwelding.com</p>
            </div>
          </div>
          <LeadForm businessNumber="+628123456789" />
        </div>
      </section> 
    </>*/
  )
}
