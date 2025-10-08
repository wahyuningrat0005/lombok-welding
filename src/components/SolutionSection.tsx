export default function SolutionSection() {
  const solutions = [
    {
      icon: '✨',
      title: 'Desain Sepenuhnya Kustom',
      description: 'Setiap proyek dirancang khusus sesuai karakter dan kebutuhan rumah Anda. Tidak ada desain yang sama.'
    },
    {
      icon: '🛡️',
      title: 'Material Premium Tahan Lama',
      description: 'Menggunakan Plat Cutting dan GRC berkualitas tinggi yang tahan cuaca ekstrem hingga puluhan tahun.'
    },
    {
      icon: '🤝',
      title: 'Proses Transparan 100%',
      description: 'Dari konsultasi gratis, desain, produksi, hingga pemasangan - semua tahap dikomunikasikan dengan jelas.'
    }
  ]

  return (
    <section id="layanan" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4 text-gray-800">
          Solusi Kami untuk Anda
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Mengapa ribuan pemilik rumah di Lombok mempercayai kami
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {solutions.map((solution, idx) => (
            <div key={idx} className="text-center group hover:-translate-y-3 transition-transform duration-300">
              <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                {solution.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-800">
                {solution.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}