import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'

function App() {
  return (
  <>
    <Head>pratice</Head>
    <WrapCon>
      content
    </WrapCon>
    </>  
  );
}
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
`
export default App;
