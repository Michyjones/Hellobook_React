/* import expect from 'expect';**/
import loginUser from '../../reducers/usersReducers';
import * as types from '../../actions/actionTypes';

describe('Login reducer', () => {
    
    it('should return the initial state', () => {
       expect(loginUser(undefined, {})).toEqual({
           loggedIn: localStorage.getItem('loggedIn'),
           token: localStorage.getItem('token')
      });
   });
    it('should handle LOGIN_USER', () => {
        expect(
            loginUser({}, {
                type:types.CREATE_USER_SUCCESS,
            })
        ).toEqual({details: undefined});
    }); 
});


  