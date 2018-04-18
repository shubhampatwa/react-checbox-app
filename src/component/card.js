import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.css';

class Card extends Component {

  state = {
    checked: false
  }

  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.heading = this.heading.bind(this);
  }

  handleClick(cb) {
    const {position} = this.props;
    if(this.state.checked) {
      this.props.makeNextCardsDisable(position)
    } else {
      this.props.makePreviousCardsEnable(position)
    }

    this.setState({
      checked: cb.target.checked
    })
  }

  heading = () => {
    const {showCheckBox, title, isChecked} = this.props;
    return (
      <div>{
        !showCheckBox ?
          <h6 className="card-title p-b-5">{title}</h6>    
          : <div className="form-check">
            <input type="checkbox" className="form-check-input" onClick={this.handleClick} id={title} checked={isChecked} />
            <label className="form-check-label card-title" htmlFor={title}>{title}</label>
          </div>
       }
      </div>  
    )
  }

  render() {
    const {title, isChecked} = this.props;
    return (
      <div className={`card card-bg ${isChecked ? 'card-bg' : 'disable-card-bg' }`}>
        <div className="card-body">
          {this.heading()}
          <div className={`card-text row ${isChecked ? 'inner-card-bg' : 'disable-card-bg' }`}>
            <div className="form-group col-sm-6">
              <label htmlFor={`${title}-adult`}>Adults<br />(18 yr+)</label>
              <select className="form-control" id={`${title}-adult`} disabled={!isChecked}>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <div className="form-group col-sm-6">
              <label htmlFor={`${title}-chidlren`}>Children<br />(0 - 17)</label>
              <select className="form-control" id={`${title}-chidlren`} disabled={!isChecked}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  position: PropTypes.number,
  showCheckBox: PropTypes.bool,
  cardTitle: PropTypes.string,
  isChecked: PropTypes.bool,
  makePreviousCardsEnable: PropTypes.func,
  makeNextCardsDisable: PropTypes.func
}

export default Card;
