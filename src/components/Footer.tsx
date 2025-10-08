
import { Mail, MapPin, Phone, Instagram, Facebook, MessageCircle, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h4 className="font-heading text-xl font-bold text-orange-500 mb-4">
              LOMBOK WELDING
            </h4>
            <p className="text-gray-400">
              Spesialis pembuatan pagar, kanopi, dan teralis custom premium di Lombok.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading text-xl font-bold text-orange-500 mb-4">
              Kontak
            </h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>Jl. Raya Mataram No. 123, Lombok</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@lombokwelding.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-xl font-bold text-orange-500 mb-4">
              Ikuti Kami
            </h4>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Lombok Welding. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}