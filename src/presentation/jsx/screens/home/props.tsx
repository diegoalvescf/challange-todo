export interface ITask {
  id: string;
  title: string;
}

export interface ITaskSelection {
  [taskId: string]: boolean;
}
