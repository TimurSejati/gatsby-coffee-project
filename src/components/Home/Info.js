import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story"></Title>
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Dignissimos, ab minima sunt consequuntur fugit dolorem earum
              laborum suscipit facilis, ullam obcaecati laboriosam tempora
              ratione exercitationem corporis incidunt eligendi non fuga, sequi
              ad vero minus dolor inventore. Doloremque itaque veniam
              exercitationem, rerum iste hic repudiandae quia possimus dolores
              unde aspernatur labore.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
