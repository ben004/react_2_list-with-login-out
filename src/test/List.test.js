import React from 'react'
import {render, cleanup, fireEvent } from '@testing-library/react'
import List from '../List'
const renderComponent = (props = {}) => 
  render(<List {...props}>list</List>)
 afterEach(cleanup)
 describe('list ', () =>{
      it('should match a snapshot', () => {
      const tree = renderComponent()
      expect(tree).toMatchSnapshot()
     });
     it('should be enabled', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId("add_button").textContent).toBe("Add item");
        expect(getByTestId("delete_button").textContent).toBe("delete item");
        expect(getByTestId("logout_button").textContent).toBe("logout");
      });  
      it('should add items properly', () => {
        const { getByTestId }=renderComponent()
        const input=getByTestId('data')
        const btn = getByTestId('add_button')
        fireEvent.change(input, {target : { value : " initial "}})
        fireEvent.click(btn)
        expect(getByTestId('values').textContent).toBe(" initial ")
      })
      it('should make empty', () => {
          const { getByTestId }=renderComponent()
          const input=getByTestId('data')
          const btn = getByTestId('add_button')
          const clear=getByTestId('clear_button')
          fireEvent.change(input, {target : { value : " initial "}})
          fireEvent.click(btn)
          fireEvent.click(clear)
          expect(getByTestId("values").textContent).toBe("")
      })
      
      
});
   
