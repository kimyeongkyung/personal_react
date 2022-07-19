import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'

function App() {
  return (
  <>
  
  <Top>top menu</Top>
    <Head>header</Head>
    <WrapCon>
      <SubWrap>
      <div>con1</div>
      <div>con2</div>
      <div>con3</div>
      <div>con4</div>
      <div>con5</div>
      <div>con6</div>
      </SubWrap>
    </WrapCon>
    <Write>
      글쓰기
    </Write>
    </>  
  );
}

const Top = styled.div`
width:100vw;
height:30px;
background-color:#666;
color:#fff;
`
const Head = styled.div`
  width:100vw;
  height:100px;
  background-color:#4DB0DB;
  font-weight:bold;
  font-size:30px;
  color:#fff; 
  margin:auto;
  text-align:center;
  line-height:100px;
`
const WrapCon = styled.div`
widht:100%;
height:100vh;
text-align:center;
background-color:#C5DFFF;
`

const SubWrap = styled.div`
background-color:blue;
margin:auto;
width:90%;
display:inline-block;
padding:20px;
div{
  text-align:center;
  width:400px;
  height:200px;
  border-radius:10px;
  background-color:#fff;
  padding:10px;
  float:left;
  margin-right:10px;
  margin-top:22px;
  
}
`
const Write = styled.div`
width:100px;
height:100px;
background-color:#2465B0;
border-radius:50px;
line-height:100px;
text-align:center;
color:#fff;
`

export default App;