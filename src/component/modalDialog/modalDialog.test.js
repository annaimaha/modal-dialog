import React from 'react';
import ReactDOM from 'react-dom';
import { shallow,configure,render } from 'enzyme';
import ModalDialog from './modalDialog';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


it('renders without crashing', () => {
    const div = document.createElement('div');  
    ReactDOM.render(<ModalDialog />, div);
    ReactDOM.unmountComponentAtNode(div);  
});

const wrapper = shallow(<ModalDialog />);
expect(wrapper.find('div').length).toBe(4);
wrapper.find('button').simulate('click')
expect(wrapper.props().data).toBe('something');

