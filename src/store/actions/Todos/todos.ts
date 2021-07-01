import {ThunkDispatch} from 'redux-thunk';
import IAction from '../../../models/Action';
import ITodo from '../../../models/Todo';
import State from '../../../models/State';
import {ACTUALIZAR_TODOS, ACTUALIZAR_TODO_SELECCIONADO} from '../actionTypes';
import axios from 'axios';

export const actualizarTodos = (payload: ITodo[]) => ({
  type: ACTUALIZAR_TODOS,
  payload,
});

export const actualizarTodoSeleccionado = (payload: ITodo | null) => ({
  type: ACTUALIZAR_TODO_SELECCIONADO,
  payload,
});

export const fetchTodos =
  () => async (dispatch: ThunkDispatch<State, null, IAction>) => {
    try {
      const data = await axios.get(
        'https://jsonplaceholder.typicode.com/todos',
      );

      dispatch(actualizarTodos(data.data));
    } catch (error) {
      console.error(error);
    }
  };
