import React from 'react';
import Typed from 'typed.js';
import './type.styles.css';
class Type extends React.Component {
    componentDidMount() {
      const { strings } = this.props;
      const options = {
        strings: strings,
        typeSpeed: 70,
        backSpeed: 60
      };
      this.typed = new Typed(this.el, options);
    }
    componentWillUnmount() {
      this.typed.destroy();
    }
    render(){
        return(
        <div className="wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el; }}
            />
        </div>
        )
    }
}

export default Type;