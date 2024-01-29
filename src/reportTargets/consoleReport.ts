import { OutputReport } from "../Summary";

export class ConsoleReport implements OutputReport {
  print(report: string): void {
    console.log(report);
  }
}
