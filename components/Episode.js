import Link from 'next/link'

const Episode = ({ id, data }) => (
  <div className="episode">
    <Link prefetch href={
        { 
          pathname: '/episode', 
          query: { id }
        } 
      }>
      <a>{data.Title}</a>
    </Link>

    <style jsx>{`
      .episode {
        display: block;
        margin-bottom: 20px;
      }

      a {
        color: DeepPink;
        text-decoration: none;
      }
    `}
    </style>
  </div>
)

export default Episode