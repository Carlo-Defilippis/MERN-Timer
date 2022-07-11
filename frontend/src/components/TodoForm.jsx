import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../features/todos/todoSlice'

function TodoForm() {
  const [text, setText] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createTodo({ text }))
    setText('')
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <input
            type='text'
            name='text'
            id='text'
            placeholder='Enter a to-do...'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add
          </button>
        </div>
      </form>
    </section>
  )
}

export default TodoForm
