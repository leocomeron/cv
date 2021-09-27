import Spanish from './components/Principal.js'
import { Route } from 'react-router-dom'


function App() {

    return (
        <div>
            <Route path='/' exact>
                <Spanish />
            </Route>
        </div >

    )
}

export default App;

