export interface CheckboxProps {
  id: string;
  value: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
