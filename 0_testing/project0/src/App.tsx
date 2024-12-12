import { ChangeEvent, ReactElement, useState } from 'react';
// import Dashboard from './components/dashboard/Dashboard';
// import { userContext } from './components/context/userContext'
// import { SignUp } from './components/signUp';

export default function App(): ReactElement {
  // const userY = {
  //   name: 'Иван Петров',
  //   email: 'email@ya.ru'
  // }
  // const [user] = useState({name: userY.name, email: userY.email});

  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);

  function handleChange1(e: ChangeEvent<HTMLInputElement>): void {
    setValue1(+e.target.value);
  }
  function handleChange2(e: ChangeEvent<HTMLInputElement>): void {
    setValue2(+e.target.value);
  }

  const getResult = () => {
    setResult(value1 + value2);
  }

  return (
    <>
      <select value={result} name="" id="">
        <option value="">text1</option>
        <option value="">text2</option>
        <option value="">text3</option>
      </select>
      <input value={value1} onChange={handleChange1} />
      <input value={value2} onChange={handleChange2} />
      <button onClick={getResult}>button</button>
      <p>{result}</p>
      {/* <userContext.Provider value={user}>
      <Dashboard/> 
    </userContext.Provider>
    {/* <Dashboard/> */}
      {/* <SignUp/> */}
    </>
  )
}
// import { ReactElement, useState } from 'react';
// import { createTodos } from './components/todo/utils';
// import TodoList from './components/todo/TodoList';

// const todos: { id: number, text: string, completed: boolean }[] | '[]'= createTodos();

// export default function App():ReactElement {
//   const [tab, setTab] = useState('all');
//   // const [isDark, setIsDark] = useState(false);
//   return (
//     <>
//       <button onClick={() => setTab('all')}>
//         All
//       </button>
//       <button onClick={() => setTab('active')}>
//         Active
//       </button>
//       <button onClick={() => setTab('completed')}>
//         Completed
//       </button>
//       <br />
//       <label>
//         <input
//           type="checkbox"
//           // checked={isDark}
//           // onChange={e => setIsDark(e.target.checked)}
//         />
//         Dark mode
//       </label>
//       <hr />
//       <TodoList
//         todos = {todos}
//         tab={tab}
//         // theme={isDark ? 'dark' : 'light'}
//       />
//     </>
//   );
// }
