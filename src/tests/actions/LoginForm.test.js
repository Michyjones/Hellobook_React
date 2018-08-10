import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import loginUser from '../../actions/usersActions';
import * as types from '../../actions/actionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('login action tests', () => {
    beforeEach(() => {
        moxios.install();
    });

    afterEach(() => {
        moxios.uninstall();
    });

    const loginInput = {"email":"test@gmail.com", "passoword":"qwerty@123"};

    it('creates ADD_RESPONSE_MESSAGE action after successfully login', done => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
                response: {
                    message: 'You have successfully login!'
                }
            });
        });

        const expectedAction = [
            {
              status: 200,
                message: {
                    message: 'You have successfully login!'
                },
                type: types.LOGIN_USER_SUCCESS
            }
        ];

        const store = mockStore({ user: {} });

        return store.dispatch(loginUser(loginInput)).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
            done();
        });
    });

    // it('creates ADD_RESPONSE_MESSAGE action after successfully login', done => {
    //     moxios.wait(() => {
    //         const request = moxios.requests.mostRecent();
    //         request.respondWith({
    //             response: {
    //                 message: 'Invalid username or password!',
    //                 status_code: 401
    //             }
    //         });
    //     });

    //     const expectedAction = [
    //         {
    //             message: {
    //                 message: 'Invalid username or password!',
    //                 status_code: 401
    //             },
    //             type: types.ADD_RESPONSE_MESSAGE
    //         }
    //     ];

    //     const store = mockStore({ login: [] });

    //     return store.dispatch(actions.doLogin(loginInput)).then(() => {
    //         expect(store.getActions()).toEqual(expectedAction);
    //         done();
    //     });
    // });
});