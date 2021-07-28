import {createGlobalStyle} from 'styled-components'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <GlobalStyle />
      <Profile/>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
    background: #555;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default App;