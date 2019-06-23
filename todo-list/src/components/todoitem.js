import React, {Component} from 'react';
import './todoitem.css';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component { 
    render() {
        const {item, onClick} = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }

        return (
            <div  className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
              <img 
                src={url} 
                width={32} 
                height={32}
                onClick={onClick} />
              <p>{this.props.item.title}</p>
            </div> 
        )
    }
} 

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
};

export default TodoItem;