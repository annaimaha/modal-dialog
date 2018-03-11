import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import Adapter from 'enzyme-adapter-react-16';
import ModalPopup from './component/modalDialog/modalDialog';
import App from './App';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');  
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);  
});

const wrapper = shallow(<App />);
expect(wrapper.find('div').length).toBe(1);
expect(wrapper.find('h1').length).toBe(1);
expect(wrapper.find('h1').at(0).text()).toBe('Modal Dialog');
wrapper.find(ModalPopup).simulate('click');

