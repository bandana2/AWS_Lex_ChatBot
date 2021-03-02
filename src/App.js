import logo from './logo.svg';
import './App.css';
import { Interactions } from 'aws-amplify';
import {AmplifyChatbot} from "@aws-amplify/ui-react";

function App() {
  
  return (
    <div className="App">
      <AmplifyChatbot
        botName="TestingBot_dev"
        botTitle="My ChatBot"
        welcomeMessage="Hello"
      />
    </div>
  );
}

export default App;
