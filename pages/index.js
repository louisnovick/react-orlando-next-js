// import Document, { Head, Main, NextScript } from 'next/document'
// ./pages/_document.js
// Custom head with title
// Custom error handling _error.js

import { getSeries } from 'lib/series'
import Episode from 'components/Episode'
import Link from 'next/link'
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

    <Link prefetch href="/about"><a className="link">About Us</a></Link>

    <style jsx global>{`
      body {
        font-family: sans-serif;
      }
    `}</style>

    <style jsx>{`
      .link {
        text-decoration: none;
        background: deepPink;
        color: white;
        padding: 10px 20px;
        margin-top: 20px;
        display: inline-block;
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