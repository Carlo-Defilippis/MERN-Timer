import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import Spinner from '../components/Spinner';
import { getTodos, reset } from '../features/todos/todoSlice';

export default function Home() {
  const dispatch = useDispatch();

  const { todos, isLoading, isError, message } = useSelector(
    (state) => state.todos
  );

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    dispatch(getTodos())

    return () => {
      dispatch(reset())
    }
  }, [isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className='main'>
      <TodoForm />

      <section className='content'>
        {todos.length > 0 ? (
          <div className='todos'>
            {todos.map((todo) => (
              <TodoItem key={todo._id} todo={todo} />
            ))}
          </div>
        ) : (
          <h3>No to-dos</h3>
        )}
      </section>
    </div>
  );
}