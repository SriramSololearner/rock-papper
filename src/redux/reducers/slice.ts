
import { createSlice } from "@reduxjs/toolkit";
import player1Rock from "../../assets/player-1-rock.png";
import player1Scissor from "../../assets/player1-scissor.png";
import player1Paper from '../../assets/player1-paper.png';
import player2Rock from "../../assets/player2-rock.png";
import player2Paper from "../../assets/player2-paper.png";
import player2Scissor from "../../assets/player2-scissor.png";


export const player1Choices = [player1Rock, player1Paper, player1Scissor];
export const player2Choices = [{
    id: 0,
    name: "rock",
    image: player2Rock
}, {
    id: 1, name: "paper",
    image: player2Paper,
}, {
    id: 2,
    name: "scissors",
    image: player2Scissor
}]

export interface Istate {
    player1Win: number;
    player2Win: number;
    player2Data: string;
    equal: number;
    round: number;
    player1Data: string;
}

const initialState: Istate = {
    player1Data: "",
    player2Data: "",
    player1Win: 0,
    player2Win: 0,
    equal: 0,
    round: 0
}

const Slider = createSlice({
    name: "slider",
    initialState,
    reducers: {
        handlerAdd: (state, action) => {
            state.player1Data = action.payload.player1
            state.player2Data = action.payload.player2.image
        },
        equalPoints: (state) => {
            state.equal += 1;
            state.round += 1;
        },
        handlerPlayer2Score: (state) => {
            state.player2Win += 1
            state.round += 1;
        },
        handlerPlayer1Score: (state) => {
            state.player1Win += 1
            state.round += 1;
        },
        handlerReset: (state) => {
            state.equal = 0
            state.player1Data = ""
            state.player2Data = "";
            state.player2Win = 0;
            state.player1Win = 0;
            state.round = 0;
        }
    },
});

export const { equalPoints, handlerAdd, handlerPlayer1Score, handlerPlayer2Score, handlerReset } = Slider.actions;
export default Slider.reducer;
