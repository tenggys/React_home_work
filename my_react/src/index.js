import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
 

const price = 12;
const obj = { name: "цена возможно не актуальна" };
const films = [
  {title: "Сосна"},
  {title: "Дуб"},
  {title: "Ель"},
];


const Info = ({title}) => {
  return (
   <div className='card'>
      <h1>Товар: {title}</h1>
      <h2>Цена: {price}</h2>
      <h2>Примечание: {obj.name}</h2>
   </div>)
}

const Films = () => {
  return (
   <div className='description'>
      <h2>Материал:</h2>
      {films.map(film => <div>
        <h2>{film.title}</h2>
        </div>)}
   </div>)
}


const FunctionComponent = ({ onClick }) => {
  return (
    <div>
      <Info title="Трубка" />
      <Films />
      <button className='button' onClick={() => onClick("FunctionComponent")}>Нажми</button>
    </div>
  );
};


class ClassComponent extends React.Component {
  render() {
    console.log("class props", this.props);

    const {onClick} = this.props

    return (
      <div>
        <Info title="ClassComponent"/>
        <Films />
        <button className='button' onClick={() => onClick("ClassComponent")}>Нажми</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent test={{ age: 12}} 
    onClick={(target) =>{
      console.log("click from:", target);
    }} 
    />
    <hr />
    <ClassComponent 
    test={{ age: 12}} 
    test2={[]} 
    test3={false} 
    test4={null} 
    onClick={(target) =>{
      console.log("click from:", target);
    }} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);
/*
import React from 'react';
import ReactDOM from 'react-dom';
//import { App } from './App';


import "./index.css";

const age = 12;
const obj = { name: "test" };
const arr2 = [1, 2, 3];
const films = [
  {title: "film 1", age:2020},
  {title: "film 2", age:2021},
];



const Info = ({title}) => {
  return (
   <div>
      <h1>Товар: {title}</h1>
      <h2>Описание: {age}</h2>
      <h2>Цена {obj.name}</h2>
      {arr2}
   </div>)
}

const Films = () => {
  return (
   <div>
      <h2>Films:</h2>
      {films.map(film => <div>
        <h2>{film.title}</h2>
        <h2>{film.age}</h2>
        </div>)}
   </div>)
}


const FunctionComponent = ({ onClick }) => {
  return (
    <div>
      <Info title="Первый" />
      <Films />
      <button onClick={() => onClick("FunctionComponent")}>click</button>
    </div>
  );
};


class ClassComponent extends React.Component {
  render() {
    console.log("class props", this.props);

    const {onClick} = this.props

    return (
      <div>
        <Info title="ClassComponent"/>
        <Films />
        <button onClick={() => onClick("ClassComponent")}>click</button>
      </div>
    )
  }
}



ReactDOM.render(
  <React.StrictMode>
    <FunctionComponent test={{ age: 12}} 
    onClick={(target) =>{
      console.log("click from:", target);
    }} 
    />
    <hr />
    <ClassComponent 
    test={{ age: 12}} 
    test2={[]} 
    test3={false} 
    test4={null} 
    onClick={(target) =>{
      console.log("click from:", target);
    }} 
    />
  </React.StrictMode>,
  document.getElementById('root')
);

*/