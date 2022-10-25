import {Provider} from "react-redux";
import {store} from "../state";
import RepositoriesList from './RepositoriesList';

const App = () => {
    return <Provider store={store}>
        <div>
            <h3>Search for a package</h3>
           < RepositoriesList />
        </div>
    </Provider>
};

export default App;
