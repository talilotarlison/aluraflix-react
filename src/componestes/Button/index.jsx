import { Link } from "react-router-dom"
import "./index.css"


export default function ButtonLink({ linkPage, className, href, children }) {
    return (
      <Link to={linkPage}>
              <a className={className} href={href}>
        {children}
      </a>
      </Link>

    )
}
