import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const id = 'elem';
  const str = <p>text</p>;
  const str1 = <><p>text</p><p>text</p></>; // обязательно обернуть в общий тег
  const str2 = <>
      <p>text</p><p>text</p>
    </>
  const str3 = ( 
    <>
      <p>text</p><p>text</p>
    </>
    );
  const show = true;
  let text;

  // if(show) {
  //   text = 'text1';
  // } else {
  //   text = 'text2';
  // }
  const isAuth = true;
  const hide = false;
  
  function square(num) {
    return num**2;
  }
  function cube(num) {
    return num**3;
  }
  function getDigitSum(num) {
    const str = num.toString();
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      const el = +str[i];
      sum = sum + el;
    }
    return sum
  }
  const sum = square(3) + cube(4);
  function showMess(name100) {
    alert('Hello! ' + name100);
  }
  function sayBay() {
    alert('GoodBay');
  }
  function funcEvent(arg1, arg2, e) {
    console.log(arg1, arg2, e);
  }
  const arr = [1,2,3];
  for (let i = 4; i <= 9; i++) {
    arr.push(i);
  }
  const res = arr.map(function(item, i) {
    return <p key={i}>{item}</p>
  })

  const users = [
    {name20:'user1', surn:'surn1', age:30},
    {name20:'user2', surn:'surn2', age:41},
    {name20:'user3', surn:'surn3', age:25},
  ]

  const usersInfo = users.map((item, i) => {
    return <li key={i}>
      {item.name20} {item.age}
    </li>
  })

  const rows = users.map(function(item, i) {
    return <tr key={i}>
      <td>{item.name20}</td>
      <td>{item.age}</td>
      </tr>
  });
// useState
  const [name, setName] = useState('your Name');
  const [age, setAge] = useState('40');
  function clickHandler() {
    setName('xxx');
  }
  let [inCart, setInCart] = useState(false);

  const [notBane, setBane] = useState(true);



  return (
    <>
      {/* <ul id={id + str} className={id}>
        <li>{str1}</li>
        <li>{str2}</li>
        <li>{str3}</li>
      </ul>
      <label htmlFor={str}>{show?'text1':'text2'}</label>
      <label htmlFor={str}>{show?<p>text1</p>:<p>text2</p>}</label>
      {/* если истина, то выведится text, если ложно то ничего не выведится с помощью оператора &&*/}
      {/* {show&&<p>text</p>}  */}
      {/* {isAuth&&<p>Вы авторизованы</p>} */}
      {/* если ложно, то выведится text, если истина то ничего не выведится с помощью оператора ! и &&*/}
      {/* {!hide&&<p>Не скрыто</p>}
      {sum} */}
      {/* <p>{getDigitSum(12345)}</p>
      <button onClick={() => showMess('Denis')}>say Hello</button>
      <button onClick={sayBay}>say Bay</button>
      <button onClick={event => funcEvent( 'ggg', event.target, 'rrr' )}>EventClick</button>
      <button onFocus={funcEvent}>EventFocus</button>
      {res}
      <ul> */}
        {/* {usersInfo}
      </ul> */}
      
      <table>
        <thead>
          <tr>
            <th>user</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      <span>{name}</span>
      <span>{age}</span>
      <button onClick={clickHandler}>useState</button>
      <button onClick={() => setAge('41')}>useState</button>
      <span>{inCart?'в корзине':'не в корзине'}</span>
      <p>{notBane?'not bane':'baned'}</p>
      <button style={{display: notBane ? 'none' : 'block'}} onClick={() => setBane(true)}>remove bane bane</button>
      <button style={{display: notBane ? 'block' : 'none'}} onClick={() => setBane(false)}>add to bane</button>
    </>
  );
}

export default App;