// app/layout.js
import './globals.css'

export const metadata = {
  title: 'Royal Palace Hotel',
  description: 'Luxury hotel experience with royal elegance',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-stone-50">{children}</body>
    </html>
  )
}