import _ from "lodash";
import fs from "fs";
import parse from "csv-parse/lib/sync";

const raw = fs.readFileSync("./static/data.csv");
const csv = parse(raw);
const fields = _.pullAt(csv, [0])[0];
const data = _.map(csv, item => _.mapKeys(item, (__, key) => fields[key]));

const results = {};
_.forEach(data, item => {
  const paths = [
    item["0. 政府對民眾申請開放資料的答覆是？"],
    item["標記用＿派發機關"],
  ];
  const value = _.get(results, paths, 0);
  _.set(results, paths, value + 1);
});

const x = [
  "A. 申請前已對外提供 (續A)",
  "B. 同意提供 (跳B)",
  "C. 不同意提供 (跳C)",
  "D. 無法判斷 (跳D 選填備註)",
  "E. 還未回覆 (跳E 選填備註)",
  "F. 要分案",
  "G. 對於資料平台的意見 (跳G 選填備註)",
  "H. 業務陳情意見而無關資料申請 (跳H 選填備註)",
];

const root = {
  name: "資料開放現況",
  children: _.map(results, (resultA, nameA) => ({
    name: nameA,
    children: _.map(resultA, (resultB, nameB) => ({
      name: nameB,
      value: resultB,
    })),
  })),
};

fs.writeFileSync(`${__dirname}/static/data.json`, JSON.stringify(root, 4));
