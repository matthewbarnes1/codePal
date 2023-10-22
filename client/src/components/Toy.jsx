import { Component } from "react";

class cpToy extends Component {
  render() {
    return (
      <div
        draggable
        onDragStart={this.handleDragStart}
        onDrag={this.handleDrag}
        onDragEnd={this.handleDragEnd}
      >
        Drag me!
      </div>
    );
  }
}

export default MyComponent;
