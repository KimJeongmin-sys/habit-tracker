import React, { PureComponent } from "react";
class Habit extends PureComponent {
  // state = {
  //   count: 0,
  // };
  componentDidMount() {
    console.log(`habit: ${this.props.habit.name} mounted`);
  }
  componentWillUnmount() {
    console.log(`habit: ${this.props.habit.name} will unmounted`);
  }

  handleIncrement = () => {
    this.props.onIncrement(this.props.habit);
    //state 오브젝트 안에 있는 count를 증가 한뒤 state를 업데이트 해야함.
    // this.state.count += 1 => 이런식으로 코딩할 경우, 리액트에서는 업데이트가 되었는지 알 수 없음.
    // this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
    // const count = this.state.count - 1;
    // this.setState({ count: count < 0 ? 0 : count });
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    console.log("habit render!");
    const { name, count } = this.props.habit; //동일한 네이밍
    // const { name } = this.props.habit;
    // const { count } = this.props;
    console.log(`name: ${name}`);
    console.log(`count: ${count}`);
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i class="far fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i class="far fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
          // onClick={event => {
          //   this.props.onDelete(this.props.habit);
          // }}
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
