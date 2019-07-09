import React from "react";
import { connect } from "react-redux";
import CounterActions from "../redux/CounterRedux";
import { bindActionCreators } from "redux";

class Counter extends React.Component {
	increment = () => { this.props.increment() };

	decrement = () => { this.props.decrement() };

	render() {
		console.log(`%c this.props`, `color: blue; font-weight: 600`, this.props);
		return (
			<div>
				<h2>Counter</h2>
				<div>
					<button onClick={this.decrement}>-</button>
					<span>{this.props.counter.data}</span>
					<button onClick={this.increment}>+</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { counter } = state;
	return {
		counter,
	};
}

const mapDispatchToProps = (dispatch) => {
  return {
    ...bindActionCreators(CounterActions, dispatch),
  }
}


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Counter);
