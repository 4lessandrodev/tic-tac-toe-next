import styled from "styled-components";
import { ISymbol } from "../../models/interfaces";
import Cell from "../Cell";

interface Props {
	row: ISymbol[];
	colNumber: number;
	fillPosition: (position: string) => void;
	winnerPosition: string[]
}

const _Row = styled.div`
	display: flex;
`;

export default function Row({ row, colNumber, fillPosition, winnerPosition }: Props) {
	return (
		<_Row>
			{row.map(
				(cell, i) => <Cell
					rowNumber={i}
					key={i}
					colNumber={colNumber}
					value={cell}
					fillPosition={fillPosition}
					winnerPosition={winnerPosition}
				/>
			)
			}
		</_Row>
	)
}
