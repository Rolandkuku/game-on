import { combineReducers } from "redux";
import {
    VisibilityFilters,
    SAVE_USER,
    ADD_USER,
    SET_VISIBILITY_FILTER,
    UNSAVE_USER,
    FOCUS_USER
} from "./actions";
const { SHOW_ALL, SHOW_SAVED } = VisibilityFilters;

const initialSate = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    users: []
};

const users = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [
                ...state,
                action.user
            ];
            break;
        case SAVE_USER:
            return state.map((user, index) => {
                if (index === action.index) {
                    return {
                        ...user,
                        saved: true
                    };
                }
                return user;
            });
            break;
        case UNSAVE_USER:
            return state.map((user, index) => {
                if (index === action.index) {
                    return {
                        ...user,
                        saved: false
                    };
                }
                return user;
            });
            break;
        case FOCUS_USER:
            return state.map((user, index) => {
                let focused = index === action.index ? true : false;
                return {
                    ...user,
                    focused: focused
                };
            });
        default:
            return state;

    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;
        default:
            return state;
    }
};

const userApp = combineReducers({
    visibilityFilter,
    users
});

export default userApp;
