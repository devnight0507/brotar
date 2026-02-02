import footer from '@/content/footer.json'
import site from '@/content/site.json'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container-custom px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">{site.name}</h3>
            <p className="text-gray-400">{site.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <nav className="space-y-2">
              {footer.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Group Link */}
          <div>
            <h4 className="font-bold mb-4">Grupo</h4>
            <a
              href={footer.groupLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {footer.groupLink.text}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}
