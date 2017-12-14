import React, {
  Component
} from 'react';
import './styles/index.scss';

class OptionsComponent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.props.onChange(this.props.options.filter(option => option.id === e.target.value)[0])
  }
  render() {
    const options = this.props.options.map((option) => <option key={option.id} value={option.id}>{option.name}</option>);
    return(
      <div className={this.props.className}>
        <select value={this.props.selected} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}

OptionsComponent.defaultProps = {className: 'options-component', options: [], selected: null};

export default OptionsComponent;
