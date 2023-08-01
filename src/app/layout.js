import './globals.css'

export const metadata = {
  title: 'Official Manchester United Website',
  description: 'Official Manchester United Website Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
