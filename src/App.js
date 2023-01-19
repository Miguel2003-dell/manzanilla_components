import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  color: white;
  background: black;
`;

function App() {
  return (
    
    <div className="App">
      <h1>Miguel Angel Manzanilla</h1>
      <h2>Practica Componentes</h2>
  <div class= "si">
    <Button as="a" href="https://utd.edu.mx">UTD</Button>
    <Button as="a" href="https://github.com/Miguel2003-dell">Mi Git</Button>
    <Button as="a" href="https://www.facebook.com/Manzanilla.750">Red Social</Button>
  </div>
    </div>

  );
}

export default App;
