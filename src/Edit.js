import React from 'react';
import { enquireScreen } from 'enquire-js';
import LogoGather from './LogoGather';


export default class Edit extends React.Component {
    constructor(props) {
      super(props);
      this.defaultImage = {
        a: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
        b: 'https://zos.alipayobjects.com/rmsportal/TOXWfHIUGHvZIyb.svg',
        c: 'https://zos.alipayobjects.com/rmsportal/NbWTEbiswBhrRBU.svg',
      };
      this.state = {
        image: this.defaultImage.a,
        pixSize: 20,
        pointSize: 10,
        isMobile: false,
        show: false,
      };
    }
  
    componentDidMount() {
      enquireScreen((isMobile) => {
        this.setState({ isMobile });
      });
    }
  
    onChangeImage = (e) => {
      const dom = e.target;
      this.image = dom.value;
    }
  
    onChangePix = (num) => {
      this.pixSize = num;
    }
  
    onClick = () => {
      if (this.image || this.pixSize || this.pointSize) {
        this.setState({
          image: this.image || this.state.image,
          pixSize: typeof this.pixSize === 'number' ? this.pixSize : this.state.pixSize,
          pointSize: typeof this.pointSize === 'number' ? this.pointSize : this.state.pointSize,
          update: true,
        }, () => {
          this.setState({
            update: false,
          });
        });
      }
    }
  
    onChangeRadio = (e) => {
      const target = e.target;
      const value = target.value;
      this.image = this.defaultImage[value];
      this.setState({
        value,
      });
    }
  
    onChangePoint = (num) => {
      this.pointSize = num;
    }
  
    phoneClick = () => {
      this.setState({
        show: !this.state.show,
      });
    };
  
    render() {
      return (
        <div style={{ position: 'relative' }}>
          {!this.state.update && (
            <LogoGather
              image={this.state.image}
              pixSize={this.state.pixSize}
              pointSizeMin={this.state.pointSize}
            />
          )}
        </div>
      );
    }
  }