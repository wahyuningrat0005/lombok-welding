'use client'

import { useEffect, useRef } from 'react'

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()

    let mouseX = 0
    let mouseY = 0

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number

      constructor(canvasWidth: number, canvasHeight: number) {
        this.x = Math.random() * canvasWidth
        this.y = Math.random() * canvasHeight
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() - 0.5
        this.speedY = Math.random() - 0.5
      }

      update(canvasWidth: number, canvasHeight: number) {
        this.x += this.speedX
        this.y += this.speedY

        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100) {
          this.x -= dx / 50
          this.y -= dy / 50
        }

        if (this.x > canvasWidth) this.x = 0
        if (this.x < 0) this.x = canvasWidth
        if (this.y > canvasHeight) this.y = 0
        if (this.y < 0) this.y = canvasHeight
      }

      draw(context: CanvasRenderingContext2D) {
        context.fillStyle = 'rgba(253, 126, 20, 0.5)'
        context.beginPath()
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        context.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle(canvas.width, canvas.height))
    }

    // Animation loop
    function animate() {
      if (!canvas || !ctx) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.update(canvas.width, canvas.height)
        particle.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Event handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleResize = () => {
      setCanvasSize()
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover -z-20" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="https://cdn.pixabay.com/video/2022/10/06/133743-757876298_large.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/70 to-gray-800/80 -z-10" />
      
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full pointer-events-none" />
      
      <div className="z-10 max-w-4xl px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Wujudkan Fasad Rumah Impian Anda
        </h1>
        <p className="text-lg md:text-xl mb-10 opacity-90">
          Pagar & Kanopi Kustom dengan Desain Modern yang Abadi. Material Premium, Keahlian Las Presisi
        </p>
        <a 
          href="#kontak" 
          className="inline-block bg-orange-500 text-white px-12 py-4 text-lg font-semibold rounded-full hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
        >
          Dapatkan Konsultasi & Survei Gratis Sekarang
        </a>
      </div>
    </section>
  )
}