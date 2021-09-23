// import FotoPerfil from '../src/FotoPerfil.jpg'
// import IconReact from '../src/IconReact.png'
// import IconMongo from '../src/IconMongo.png'
// import classes from '../src/App.module.css'

import Spanish from '../src/components/Spanish.js'
import English from '../src/components/English.js'

import { Route, Switch } from 'react-router-dom'

function App() {
    return (
        <div>
            <Route path='/' exact>
                <Spanish />
            </Route>
            <Route path='/en'>
                <English />
            </Route>
        </div >

    )
}

export default App;
