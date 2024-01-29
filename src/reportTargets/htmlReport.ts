import fs from "fs";
import { OutputReport } from "../Summary";

export class HtmlReport implements OutputReport {
  print(report: string): void {
    const html = `<div>
    <h1>Analysis Report</h1>
    <div>${report}</div>
    </div>`;
    fs.writeFileSync("report.html", html);
  }
}
