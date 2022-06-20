import React from "react";
import { Switch, Route } from "react-router-dom";
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
        </PageArea>
        
    );

}