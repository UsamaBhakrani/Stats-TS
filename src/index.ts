import { CsvFileReader } from "./CsvFileReaderBack";
import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/consoleReport";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);
