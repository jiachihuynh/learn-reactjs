import React, {Component} from 'react';
import './todoitem.css';
import classNames from 'classnames';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';
import tick from '../img/tick.svg';

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

export default TodoItem;