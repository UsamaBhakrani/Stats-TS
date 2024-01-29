import { CsvFileReader } from "./CsvFileReaderBack";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/consoleReport";
import { HtmlReport } from "./reportTargets/htmlReport";

// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());
const summary1 = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(matchReader.matches);
