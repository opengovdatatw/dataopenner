import React from "react";
import styled, { css } from "styled-components";
import axios from "axios";
import { Sunburst } from "react-vis";
import randomColor from "randomcolor";
import Head from "../components/Head";

const Document = styled.div``;
const Header = styled.div``;
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
      x: `${radius * Math.cos(truedAngle) + 400}px`,
      y: `${radius * Math.sin(truedAngle) + 400}px`,
    };
    return css`
      bottom: ${position.y};
      left: ${position.x};
    `;
  }}
`;

const Footer = styled.div``;

export default class Home extends React.PureComponent {
  state = {
    data: {},
    tip: false,
  };

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const res = await axios.get("/static/data.json");
    this.setState({ data: await res.data });
  }

  render() {
    const { data, tip } = this.state;

    return (
      <Document>
        <Header>資料申請小幫手</Header>
        <Head title="資料申請小幫手" />
        <div>View on GitHub</div>
        {data && (
          <Sunburst
            data={data}
            style={{ stroke: "#fff", position: "relative" }}
            onValueMouseOver={v =>
              this.setState({ tip: v.x && v.y ? v : false })
            }
            // onValueMouseOut={() => this.setState({ tip: false })}
            height={800}
            width={800}
            margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
            getSize={d => d.value}
            getColor={() => randomColor()}
          >
            {tip && (<Tip value={tip}>{tip.name}</Tip>)}
          </Sunburst>
        )}
        <Footer>我想要更多</Footer>
      </Document>
    );
  }
}
