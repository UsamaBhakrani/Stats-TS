import { CsvFileReader } from "./CsvFileReaderBack";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { HtmlReport } from "./reportTargets/htmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
// const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
