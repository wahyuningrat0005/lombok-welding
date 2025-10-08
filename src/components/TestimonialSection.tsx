export default function TestimonialSection() {
  const testimonials = [
    {
      text: 'Hasilnya luar biasa! Pagar rumah saya jadi focal point yang bikin tetangga sering nanya. Tim profesional dan hasil sesuai desain 3D yang ditunjukkan.',
      author: '- Pak Budi, Mataram'
    },
    {
      text: 'Kanopi custom dengan material GRC bikin carport saya kelihatan premium. Proses cepat, harga transparan, tidak ada biaya tersembunyi.',
      author: '- Bu Sari, Senggigi'
    },
    {
      text: 'Pelayanan konsultasi gratisnya sangat membantu. Tim membantu saya memilih desain yang pas dengan budget dan estetika rumah. Highly recommended!',
      author: '- Pak Andi, Cakranegara'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4 text-gray-800">
          Apa Kata Pelanggan Kami
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Kepuasan pelanggan adalah prioritas utama kami
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-lg relative">
              <div className="text-6xl text-orange-500/30 absolute top-4 left-6">"</div>
              <p className="italic text-gray-700 leading-relaxed mt-12 mb-6">
                {testimonial.text}
              </p>
              <p className="font-semibold text-gray-800">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}