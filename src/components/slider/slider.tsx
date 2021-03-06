
require('rc-slider/assets/index.css');

const React = require('react');
const Slider = require('rc-slider');
const Tooltip = require('rc-tooltip');
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;
const style = { margin: 15 };

const handle = (props: any) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

class CustSlider extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      lowerBound: 0,
      upperBound: 100,
      value: [0, 100]
    };
  }

  onLowerBoundChange = (e: any) => {
    this.setState({ lowerBound: +e.target.value });
  }

  onUpperBoundChange = (e: any) => {
    this.setState({ upperBound: +e.target.value });
  }

  onSliderChange = (value: any) => {
    if (typeof this.props.onChange === 'function') {
        this.props.onChange({lowerBound: value[0]*100, upperBound: value[1]*100});
    }
    this.setState({
      value,
    });
  }

  handleApply = () => {
    const { lowerBound, upperBound } = this.state;
    this.setState({ value: [lowerBound, upperBound] });
  }

  render() {
    return (
      <div style={style}>

        {/* 
        //@ts-ignore */}
        <Range allowCross={false} value={this.state.value} onChange={this.onSliderChange}  tipFormatter={value => `${value*100}`} />
      </div>
    );
  }
}

export default CustSlider;
