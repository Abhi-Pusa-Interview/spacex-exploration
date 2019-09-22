    // src/App.test.js

    import React from 'react';
    import { shallow,mount } from 'enzyme';
    import App from './App';

    describe('App component', () => {
      let wrapper;
      beforeEach(()=>{
        wrapper = shallow(<App />);
      })
      test('load more button is rendered', () => {
        const text = wrapper.find('#loadmorebtn').text();
        expect(text).toEqual('LoadMore');
      });
      test('load more button is rendered', () => {
        const btn = wrapper.find('#toggle-btn');
        expect(btn.length).toBe(1);
      });
    });