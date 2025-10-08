export default function ProcessSection() {
  const steps = [
    {
      number: '1',
      title: 'Konsultasi Gratis',
      description: 'Diskusi kebutuhan, survei lokasi, dan pembuatan desain 3D sesuai keinginan Anda'
    },
    {
      number: '2',
      title: 'Desain & Produksi',
      description: 'Setelah desain disetujui, tim produksi kami mulai mengerjakan dengan material premium'
    },
    {
      number: '3',
      title: 'Instalasi Profesional',
      description: 'Pemasangan dilakukan oleh tim berpengalaman dengan standar keselamatan tertinggi'
    }
  ]

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4 text-gray-800">
          Proses Kerja Kami
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Sederhana, transparan, dan hasil memuaskan
        </p>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-gray-800">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}