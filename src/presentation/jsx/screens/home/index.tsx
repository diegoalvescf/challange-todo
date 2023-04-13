import React, { useRef, useState } from 'react';

import { HeaderComponent } from '../../components/header';
import { ITask, ITaskSelection } from './props';

import {
  CompletedTasksLabel,
  Container,
  Content,
  Input,
  InputContainer,
  Section,
  TaskItem,
  TasksCreatedLabel,
  TasksList,
} from './styles';
import { FeedbackComponent } from '../../components/feedback';

import { AddButtonComponent } from '../../components/add-button';

import { Alert, TextInput } from 'react-native';
import { countTasksStatus } from '../../helpers/count-tasks';
import { RandomIdGenerator } from '../../helpers/random-id-generator';

export const HomeScreen: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selectedTasks, setSelectedTasks] = useState<ITaskSelection>({});
  const inputTaskRef = useRef<TextInput>(null);

  const handleAddTask = () => {
    if (!taskTitle.trim())
      return Alert.alert(
        'Tarefa vazia',
        'Tarefa que você esta tentando adicionar esta vazia, digite algo para adicionar!'
      );

    const isTaskAlreadyExists = tasks.some((task) => task.title === taskTitle);

    if (isTaskAlreadyExists)
      return Alert.alert(
        'Tarefa já cadastrada',
        'Você já adicionou uma tarefa com o mesmo nome!'
      );

    const id = RandomIdGenerator();

    setTasks((prevState) => [...prevState, { id: id, title: taskTitle }]);

    setTaskTitle('');

    setTimeout(() => {
      inputTaskRef.current?.blur();
    }, 50);
  };

  const handleCheckTask = (id: ITask['id']) => {
    setSelectedTasks((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const { totalCompletedTasks } = countTasksStatus(tasks, selectedTasks);

  const handleRemoveTask = (task: ITask) => {
    const newTasks = tasks?.filter((_task) => _task.id !== task.id);

    setTasks(newTasks);

    const { [task.id]: removed, ...rest } = selectedTasks;

    setSelectedTasks(rest);
  };

  return (
    <Container>
      <HeaderComponent />

      <InputContainer>
        <Input
          placeholder='Adicione uma nova tarefa'
          value={taskTitle}
          autoCorrect={false}
          onChangeText={setTaskTitle}
          onSubmitEditing={handleAddTask}
          inputRef={inputTaskRef}
        />

        <AddButtonComponent onPress={handleAddTask} />
      </InputContainer>

      <Section>
        <TasksCreatedLabel
          label='Criadas'
          countLabel={tasks.length.toString()}
        />

        <CompletedTasksLabel
          label='Concluídas'
          countLabel={totalCompletedTasks.toString()}
        />
      </Section>

      <Content>
        <TasksList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              key={item.id}
              selected={selectedTasks[item.id]}
              label={item.title}
              onPress={() => handleCheckTask(item.id)}
              onRemove={() => handleRemoveTask(item)}
            />
          )}
          ListEmptyComponent={() => (
            <FeedbackComponent
              title='Você ainda não tem tarefas cadastradas'
              description='Crie tarefas e organize seus itens a fazer'
            />
          )}
        />
      </Content>
    </Container>
  );
};
