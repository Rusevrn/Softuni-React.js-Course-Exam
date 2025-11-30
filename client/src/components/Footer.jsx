import { Link } from "react-router"


function Footer() {
  return (
    <footer>
    <div className="container">
      <div className="col-lg-12">
        <p>Copyright © 2048 LUGX Gaming Company. All rights reserved. &nbsp;&nbsp; <Link rel="nofollow" to={'https://templatemo.com'} target="_blank">Design: TemplateMo</Link></p>
        <p>Live view of used template is <Link to={'https://templatemo.com/live/templatemo_589_lugx_gaming'}>Here</Link></p>
      </div>
    </div>
  </footer>
  )
}

export default Footer