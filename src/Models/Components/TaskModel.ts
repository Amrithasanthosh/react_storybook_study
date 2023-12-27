export type TaskPropType = {
  task: { id: string; title: string; state: string };
  onArchiveTask?: () => void;
  onPinTask?: () => void;
};
