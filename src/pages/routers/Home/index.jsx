import { React } from "react";
import { PageArea } from "./styled";
// import Songs from "./Song/songs.json";



const Home = () => {
    return (
        <PageArea>
            <div>
                    <img src={require("../../../images/2step.png")} alt="albumpic"></img>
            </div>
        </PageArea>  
    );
}

export default Home;