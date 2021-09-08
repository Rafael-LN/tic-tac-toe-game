import { BoardCell, PlayerContainers, Score } from "./tic-tac-toe.model";

export const maxMatches = 9;

export const size = 3;

export const firstPlayer = BoardCell.X;

export const defaultScore: Score = {
  [BoardCell.X]: 0,
  [BoardCell.O]: 0,
};

export const players = {
  [BoardCell.X]: 1,
  [BoardCell.O]: 2,
};

export const containers: PlayerContainers = {
    O: {
        rows: [],
        columns: [],
        diagonal: [],
        oppositeDiagonal: []
    },
    X: {
        rows: [],
        columns: [],
        diagonal: [],
        oppositeDiagonal: []
    }
}