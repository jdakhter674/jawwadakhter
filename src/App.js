import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Project from './pages/Project'
import Footer from './pages/Footer'
import TopBar from './pages/TopBar'
import About from './pages/About'



const App = () => {
    return (
        <div>

            <Router>
                {/* <Navbar /> */}
                <TopBar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/project" component={Project} />
                    <Route path="/about" component={About} />
                </Switch>

                <Footer />
            </Router>

        </div>
    )
}

export default App
//http://benyreact.ibthemespro.com/home-text-loop#about