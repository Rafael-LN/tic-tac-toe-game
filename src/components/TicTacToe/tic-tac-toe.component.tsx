import GameBoard from "./gameBoard.component";
import { GameSection, GameContainer, PlayerContainer, SubTitle, Title, Game } from "./tic-tac-toe.style";

const TicTacToe = () => {
    const score1 = 0;
    const score2 = 0;
    return (
        <GameSection>
            <Title>Tic Tac Toe games</Title>
            <SubTitle>Welcome to the best game in the world.</SubTitle>

            <GameContainer>
                <PlayerContainer xs={2}>
                    <p>Player 1</p>
                    <p>{score1}</p>
                </PlayerContainer>
                <Game> 
                    <GameBoard />
                </Game>
                <PlayerContainer xs={2}>
                    <p>Player 2</p>
                    <p>{score2}</p>
                </PlayerContainer>
            </GameContainer>
        </GameSection>
    )
}

export default TicTacToe
