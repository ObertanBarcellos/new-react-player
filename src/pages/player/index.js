import { React } from "react";
import { PageArea } from "./styled";

const Player = () => {
    return (
        <PageArea>
            <img src="assets/imgs/boca rosa.png" />
            <div class="descricao">
                <h2>---/---/---</h2>
                <i>---/---</i>
            </div>
            <div class="duracao">
                <div class="barra">
                    <progress value="0" max="1"></progress>
                </div>
                <div class="tempo">
                    <p class="inicio">0:00</p>
                    <p class="fim">0:00</p>
                </div>
            </div>
            <div class="player">
                <i class="fas fa-step-backward setas anterior"></i>
                <i class="fas fa-play-circle botao-play"></i>
                <i class="fas fa-pause-circle botao-pause"></i>
                <i class="fas fa-step-forward setas proximo"></i>
            </div>

            <div id="player2">
                <div class="slider-cont">

                    <div class="slider">
                        <input type="range" min="0" max="100" value="50" />
                        <progress min="0" max="100" value="50"></progress>
                    </div>

                    <div class="sliderValue">
                        50
                    </div>

                </div>
            </div>
        </PageArea>
        
    );
}

export default Player;