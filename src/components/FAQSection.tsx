'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Berapa lama proses pengerjaan?',
      answer: 'Tergantung kompleksitas desain, biasanya 2-4 minggu dari konsultasi hingga instalasi selesai. Kami akan memberikan timeline detail saat survei.'
    },
    {
      question: 'Apakah bisa custom desain sendiri?',
      answer: 'Tentu saja! Kami sangat terbuka dengan ide Anda. Tim desainer kami akan membantu mewujudkan konsep Anda menjadi kenyataan dengan pertimbangan teknis dan estetika.'
    },
    {
      question: 'Berapa estimasi biaya untuk pagar rumah?',
      answer: 'Biaya bervariasi tergantung ukuran, material, dan kompleksitas desain. Hubungi kami untuk konsultasi gratis dan dapatkan penawaran harga yang sesuai budget Anda.'
    },
    {
      question: 'Area mana saja yang dilayani?',
      answer: 'Kami melayani seluruh area Lombok, dengan fokus utama di Mataram, Cakranegara, Senggigi, dan sekitarnya.'
    },
    {
      question: 'Apakah ada garansi?',
      answer: 'Ya, kami memberikan garansi untuk kualitas material dan pengerjaan. Detail garansi akan dijelaskan dalam kontrak kerja.'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4 text-gray-800">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Temukan jawaban untuk pertanyaan Anda
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden">
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-left text-gray-800">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${
                  activeIndex === idx ? 'rotate-180' : ''
                }`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                activeIndex === idx ? 'max-h-96 px-6 pb-6' : 'max-h-0'
              }`}>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}