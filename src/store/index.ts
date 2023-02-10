import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {rootReducer} from "./reducer";
import {composeWithDevTools} from '@redux-devtools/extension';

const composeEnhancers = composeWithDevTools({

})

export const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
)



