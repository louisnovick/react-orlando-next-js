import { getEpisode } from 'lib/series'
import Link from 'next/link'

const Episode = ({ episode }) => (
  <div>
    <h1>{episode.Title}</h1>
    <p>{episode.Plot}</p>
    <img src={episode.Poster} alt="" />
    <p>Rating: {episode.imdbRating}</p>

    <Link prefetch href="/"><a>Back</a></Link>

    <style jsx global>{`
      body {
        font-family: sans-serif;
      }
    `}</style>
  </div>
)

Episode.getInitialProps = async ({ query }) => {
  const res = await getEpisode(query.id)
  const episode = await res.json()
  
  return { 
    episode 
  }
}

export default Episode