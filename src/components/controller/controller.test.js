    // src/App.test.js

    import React from 'react';
    import { shallow,mount } from 'enzyme';
    import Controller from './controller';

    const state = {
        launchType:"all",
        selectedFilter:"select",
        filterText:"",
        launchList:[],
        offset:0,
        limit:5,
        toggle:false,
        fliterOption:{"launch_success":{"selectedValue":"","displayName":"Successful Launch","values":[]},
                      "rocket_name":{"selectedValue":"","displayName":"Rocket Name","values":[]}}
    }

    const _onChangeHandler = function(){
        console.log("_onchangehadler");
    }

    const _onSelectFilterOption = function(){
        console.log("_onselectFilteroption");
    }

    const _onSelectHandler = function(){
        console.log("_onSelectHandler");
    }

    describe('App component', () => {
      let wrapper;
      beforeEach(()=>{
        wrapper = shallow(<Controller 
            launchType={state.launchList}
            selectedFilter={state.selectedFilter}
            filterText={state.filterText}
            filterOption={state.fliterOption}
            _onChangeHandler={_onChangeHandler}
            _onSelectHandler={_onSelectHandler}
            _onSelectFilterOption={_onSelectFilterOption}
            toggle={state.toggle}
          />);
      })
      test('content page is loaded', () => {
        const div = wrapper.find('#drawer');
        expect(div.length).toBe(1);
      });
      test('wrapper divsion for the controller', () => {
        const div = wrapper.find('.controller-radio');
        expect(div.length).toBe(3);
      });
      test('filter option render', () => {
        const div = wrapper.find('.filter-wrapper');
        expect(div.length).toBe(2);
      });
      test('filter option label render', () => {
        const div = wrapper.find('.filter-wrapper label');
        expect(div.length).toBe(2);
      });
      test('selected filter item render function', () => {
        const div = wrapper.find('.filter-selection');
        expect(div.length).toBe(2);
      });
      test('selected filter item render function', () => {
        const div = wrapper.find('.filter-selection option');
        expect(div.length).toBe(2);
      });
    });