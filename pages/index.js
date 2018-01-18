import { getSeries } from 'lib/series'
import Episode from 'components/Episode'

const Index = ({ series }) => (
  <div>
    <h1>Next Chefs</h1>

    {series.Episodes.map(({ imdbID, ...episode }) => (
      <Episode key={imdbID} id={imdbID} data={episode} />
    ))}
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