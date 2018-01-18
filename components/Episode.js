import Link from 'next/link'

const Episode = ({ id, data }) => (
  <div>
    <Link prefetch href={
        { 
          pathname: '/episode', 
          query: { id }
        } 
      }>
      <a>{data.Title}</a>
    </Link>
  </div>
)

export default Episode