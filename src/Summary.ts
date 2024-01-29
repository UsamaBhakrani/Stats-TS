import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/htmlReport";

export interface Analyser {
  run(matches: MatchData[]): string;
}

export interface OutputReport {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport());
  }
  constructor(public analyser: Analyser, public outputReport: OutputReport) {}
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyser.run(matches);
    this.outputReport.print(output);
  }
}
