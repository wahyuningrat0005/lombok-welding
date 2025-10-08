'use client'

import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PortfolioItem {
  id: number
  before: string
  after: string
  label: string
  description: string
}

export default function PortfolioSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [showBefore, setShowBefore] = useState(false)

  const portfolio: PortfolioItem[] = [
    {
      id: 1,
      before: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800',
      after: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
      label: 'Pagar Minimalis Modern',
      description: 'Transformasi pagar klasik menjadi desain minimalis yang elegan dengan material besi hollow galvanis'
    },
    {
      id: 2,
      before: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800',
      after: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      label: 'Kanopi Industrial Chic',
      description: 'Kanopi carport dengan desain industrial modern menggunakan GRC dan rangka baja berkualitas'
    },
    {
      id: 3,
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800',
      after: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800',
      label: 'Teralis Custom Elegan',
      description: 'Teralis jendela dengan motif custom yang memberikan keamanan tanpa mengurangi estetika'
    },
    {
      id: 4,
      before: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      label: 'Pagar Laser Cutting Premium',
      description: 'Pagar dengan teknologi laser cutting untuk detail presisi dan desain yang unik'
    },
    {
      id: 5,
      before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800',
      after: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
      label: 'Balkon Railing Modern',
      description: 'Railing balkon minimalis dengan kombinasi kaca dan stainless steel anti karat'
    }
  ]

  // Auto slide setiap 5 detik
  useEffect(() => {
    if (isHovered) return // Pause saat hover

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // 5 detik

    return () => clearInterval(interval)
  }, [isHovered, portfolio.length])

  // Next slide
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === portfolio.length - 1 ? 0 : prevIndex + 1
    )
  }, [portfolio.length])

  // Previous slide
  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? portfolio.length - 1 : prevIndex - 1
    )
  }, [portfolio.length])

  // Go to specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide()
      if (e.key === 'ArrowRight') nextSlide()
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  return (
    <section id="portofolio" className="py-20 px-6 bg-gray-800 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          Portofolio Karya Kami
        </h2>
        <p className="text-center text-lg text-gray-300 mb-16">
          Hover untuk melihat transformasi Before & After
        </p>

        {/* Main Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slides */}
          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
            {portfolio.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
                onMouseEnter={() => setShowBefore(true)}
                onMouseLeave={() => setShowBefore(false)}
              >
                {/* Before Image (Di belakang) */}
                <img
                  src={item.before}
                  alt={`${item.label} - Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image (Di depan, hilang saat hover) */}
                <img
                  src={item.after}
                  alt={`${item.label} - After`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                    showBefore && index === currentIndex ? 'opacity-0' : 'opacity-100'
                  }`}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 pointer-events-none">
                  <div className="inline-block bg-orange-500/90 px-4 py-2 rounded-lg font-semibold mb-4 pointer-events-auto">
                    {item.label}
                  </div>
                  <p className="text-lg text-gray-200 max-w-2xl">
                    {item.description}
                  </p>
                </div>

                {/* Before/After Badge */}
                <div className="absolute top-6 right-6 pointer-events-none">
                  {showBefore && index === currentIndex ? (
                    <div className="bg-red-500/90 text-white px-4 py-2 rounded-full font-bold text-sm animate-fade-in-up">
                      BEFORE
                    </div>
                  ) : (
                    <div className="bg-green-500/90 text-white px-4 py-2 rounded-full font-bold text-sm">
                      AFTER
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full flex items-center justify-center transition-all group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </button>

          {/* Progress Bar */}
          {/* <div className="absolute top-4 left-4 right-4 h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / portfolio.length) * 100}%`
              }}
            />
          </div> */}

          {/* Slide Counter */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full text-sm font-semibold">
            {currentIndex + 1} / {portfolio.length}
          </div>
        </div>

        {/* Thumbnail Navigation */}
        <div className="flex justify-center gap-3 mt-8 flex-wrap">
          {portfolio.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-orange-500 scale-110'
                  : 'ring-2 ring-white/20 hover:ring-white/40 opacity-60 hover:opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              <img
                src={item.after}
                alt={item.label}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Auto-play Indicator */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          {isHovered ? (
            <>
              <div className="w-2 h-2 bg-orange-500 rounded-full" />
              <span>Paused (hover to pause)</span>
            </>
          ) : (
            <>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span>Auto-playing (use ← → keys or click arrows)</span>
            </>
          )}
        </div>
      </div>
    </section>
  )
}