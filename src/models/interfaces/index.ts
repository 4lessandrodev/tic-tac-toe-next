export type ISymbol = 'X' | 'O' | ' ';

export type IMarkSymbol = 'X' | 'O';

export interface ICreateProps {
	matrix?: Partial<IMatrix>,
	currentTurn?: IMarkSymbol
};
export interface IMatrix {
	A1: ISymbol;
	A2: ISymbol;
	A3: ISymbol;
	B1: ISymbol;
	B2: ISymbol;
	B3: ISymbol;
	C1: ISymbol;
	C2: ISymbol;
	C3: ISymbol;
}

export interface IResult {
	xWon: boolean;
	oWon: boolean;
	positions: IPosition[];
}

export type IPosition = keyof IMatrix;

export type IRules = Array<IPosition[]>;

export interface ITicTacToeModel {
	matrix: IMatrix;
	rules: IRules;
	isGameFinished: boolean;
	hasEmptyPosition(): boolean;
	/**
	 * @property xWon: boolean;
	 * @property oWon: boolean;
	 * @property positions: IPosition[];
	 */
	getGameResult(): IResult;
	canPlay(): boolean;
	/**
	 * @description this method do not change state.
	 * @param position : IPosition;
	 * @param symbol : ISymbol
	 * @returns a new instance with updated state
	 */
	fillPosition(position: IPosition, symbol: IMarkSymbol): ITicTacToeModel;
	isEmptyPosition(position: IPosition): boolean;
	printMatrix(): ITicTacToeModel;
	currentPlayer: IMarkSymbol;
	nextPlayer: IMarkSymbol;
	getNextSymbolTurn(): IMarkSymbol;
	getMatrixPositions(): Array<ISymbol[]>;
	randomPlay(): ITicTacToeModel;
}
