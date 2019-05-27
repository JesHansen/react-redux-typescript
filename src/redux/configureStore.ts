import { createStore, applyMiddleware, Store, compose } from "redux";
import rootReducer, { AppState } from "./index";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

export default function configureStore(
  initialState: AppState
): Store<AppState> {
  const composeEnhancers =
    (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; // Adds support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
