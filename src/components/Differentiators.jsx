import differentiators from '@/content/differentiators.json'

export default function Differentiators() {
  return (
    <section id="differentiators" className="bg-white section-padding">
      <div className="container-custom">
        {/* Main Differentiator */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-4">
            {differentiators.title}
          </h2>
          <p className="text-xl text-brand-dark font-medium mb-4">
            {differentiators.subtitle}
          </p>
          <p className="text-lg text-brand-medium">
            {differentiators.description}
          </p>
        </div>

        {/* Why Hire */}
        <div className="bg-brand-dark text-white p-8 md:p-12 rounded-lg mb-12">
          <h3 className="text-2xl font-display font-bold mb-4">
            {differentiators.whyHire.title}
          </h3>
          <p className="text-lg text-gray-300">
            {differentiators.whyHire.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* LSF */}
          <div className="bg-brand-light p-6 rounded-lg">
            <h3 className="text-xl font-display font-bold text-brand-dark mb-2">
              {differentiators.lsf.title}
            </h3>
            <p className="text-brand-medium text-sm mb-3">
              {differentiators.lsf.subtitle}
            </p>
            <p className="text-brand-medium">
              {differentiators.lsf.description}
            </p>
          </div>

          {/* Innovation */}
          <div className="bg-brand-light p-6 rounded-lg">
            <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
              {differentiators.innovation.title}
            </h3>
            <p className="text-brand-medium">
              {differentiators.innovation.description}
            </p>
          </div>

          {/* Comfort */}
          <div className="bg-brand-light p-6 rounded-lg">
            <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
              {differentiators.comfort.title}
            </h3>
            <p className="text-brand-medium">
              {differentiators.comfort.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
