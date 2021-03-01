import React from "react";
import http from "../Utils/http";
import Movie from "./Movie";

/*
 * state에 미래에 사용하고자 하는 object를 추가하는 것은 어디서든(동적으로도) 가능하다. ==> 항상 state 오브젝트에 기본값을 지정할 필요가 없다
 * */
class State2 extends React.Component {
  const;
  state = {
    isLoading: true,
    movies   : [],
  };

  /* getMovies 함수를 비동기로 작동하지만, axios객체는 기다리게 함
   즉, axios 객체가 모든 데이터를 다 가져올 때 까지 기다린 후 다음 코드로 넘어감
   return: Promise
   */
  getMovies = async () => {
    const {data: {data: {movies}}} = await http.get("/list_movies.json?sort_by=rating")
    // console.log(movies)
    this.setState({movies, isLoading: false})
  }

  componentDidMount() {
    // 6초 후 state를 바꾼다
    // setTimeout(() => {
    //   this.setState({ isLoading: false });
    // }, 2000);
    this.getMovies()

  }

  render() {
    // 구조 분해 방식으로 state에 존재하는 isLoading을 불러온다.
    const {isLoading, movies} = this.state;
    return (
      <>
        <h1>State2 Component</h1>
        {/* map 안에서 익명 함수의 바디를 {}를 사용하여 나타낼 경우, 명시적으로 return을 해주어야 하고
        자동으로 return이 되게 하려면 ()를 사용한다
        */}
        <h3>{isLoading ? "Loading..." : movies.map(movie => (
          <Movie key={movie.id} poster={movie.medium_cover_image} summary={movie.summary} year={movie.year} id={movie.id} title={movie.title} />
        ))}</h3>
      </>
    );
  }

}

export default State2;
