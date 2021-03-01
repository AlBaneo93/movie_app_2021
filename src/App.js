import React from "react";
import propTypes from "prop-types";
import State2 from "./components/State2";

function Food({ name, picture, rating }) {
  const imageReSize = {
    width: 480,
    height: 360,
  };

  return (
    <div>
      <h1>I Like {name}</h1>
      <h3>{rating} / 5.0</h3>
      <img src={picture} style={imageReSize} alt={name} />
    </div>
  );
}

/* 자동으로 props의 타입을 체크해주는 라이브러리를 사용
 *  ComponentName.propTypes = {} 형태로 사용
 *  Console에 에러를 띄운다
 * */
Food.propTypes = {
  name: propTypes.string.isRequired,
  pricture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

// const foodILike = [
//   {
//     id: 1,
//     name: "kimchi",
//     image:
//       "http://health.chosun.com/site/data/img_dir/2020/07/21/2020072103114_0.jpg",
//     rating: 3,
//   },
//   {
//     id: 2,
//     name: "samgyeopsal",
//     image: "https://t1.daumcdn.net/cfile/tistory/9942B3395A3501C304",
//     rating: 3.3,
//   },
//   {
//     id: 3,
//     name: "kimbap",
//     image:
//       "https://lh3.googleusercontent.com/proxy/JDmaX5x6dKwt_2Gl7Ee4fQBxZAHYQWs-vmN0vO67P78w6ElxDcvX74QUsagaA6u_8B6bCBSfC6bJ1uMj5wRR3bFN9gP2rLEZqg",
//     rating: 4.7,
//   },
//   {
//     id: 4,
//     name: "doncasu",
//     image:
//       "https://post-phinf.pstatic.net/MjAyMDA0MTZfMjY3/MDAxNTg2OTk5MzYwOTMw.YZk3XJCkJqOrZmSzXTGfnXcfoj5CoLQfY9kEBhBmlyYg.WdEgjt1SmPLlCfi8nmVMB79FymTDi3ApEfQJrGF57Acg.JPEG/1.jpg?type=w1200",
//     rating: 2.0,
//   },
// ];

// function renderFood(dish) {
//   return (
//     <Food
//       key={dish.id}
//       name={dish.name}
//       picture={dish.image}
//       rating={dish.rating}
//     />
//   );
// }

/* prop = property*/
function App() {
  return (
    <div className="App">
      {/*<Food fav="kimchi"/> /!* Potato는 Children 컴포넌트가 된다. Children Component에 정보를 보내는 방법*!/*/}
      {
        // 구조 분해를 적용하여 foodILike에 있는 item의 변수들을 가져옴
        // foodILike.map(renderFood)
      }
      <State2 />
    </div>
  );
}

export default App;
