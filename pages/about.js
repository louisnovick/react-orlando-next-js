import Link from 'next/link'

const about = () => (
  <div>
    <h1>About Next Chefs</h1>
    <img src="static/kitchen.jpeg" alt="Dope Kitchen"/>
    <div>
      <Link prefetch href="/"><a className="link">Back to Chef List</a></Link>
    </div>

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

export default about;