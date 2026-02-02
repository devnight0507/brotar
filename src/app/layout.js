import './globals.css'

export const metadata = {
  title: 'Brotar | Construção com Método',
  description: 'A Brotar é uma empresa de construção que assume toda a jornada da casa — da decisão inicial à construção e ao acompanhamento pós-obra — com método, previsibilidade e responsabilidade.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body>{children}</body>
    </html>
  )
}
