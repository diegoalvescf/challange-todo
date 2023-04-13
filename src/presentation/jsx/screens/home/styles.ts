import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { InputComponent } from '../../components/input';
import { TaskInfoComponent } from '../../components/task-info';
import { FlatList } from 'react-native';
import { ITask } from './props';
import { TaskCardComponent } from '../../components/task-card';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${({ theme }) => theme.colors.gray600};
`;

export const InputContainer = styled.View`
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.xm.responsive}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -${({ theme }) => theme.spacing.xl.responsive}px;
`;

export const Input = styled(InputComponent)`
  margin-right: ${({ theme }) => theme.spacing.xs.responsive}px;
`;

export const Section = styled.View`
  flex-direction: row;
  margin: ${({ theme }) => theme.spacing.xl.responsive}px
    ${({ theme }) => theme.spacing.xxm.responsive}px
    ${({ theme }) => theme.spacing.xxm.responsive}px
    ${({ theme }) => theme.spacing.xxm.responsive}px;

  justify-content: space-between;
  align-items: center;
`;

export const TasksCreatedLabel = styled(TaskInfoComponent)``;

export const CompletedTasksLabel = styled(TaskInfoComponent).attrs({
  type: 'secondary',
})``;

export const Content = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.spacing.xxm.responsive}px;
`;

export const TasksList = styled(FlatList as new () => FlatList<ITask>).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 100 },
})`` as unknown as typeof FlatList;

export const TaskItem = styled(TaskCardComponent)`
  margin-bottom: ${({ theme }) => theme.spacing.sm.absolute}px;
`;
