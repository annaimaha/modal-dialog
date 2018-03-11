import React, { Component } from 'react';
import ModalPopup from './component/modalDialog/modalDialog';
import './App.css';
/**
 * App component
 */
const Header = () => (
  <div className="dialogBoxHeader">
    <p>What is Lorem Ipsum?</p>
  </div>
);

const Content = () => (
  <div className="dialogBoxContent">
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
      type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
      the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
  </div>
);

class App extends Component {
  
  render() {
    return (
      <div>
        <h1>Modal Dialog</h1>
        <ModalPopup buttonText="Click to view Dialog" buttonClass="btn-dialog">
          <Header />
          <Content />
        </ModalPopup>
      </div>
    );
  }
}

export default App;
