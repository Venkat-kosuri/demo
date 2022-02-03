import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './pages/Home'
import PMP from './pages/PMP'
import PRINCE from './pages/PRINCE'
import BAC from './pages/BAC'
import PMC from './pages/PMC'
import ITIL from './pages/ITIL'
import BAM from './pages/BAM'
import PCT from './pages/PCT'
import TIB from './pages/TIB'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path ='/pmp' component={PMP} />
          <Route path ='/prince' component={PRINCE} />
          <Route path ='/bac' component={BAC} />
          <Route path ='/pmc' component={PMC} />
          <Route path ='/itil' component={ITIL} />
          <Route path ='/bam' component={BAM} />
          <Route path ='/pct' component={PCT} />
          <Route path ='/tib' component={TIB} />
         
        </Switch>
      </BrowserRouter>
      
    </div>
  )
}

export default App
