import React from "react";

/*
 * state는 Object이고, Componenet의 데이터를 넣을 수 있다
 * 이러한 데이터는 변할 수 있다.
 * state의 데이터를 변경할 때, setState()를 사용하는 이유 :
 * setState를 사용하지 않고 데이터를 변경하면 react는 refresh를 진행하지 않기 때문 --> state를 변경할때, react가 render(){} 함수를 호출 해 상태를 변경해야 한다
 * setState는 새로운 State를 취해야 함, setState는 새로운 state로 변할 때 마다 render(){}를 호출해 상태를 변경해준다
 * setState를 호출할 때 마다, react는 새로운 state와 함께 render function을 호출한다
 * 외부 상태에 의존하지 않는다..?
 * */
class State extends React.Component {
  /*
   * 생성자 : 컴포넌트가 생성될 때 제일 처음 1번 호출 됨
   * setState에는 반응하지 않음
   * */
  constructor() {
    super();
    console.log("hello");
  }

  state = {
    count: 0, // default value of count variable is 0
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 })); // set State를 할 때, 외부상태에 의존하지 않는 방법
  };
  minus = () => {
    this.setState({ count: -1 }); // 새로운 상태를 넘겨준다
  };

  componentDidMount() {
    /*
     * render함수가 호출 되고 난 후 호출됨
     * setState 호출 시에는 호출되지 않음
     * */
    console.log("Component Did Mount");
  }

  componentDidUpdate() {
    /*
     * setState를 호출 할 때 마다 호출됨
     * 컴포넌트가 mount될 때는 호출되지 않음
     * */
    console.log("I Just did update");
  }

  render() {
    console.log("render");
    return (
      <>
        <h1>The Number is: {this.state.count}</h1>
        {/* onClick 이벤트 발생 시, add라는 함수를 실행 함 */}
        <button onClick={this.add}>Add</button>{" "}
        <button onClick={this.minus}>Minus</button>
      </>
    );
  }
}

export default State;
