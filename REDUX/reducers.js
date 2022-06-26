import * as all from './actions'

const initialState = {
    counter:10,
}

const reducerFunc = (state=initialState, action) => {
    switch(action.type){
        case all.CounterAzalt: {
            return {
                counter:state.counter-1
            }
        }
        case all.CounterArttir: {
            return {
                counter:state.counter+1
            }
        }

        default: return state;
    } 

}

export {reducerFunc}