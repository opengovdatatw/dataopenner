import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { withPropsOnChange } from "recompose";
import styled from "styled-components";

const replies = ["申請前已對外提供", "同意提供", "不同意提供", "還未回覆"];

const nameColors = ["#aab6fe", "#b2fab4", "#ffa4a2", "#ffe97d"];
const valueColors = ["#49599a", "#519657", "#af4448", "#c88719"];

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const KindName = styled.div`
  font-size: 1.5em;
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 20px 20px;
  color: ${({ idx }) => nameColors[idx]};
`;

const Bar = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;
`;

const Item = styled.div`
  position: relative;
  flex: 1;
  background-color: rgba(255, 255, 255, 0.6);
  margin: 0 5px;
  height: ${({ value }) => value * 500}%;
  transition-property: height;
  transition-duration: 1s;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 20px;
  font-size: 1.2em;
  color: ${({ idx }) => valueColors[idx]};
`;

const Organizer = styled.div`
  position: absolute;
  top: -30px;
  right: 0;
  text-align: right;
  width: 200px;
  color: #ffffff;
`;

class Rank extends React.PureComponent {
  static propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  };

  state = {
    idx: 0,
  };

  componentDidMount() {
    this.timer = setTimeout(this.onTimerTrigger, 5000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  onTimerTrigger = () => {
    let { idx } = this.state;
    idx += 1;
    if (idx >= replies.length) idx = 0;
    this.setState({ idx });
    this.timer = setTimeout(this.onTimerTrigger, 5000);
  };

  render() {
    const { data, ...props } = this.props;
    const { idx } = this.state;
    const results = _.orderBy(data, [replies[idx]], ["desc"]);
    const total = _.sumBy(data, replies[idx]);

    return (
      <Wrapper {...props}>
        <KindName idx={idx}>{replies[idx]}</KindName>
        <Bar>
          {_.map(_.take(results, 8), (result, index) => (
            <Item key={index} value={result[replies[idx]] / total} idx={idx}>
              <Organizer>{result.name}</Organizer>
              {result[replies[idx]]}
            </Item>
          ))}
        </Bar>
      </Wrapper>
    );
  }
}

export default Rank
  |> withPropsOnChange(["data"], ({ data }) => {
    const results = {};
    _.forEach(data, item => {
      if (
        !item["標記用＿派發機關"] ||
        !item["0. 政府對民眾申請開放資料的答覆是？"]
      )
        return;

      const paths = [
        item["標記用＿派發機關"],
        item["0. 政府對民眾申請開放資料的答覆是？"],
      ];
      const value = _.get(results, paths, 0);
      _.set(results, paths, value + 1);
    });

    return {
      data: _.map(results, (result, name) => {
        const item = { name: _.replace(name, "政府", "") };
        _.forEach(replies, key => {
          item[key] = result[key] || 0;
        });
        return item;
      }),
    };
  });
