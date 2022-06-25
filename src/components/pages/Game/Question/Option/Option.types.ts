export interface OptionProps {
  id: string;
  value: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
