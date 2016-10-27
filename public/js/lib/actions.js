export const ADD_USER = "ADD_USER";
export const SAVE_USER = "SAVE_USER";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";


export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_SAVED: 'SHOW_SAVED',
  SHOW_PENDING: 'SHOW_PENDING'
}


export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
};

export const addUser = (name, email) => {
    return {
        type: ADD_USER,
        user: {
            saved: false,
            name: name,
            email: email
        }
    };
};

export const saveUser = (index) => {
    /* Saving user... please wait.. */
    return {
        type: SAVE_USER,
        index: index
    };
};
