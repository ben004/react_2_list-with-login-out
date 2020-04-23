import React from 'react'
import {render, cleanup} from '@testing-library/react'
import List from '../List'
const renderComponent = (props = {}) => 
  render(<List {...props}>list</List>)
 afterEach(cleanup)
 describe('list ', () =>{
      it('should match a snapshot', () => {
      const { asFragment } = renderComponent()
      
      expect(asFragment(<List />)).toMatchSnapshot()
     });
     it('should be enabled', () => {
        const { getByTestId } = renderComponent();
        expect(getByTestId("add_button").textContent).toBe("Add item");
        expect(getByTestId("delete_button").textContent).toBe("delete item");
        expect(getByTestId("logout_button").textContent).toBe("logout");
      });
});
   
