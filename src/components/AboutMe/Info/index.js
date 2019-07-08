import React from 'react';

class Info extends React.Component {
    render(){
        const { nameClass, title, value } = this.props;
        return (
            <p className={nameClass}>
                <span style={{fontWeight: 'bold'}}>{title}</span>{value}
            </p>
        );
    }
}

export default Info;