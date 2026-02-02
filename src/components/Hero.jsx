import hero from '@/content/hero.json'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-brand-light pt-20">
      <div className="container-custom section-padding">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-dark mb-6 animate-fade-in">
            {hero.title}
          </h1>
          <p className="text-lg md:text-xl text-brand-medium mb-4 animate-slide-up">
            {hero.subtitle}
          </p>
          <p className="text-base md:text-lg text-brand-medium mb-8 animate-slide-up">
            {hero.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
            <a
              href={hero.cta.primary.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              {hero.cta.primary.text}
            </a>
            <a href={hero.cta.secondary.link} className="btn-secondary text-center">
              {hero.cta.secondary.text}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
