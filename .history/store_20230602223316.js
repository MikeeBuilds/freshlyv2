import { createStore } from ''
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
