import _ from "lodash";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import Head from "../components/Head";
import Rank from "../components/Rank";
import RankSunburst from "../components/RankSunburst";

const Topbar = styled.div`
  height: 20px;
`;

const Title = styled.div`
  font-size: 1.5em;
  padding: 3px 10px 3px 10px;
  background: #ffffff;
  display: inline-block;
  border-radius: 3px;
`;

const Document = styled.div`
  background-image: url("./static/background.jpg");
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

const Mask = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(10, 10, 10, 0.6);
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const RankPanel = styled(Rank)`
  margin-right: 0;
`;

export default class Home extends React.PureComponent {
  state = {
    data: null,
  };

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const res = await axios.get("./static/data.json");
    const raw = await res.data;
    const fields = _.pullAt(raw, [0])[0];
    const data = _.map(raw, item => _.mapKeys(item, (__, key) => fields[key]));
    this.setState({ data });
  }

  renderSunburst() {
    const { data } = this.state;
    if (!data) return null;

    return <RankSunburst data={data} />;
  }

  renderRank() {
    const { data } = this.state;
    if (!data) return null;

    return <RankPanel data={data} />;
  }

  render() {
    return (
      <Document>
        <Head title="資料申請小幫手" />
        <Mask>
          <Container className="container">
            <Topbar />
            <div>
              <Title>資料申請小幫手</Title>
            </div>
            {this.renderRank()}
            <Main>
              <div>View on GitHub</div>
              <button type="button" className="btn btn-primary">
                立即檢索申請狀況
              </button>
              <button type="button" className="btn btn-primary">
                我想要更多
              </button>
            </Main>
          </Container>
        </Mask>
      </Document>
    );
  }
}
