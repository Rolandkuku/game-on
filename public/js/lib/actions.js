export const ADD_USER = "ADD_USER";
export const SAVE_USER = "SAVE_USER";
export const UNSAVE_USER = "UNSAVE_USER";
export const FOCUS_USER = "FOCUS_USER";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

let nextUserId = 0;

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
            email: email ? email : "",
            focused: false,
            id: nextUserId++
        }
    };
};

export const focusUser = (index) => {
    return {
        type: FOCUS_USER,
        index: index
    };
};

export const saveUser = (index, saved) => {
    /* Saving user... please wait.. */
    if (saved) {
        return {
            type: UNSAVE_USER,
            index: index
        };
    }
    return {
        type: SAVE_USER,
        index: index
    };
};
