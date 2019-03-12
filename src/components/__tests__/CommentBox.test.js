import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'root';


let wrapped;

beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button ', () => {
    
    console.log(wrapped.find('textarea'));
    console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});

beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment'}
    });
});

describe('The text area ', () => {
it('has a text area that users can type in', () => {

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    
});

it('when form is submitted textarea gets emptied', () => {
    
    wrapped.update();

    wrapped.find('form').simulate('submit');

    wrapped.update();


    expect(wrapped.find('textarea').prop('value')).toEqual('');
    
});

});