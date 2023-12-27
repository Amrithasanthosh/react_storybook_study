export interface Action {
  label: string;
  onClick: () => void;
}

export interface CardPropsType {
  title: string;
  description: string;
  imageUrl: string;
  actions: Action[];
}
