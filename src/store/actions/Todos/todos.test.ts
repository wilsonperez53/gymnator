import ITodo from '../../../models/Todo';
import {ACTUALIZAR_TODOS, ACTUALIZAR_TODO_SELECCIONADO} from '../actionTypes';
import {actualizarTodos, actualizarTodoSeleccionado, fetchTodos} from './todos';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import axios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockTodoArray: ITodo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
];

jest.mock('axios');

describe('Todos Actions', () => {
  it('actualizarTodos', () => {
    const action = actualizarTodos(mockTodoArray);
    expect(action).toEqual({type: ACTUALIZAR_TODOS, payload: mockTodoArray});
  });

  it('actualizarTodoSeleccionado maneja un todo', () => {
    const action = actualizarTodoSeleccionado(mockTodoArray[0]);
    expect(action).toEqual({
      type: ACTUALIZAR_TODO_SELECCIONADO,
      payload: mockTodoArray[0],
    });
  });

  it('actualizarTodoSeleccionado maneja un null', () => {
    const action = actualizarTodoSeleccionado(null);
    expect(action).toEqual({type: ACTUALIZAR_TODO_SELECCIONADO, payload: null});
  });

  it('fetchTodos', () => {

    axios.get.mockImplemenetation(() => Promise.resolve(mockTodoArray))
    const store = mockStore({todos: []});
    store.dispatch(fetchTodos());
    const actions = store.getActions();

    const state = store.getState();
    expect(state.todos).toEqual(mockTodoArray)
    expect(actions).toContainEqual({
      type: ACTUALIZAR_TODOS,
      payload: mockTodoArray,
    });
  });
});
