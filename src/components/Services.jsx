import Image from 'next/image'
import services from '@/content/services.json'

const logos = {
  'realiza': '/logos/brotar-realiza.png',
  'constroi': '/logos/brotar-constroi.png',
  'care': '/logos/brotar-care.png',
}

export default function Services() {
  return (
    <section id="services" className="bg-brand-light section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            {services.title}
          </h2>
          <p className="text-lg text-brand-medium max-w-2xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.items.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-6">
                <Image
                  src={logos[service.id]}
                  alt={service.name}
                  width={180}
                  height={70}
                  className="h-16 w-auto"
                />
              </div>
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
                {service.name}
              </h3>
              <p className="text-brand-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
