// TODO

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['tomatoes', 'carrots']}/>
  </div>
);

class GroceryListItem extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onMouseEnter() {
    this.setState({
      hover: true
    });
  }

  onMouseLeave() {
    this.setState({
      hover: false
    });
  }

  render() {
  	var style = { // React's inline style attribute
      textDecoration: this.state.done ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal',
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}
      	onMouseEnter={this.onMouseEnter.bind(this)}
      	onMouseLeave={this.onMouseLeave.bind(this)}>
      {this.props.item}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.items.map((item, i) =>
      <GroceryListItem item={item} key={i} />
    )}
  </ul>
);


ReactDOM.render(<App />, document.getElementById('app'));
