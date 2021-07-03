/* eslint-disable */
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목,글제목변경] = useState(['남자코트추천','젤리 맛집','요거트맛집'  ]); 
  let [좋아요, 좋아요변경] = useState(0)
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경 ] = useState(0)
  let [입력값, 입력값변경] = useState('')

  function 반복된UI(){

    var 어레이 = [];
    for (var i =0; i < 3; i++){
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  
  let posts = '강남 고기 맛집';
  return (
    <div className="App">
      <div className='black-nav'>
        <div> 개발 Blog</div>
      </div>      
      {/* <Profile></Profile> */}
      { 
        글제목.map(function(글,i ){
          return (
          <div className="list" key ={i}>
          <h3 onClick={ () => {누른제목변경(i)}}> {글} <span onClick={ () => {좋아요변경(좋아요+1)} }>👍</span> {좋아요} </h3>
          <p> 2월 17일 발행 </p>
          <hr/>
        </div>
        )
        })
      }
      <div className="publish"> 
        <input onChange={(e) =>{ 입력값변경(e.target.value) }}/>
        <button onClick={() => {
          var arrayCopy = [...글제목]
          arrayCopy.unshift(입력값) // 맨앞에 자료 추가 
          글제목변경(arrayCopy)
        }}>저장</button>
      </div>
      <div>
        <input onChange={(e) =>{ 입력값변경(e.target.value) }}></input>
        <button onClick= { ()=>{modal변경(!modal)}}>열고 닫는 버튼</button>
      </div>

      
      
 
      {
        modal === true
        ?  <Modal 글제목={글제목} 누른제목={누른제목}></Modal>
        : null
      } 
      
    </div>
  );
}


// 컨포넌트 만들기
function Modal(props){
  return(
      <div className = "modal"> 
        <h2>{ props.글제목[props.누른제목]} </h2>
        <p>날씨</p>
        <p>상세 내용</p>
      </div>
  )
}

class Profile extends React.Component{
  constructor(){
    super();
    this.state = {name : 'Kim', age : 10}
  }

  
  render(){
    return(
      <div>
        <h3>프로필입니다</h3>
        <p>저는{this.state.name}</p>
        <button onClick={() =>{this.setState({name:'Park'})}}>버튼</button>
        </div>
    )
  }
}

export default App;
