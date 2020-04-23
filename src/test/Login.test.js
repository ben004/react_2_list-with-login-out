import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from '../Login'
import '@testing-library/jest-dom/extend-expect'
afterEach(cleanup)
const renderComponent = (props = {}) => 
  render(<Login {...props}>login</Login>)
describe("login",()=>{
it('should take a snapshot', () => {
    const { asFragment } = renderComponent();
    
    expect(asFragment(<Login />)).toMatchSnapshot();
   })
   it('should be enabled', () => {
    const { getByTestId } = renderComponent();
    expect(getByTestId("login_button").textContent).toBe("login");
   });
  it("should get user value", () => {
        const { getByTestId } = renderComponent();
        const btn=getByTestId('login_button')
        fireEvent.click(btn)
        expect(getByTestId("para").textContent).toBe("*Fill the data for login");
  });
  it("should get user value", () => {
    const { getByTestId } = renderComponent();
    const btn=getByTestId('login_button')
    const user = getByTestId('user_name')
    const password = getByTestId('password')
    fireEvent.change(user , { target : { value : 'beniel '}})
    fireEvent.change(password , { target : { value : '123456 '}})
    fireEvent.click(btn)
    expect(getByTestId("para").textContent).toBe("");
});
  

  
});

   