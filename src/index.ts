import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReaderBack";
import { MatchReader } from "./MatchReader";

const csvFileReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFileReader)
matchReader.load()




