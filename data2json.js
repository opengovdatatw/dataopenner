import _ from "lodash";
import fs from "fs";
import parse from "csv-parse/lib/sync";

const raw = fs.readFileSync("./static/data.csv");
const csv = parse(raw);

const results = _.pullAt(csv, [0]);

const replies = {
  "A. 申請前已對外提供 (續A)": "申請前已對外提供",
  "B. 同意提供 (跳B)": "同意提供",
  "C. 不同意提供 (跳C)": "不同意提供",
  "D. 無法判斷 (跳D 選填備註)": "還未回覆",
  "E. 還未回覆 (跳E 選填備註)": "還未回覆",
};

_.forEach(csv, item => {
  const current = item;
  const reply = current[15];
  if (replies[reply]) {
    current[15] = replies[reply];
    results.push(current);
  }
});

fs.writeFileSync(`${__dirname}/static/data.json`, JSON.stringify(results, 4));
