export type Option = {
  id: string;
  value: string;
}

export interface QuestionProps {
  question: string;
  options: Option[];
  answers: string[];
}
