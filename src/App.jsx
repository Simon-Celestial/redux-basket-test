import {MainRouter} from "./router";
import {BasketProvider} from "./context/BasketContext";
import {CounterApp} from "./CounterApp.jsx";
import {Provider} from "react-redux";
import {store} from "./redux/store.js";

function App() {
    return (
        // <BasketProvider>
        // </BasketProvider>
        <Provider store={store}>
             <MainRouter />
            {/*<BasketProvider>*/}
            {/*    <CounterApp/>*/}
            {/*</BasketProvider>*/}
        </Provider>
    );
}

export default App;
