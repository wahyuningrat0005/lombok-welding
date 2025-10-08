export default function ProblemSection() {
  const problems = [
    {
      icon: '😔',
      title: 'Pagar Usang & Berkarat',
      description: 'Pagar lama yang menurunkan nilai estetika rumah Anda'
    },
    {
      icon: '📐',
      title: 'Desain Pasaran',
      description: 'Sulit menemukan desain yang unik dan sesuai karakter rumah'
    },
    {
      icon: '💰',
      title: 'Kualitas Tidak Sebanding',
      description: 'Harga mahal tapi hasil tidak sesuai ekspektasi'
    }
  ]

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-4xl font-extrabold text-center mb-4 text-gray-800">
          Masalah yang Sering Dihadapi
        </h2>
        <p className="text-center text-lg text-gray-600 mb-16">
          Kami memahami tantangan Anda dalam menciptakan rumah impian
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-6xl mb-4">{problem.icon}</div>
              <h3 className="font-heading text-xl font-bold mb-3 text-gray-800">
                {problem.title}
              </h3>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}