import { EMAIL_CHANGE, PASS_CHANGE} from '../Actions/types'

const INITIAL_STATE = { email: '', password: ''};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
       case EMAIL_CHANGE:
          return { ...state, email: action.payload}
       case PASS_CHANGE:
         return { ...state, password : action.payload}

      default:
      return state;
  }
}