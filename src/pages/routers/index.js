import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { PageArea } from "./styled";

import Home from "./Home";
import NotFound from "./NotFound";


export default () => {
    return (
        <PageArea>
           <div className="container-musicas">

                <div className="pages">
                    <Switch>

                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route>
                            <NotFound />
                        </Route>

                    </Switch>
                </div>

            </div>

            <div className="menu-container">
                
                <Link to="/">
                    <div className="button"></div>
                </Link>
                <Link to="">
                    <div className="button"></div>
                </Link>
                <Link to="">
                    <div className="button"></div>
                </Link>
                
            </div>
        </PageArea>
        
    );

}