import React from 'react';
import style from '../style-about-me.css';

class Info extends React.Component {
    render(){
        const { nameClass, title, value } = this.props;
        return (
            <p className={nameClass}>
                <span className={style.bold}>{title}</span>{value}
            </p>
        );
    }
}

export default Info;