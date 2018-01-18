// import Document, { Head, Main, NextScript } from 'next/document'
// ./pages/_document.js

import { getSeries } from 'lib/series'
import Episode from 'components/Episode'
import dynamic from 'next/dynamic'
const Subtitle = dynamic(import('components/Subtitle'),
  {
    ssr: false,
    loading: () => <p>...</p>
  }
)

const Index = ({ series }) => (
  <div>
    <h1>Next Chefs</h1>
    <Subtitle />

    {series.Episodes.map(({ imdbID, ...episode }) => (
      <Episode key={imdbID} id={imdbID} data={episode} />
    ))}

    <style jsx global>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async() => {
  const res = await getSeries()

  const series = await res.json()

  return {
    series
  }
}

export default Index