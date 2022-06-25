import { OptionProps } from "./Option/Option.types";

export interface QuestionProps {
  question: string;
  options: OptionProps[];
  answers: string[];
}
