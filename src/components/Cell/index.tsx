import styled from "styled-components";
import { ISymbol } from "../../models/interfaces";

interface Props {
	value: ISymbol;
	rowNumber: number;
	colNumber: number;
	fillPosition: (position: string) => void;
	winnerPosition: string[];
};

const _Cell = styled.div<{ data: string, value: ISymbol }>`
	display: flex;
	width: 120px;
	height: 120px;
	border: 1px solid #2e2828;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 2rem;
	&:hover {
		cursor: pointer;
	}
`;

export default function Cell({ value, rowNumber, colNumber, fillPosition, winnerPosition }: Props) {
	
	const getLetter = (position: 1 | 2 | 3): string => {
		const dictionary = {
			1: 'A',
			2: 'B',
			3: 'C'
		}
		return dictionary[position];
	}

	const position = `${getLetter(rowNumber + 1 as 1 | 2 | 3)}${colNumber + 1}`;
	const isWinner = winnerPosition.includes(position);

	return (
		<_Cell
			style={{
				backgroundColor: (isWinner) ? '#1a5231dd' : '#edededa2',
				color: (isWinner) ? '#ededed' : '#20194d'
			}}
			data={position}
			value={value}
			onClick={(e: any) => {
				const position = e.target.attributes.data.nodeValue;
				fillPosition(position);
			}}
		>{value}</_Cell>
	)
}
