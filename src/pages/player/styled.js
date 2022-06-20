import styled from 'styled-components';

export const PageArea = styled.div`
    width: 350px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 300px;
        height: 300px;
        border-radius: 15px;
        border: 5px solid rgb(100, 100, 100);
    }

    h2 {
        margin-bottom: 5px;
    }

    .descricao {
        width: 300px;
    }

    .duracao {
        width: 300px;
        margin-top: 25px;
    }

    .barra {
        width: 300px;
        height: 6px;
        border: 1px solid #eee;
        background-color: rgb(0, 132, 255);
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    
    progress {
        height: 6px;
        width: 0%;
        background-color: rgb(27, 145, 255);
    }
        
    .tempo {
        display: flex;
        width: 300px;
        justify-content: space-between;
    }

    .player {
        width: 300px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 15px;
    }

    .botao-play, .botao-pause {
        font-size: 40px;
        cursor: pointer;
    }

    .setas {
        font-size: 20px;
        cursor: pointer;
    }

    .botao-pause {
        display: none;
    }
    
    .slider-cont{
        border-radius: 50px;
        display: flex;
        align-items: center;    
        justify-content: center;
        
    }
    
    .slider{
        position: relative;
        width: 200px;
        height: 4px;
    }
    
    .slider input[type="range"]{
        position: absolute;
        left: -2px;
        top: 0;
        width: 200px;
        height: 4px;
        -webkit-appearance: none;
        background: transparent;
        z-index: 99;
    }
    
    .slider input::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        background-color: rgb(98, 98, 98);
        border-radius: 10px;
        border: 1px solid white;
        cursor: pointer;
    }
    
    .slider progress{
        width: 200px;
        height: 4px;
        -webkit-appearance: none;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .slider progress::-webkit-progress-bar{
        background: rgb(27, 145, 255);
    }
    
    .slider progress::-webkit-progress-value{
        background:rgb(61, 61, 61);
    }
    
    .sliderValue {
        margin-left: 5px;
    }
    
`;