import { EMAIL_CHANGE, PASS_CHANGE} from './types'

export const emailChanged = (text) => {
  return {
      type: EMAIL_CHANGE,
      payload: text
  };
};

export const passwordChanged = (text) => {
  return {
      type: PASS_CHANGE,
      payload: text
  };
};

