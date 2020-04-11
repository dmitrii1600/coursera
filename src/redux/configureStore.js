import {createStore, combineReducers} from 'redux';
import {dishesReducer} from "./dishesReducer";
import {commentsReducer} from "./commentsReducer";
import {promotionsReducer} from "./promotionsReducer";
import {leadersReducer} from "./leadersReducer";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: dishesReducer,
            comments: commentsReducer,
            promotions: promotionsReducer,
            leaders: leadersReducer,
        })
    );

    return store;
}