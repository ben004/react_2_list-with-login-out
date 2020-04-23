import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
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
  
});
   
