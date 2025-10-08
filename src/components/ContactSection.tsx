'use client'

import { useState, FormEvent } from 'react'
import { Phone } from 'lucide-react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('Terima kasih! Permintaan konsultasi Anda telah diterima. Tim kami akan menghubungi Anda segera via WhatsApp.')
    setFormData({ name: '', phone: '', message: '' })
  }

  return (
    <section id="kontak" className="py-20 px-6 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4">
          Wujudkan Rumah Impian Anda Sekarang
        </h2>
        <p className="text-center text-lg text-gray-300 mb-16">
          Konsultasi gratis tanpa komitmen - mari diskusikan proyek Anda!
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-3xl font-bold mb-6">
              Dapatkan Penawaran Terbaik
            </h3>
            <p className="text-gray-300 mb-8">
              Isi formulir di samping dan tim kami akan menghubungi Anda dalam 24 jam
            </p>
            <div className="flex flex-col items-center md:items-start">
              <Phone className="w-16 h-16 text-orange-500 mb-4" />
              <p className="text-3xl font-bold text-orange-500 mb-2">+62 812-3456-7890</p>
              <p className="text-gray-300">Atau hubungi kami langsung via WhatsApp</p>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Nama Lengkap *"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Nomor WhatsApp *"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-orange-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Ceritakan kebutuhan Anda (opsional)"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/60 focus:border-orange-500 focus:outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              Kirim Permintaan Konsultasi
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}