import React from "react";
import PropTypes from 'prop-types'


const Movie = ({id, year, title, summary, poster}) => {
  const divStyle = {
    width : "50%",
    margin: "auto",
    float : "left"
  }
  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}

Movie.propTypes = {
  id     : PropTypes.number.isRequired,
  year   : PropTypes.number.isRequired,
  title  : PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,

}

export default Movie
