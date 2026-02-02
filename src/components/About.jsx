import about from '@/content/about.json'

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
            {about.title}
          </h2>
          <p className="text-lg text-brand-medium mb-4">
            {about.description}
          </p>
          <p className="text-lg text-brand-dark font-medium mb-12">
            {about.highlight}
          </p>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
                {about.mission.title}
              </h3>
              <p className="text-brand-medium">
                {about.mission.text}
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
                {about.vision.title}
              </h3>
              <p className="text-brand-medium">
                {about.vision.text}
              </p>
            </div>

            <div className="bg-brand-light p-6 rounded-lg">
              <h3 className="text-xl font-display font-bold text-brand-dark mb-3">
                {about.values.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.values.list.map((value) => (
                  <span
                    key={value}
                    className="bg-white px-3 py-1 rounded-full text-sm text-brand-dark"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
