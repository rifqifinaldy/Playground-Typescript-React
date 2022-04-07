import React, { Component } from "react";

interface State {
  counter: number;
}

interface Props {
  title: string;
  namaHalaman?: string;
}

export class ClassComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.addCount = this.addCount.bind(this)
  }

  addCount(param: number): void {
      this.setState({
          counter: param + 1
      })
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h4>{this.props.namaHalaman}</h4>
        <p>Counter : {this.state.counter}</p>
        <button onClick={this.addCount.bind(this, 10)}>Tambah</button>
      </div>
    );
  }
}

export default ClassComponent;
