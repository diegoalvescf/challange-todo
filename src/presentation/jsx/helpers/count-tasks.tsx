import { ITask } from '../screens/home/props';

export const countTasksStatus = (
  tasks: ITask[],
  selectedTasks: Record<string, boolean>
) => {
  return tasks.reduce(
    (accumulator, task) => {
      if (selectedTasks[task.id]) {
        accumulator.totalCompletedTasks++;
      }
      return accumulator;
    },
    { totalCompletedTasks: 0 }
  );
};
