export default function ARSection() {
  const features = [
    {
      icon: '📱',
      title: 'Scan QR Code',
      description: 'Gunakan kamera smartphone Anda'
    },
    {
      icon: '🏠',
      title: 'Tempatkan Virtual',
      description: 'Lihat produk di depan rumah Anda secara real-time'
    },
    {
      icon: '✅',
      title: 'Yakin Sebelum Pesan',
      description: 'Pastikan desain cocok dengan rumah Anda'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="font-heading text-4xl font-extrabold mb-4">
          Coba Sebelum Beli dengan AR
        </h2>
        <p className="text-lg text-purple-100 mb-12">
          Teknologi Augmented Reality untuk visualisasi produk di rumah Anda
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-purple-100">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="w-64 h-64 bg-white mx-auto rounded-2xl flex items-center justify-center text-8xl text-gray-700 shadow-2xl">
          📱
        </div>
        <p className="mt-6 text-purple-100">*Scan kode ini untuk membuka pengalaman AR interaktif</p>
      </div>
    </section>
  )
}