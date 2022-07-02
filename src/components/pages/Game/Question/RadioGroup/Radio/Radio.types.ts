export interface RadioProps {
  id: string;
  value: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
