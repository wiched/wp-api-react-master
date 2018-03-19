import {render}             from 'react-dom';
import DataActions          from 'flux/actions/DataActions.js';

import Home                 from 'components/Home';
import About                from 'components/About';
import Contact              from 'components/Contact';
import Header               from 'components/Header';
import Projects             from 'components/Projects';
import WhatWeDo             from 'components/WhatWeDo';
import WeWorkWith           from 'components/WeWorkWith';
import NotFound             from 'components/NotFound';

import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';


class AppInitializer {

    templates = {
        'about': About,
        'contact': Contact,
        'projects': Projects,
        'what-we-do': WhatWeDo,
        'we-work-with': WeWorkWith,
        '404': NotFound,
    }

    buildRoutes(data){
        return data.pages.map((page, i) => {
            return(
                <Route
                    key={i}
                    component={this.templates[page.slug]}
                    path={`/${page.slug}`}
                    exact
                />
            )
        })
    }

    run() {
        DataActions.getPages((response)=>{
            render(
                <Router>
                    <div>
                        <Header />

                        <Switch>
                            <Route path="/" component={ Home } exact />

                            {this.buildRoutes(response)}
                            <Route path="/404" component={ NotFound } exact />
                            <Route render={() => { return <Redirect to="/404" /> }} />
                        </Switch>
                    </div>
                </Router>

                , document.getElementById('app')
            );
        });
    }
}

new AppInitializer().run();
