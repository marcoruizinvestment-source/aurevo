import './globals.css'

export const metadata = {
  title: 'AUREVO ACADEMY',
  description: 'Gana $100 en blockchain y recibe tu certificado NFT',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
