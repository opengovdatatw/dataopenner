import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { Sunburst } from "react-vis";
import { withPropsOnChange } from "recompose";
import styled, { css } from "styled-components";
import randomColor from "randomcolor";

const colors = {};
const bindColor = name => {
  if (!colors[name]) colors[name] = randomColor({ luminosity: "light" });
  return colors[name];
};

const Wrapper = styled.div`
  position: relative;
  margin: 0 auto;
  width: 400px;
`;

const Tip = styled.div`
  display: flex;
  color: #fff;
  background: #000;
  align-items: center;
  padding: 5px;
  position: absolute;
  ${({ value }) => {
    const { radius, angle, angle0 } = value;
    const truedAngle = (angle + angle0) / 2;
    const position = {
      x: `${radius * Math.cos(truedAngle) + 200}px`,
      y: `${radius * Math.sin(truedAngle) + 200}px`,
    };
    return css`
      bottom: ${position.y};
      left: ${position.x};
    `;
  }}
`;

class SunburstByReplies extends React.PureComponent {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  };

  state = {
    tip: false,
  };

  onValueMouseOver = v => this.setState({ tip: v.x && v.y ? v : false });

  onValueMouseOut = () => this.setState({ tip: false });

  render() {
    const { data } = this.props;
    const { tip } = this.state;

    return (
      <Wrapper>
        <Sunburst
          data={data}
          style={{ stroke: "#fff" }}
          height={400}
          width={400}
          margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
          onValueMouseOver={this.onValueMouseOver}
          onValueMouseOut={this.onValueMouseOut}
          getSize={d => d.value}
          getColor={d => d.color}
        >
          {tip && <Tip value={tip}>{tip.name}</Tip>}
        </Sunburst>
      </Wrapper>
    );
  }
}

export default SunburstByReplies
  |> withPropsOnChange(["data"], ({ data }) => {
    const resultByReplies = {};
    _.forEach(data, item => {
      if (
        !item["標記用＿派發機關"] ||
        !item["0. 政府對民眾申請開放資料的答覆是？"]
      )
        return;

      const paths = [
        item["0. 政府對民眾申請開放資料的答覆是？"],
        item["標記用＿派發機關"],
      ];
      const value = _.get(resultByReplies, paths, 0);
      _.set(resultByReplies, paths, value + 1);
    });

    return {
      data: {
        color: "#FFFFFF",
        name: "資料開放現況",
        children: _.map(resultByReplies, (resultA, nameA) => ({
          color: bindColor(nameA),
          name: nameA,
          children: _.map(resultA, (resultB, nameB) => ({
            color: bindColor(nameB),
            name: nameB,
            value: resultB,
          })),
        })),
      },
    };
  });
