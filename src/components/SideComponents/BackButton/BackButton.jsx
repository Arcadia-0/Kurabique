import {Link} from "react-router-dom"
const BackButton = () => {
  return (
    <div>
        <Link to="/">
      <button className="mb-4 px-4 py-2 bg-primary text-white rounded-lg">Geri</button>
      </Link>
    </div>
  )
}

export default BackButton