// @flow
import React, { Component } from 'react';
import type { Node } from 'react';
import './modal.css';

type Props = {
  buttonText: string,
  buttonClass: string,
  children?: Node,
};

type State = {
  popupVisible: boolean,
  popup: string,
};

export default class ModalDialog extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      popupVisible: false,
      popup: 'in-visible',
    };
  }
  modal: any;

  handleClick = () => {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      popupVisible: !prevState.popupVisible,
      popup: !prevState.popupVisible ? 'visible' : 'in-visible',
    }));
  };

  handleOutsideClick = (e: Event) => {
    
    // ignore clicks on the component itself

    if (this.modal.contains(e.target)) {
      return;
    }
    this.handleClick();
  };

  render = () => {
    return (
      <div className="modal-box">
          <button onClick={this.handleClick} className={this.props.buttonClass}>
            {this.props.buttonText}
          </button>
        <div className={'md-modal ' + this.state.popup}>
          {/*Modal content*/}
          <div
            className="md-modal-content"
            ref={modal => {
              this.modal = modal;
            }}
          >
            <span onClick={this.handleClick} className="md-close">
              &times;
            </span>
            <div>{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  };
}