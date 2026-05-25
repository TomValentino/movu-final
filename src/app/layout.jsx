export const metadata = {
  title: 'Movu er en helt ny moderne rullator!',
  description: 'Movu Mobility tilbyr rullatorer som gir deg trygghet og frihet i hverdagen. Våre ergonomiske og sammenleggbare modeller kombinerer kvalitet og komfort, tilpasset både innendørs og utendørs bruk. Finn din perfekte rullator og oppdag en enklere hverdag med Movu Mobility!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
