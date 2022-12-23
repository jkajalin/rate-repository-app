/* eslint-disable no-unused-vars */
/* eslint-disable jest/expect-expect */

import { render, fireEvent, waitFor } from '@testing-library/react-native';
import {expect, jest, test} from '@jest/globals';
import { LoginForm } from '../../components/SignIn';
// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const mockHandler = jest.fn()
      mockHandler.mockImplementation( async ( values ) => { const { username, password } = values; })

      const loginRender = render( <LoginForm onSubmit={ mockHandler } /> );

      const submitBtn = loginRender.getByText('Sign in')

      fireEvent.changeText( loginRender.getByPlaceholderText('Username'), 'kalle' );
      fireEvent.changeText( loginRender.getByPlaceholderText('Password'), 'password' );
      fireEvent.press( submitBtn );

      await waitFor( () => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(mockHandler).toHaveBeenCalledTimes(1)        

      });

      expect(mockHandler.mock.calls[0][0]).toEqual({
        username: 'kalle',
        password: 'password',
      });

    });
  });
});