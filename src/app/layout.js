import './globals.css'

export const metadata = {
  title: 'Official Manchester United Website',
  description: 'Official Manchester United Website Clone',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full min-h-full relative overflow-x-visible font-sans_pro font-helvetica'>{children}</body>
    </html>
  )
}
