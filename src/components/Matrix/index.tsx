import styled from "styled-components"
import { ISymbol } from "../../models/interfaces";
import Row from "../Row";

interface Props {
	rows: Array<ISymbol[]>;
	fillPosition: (position: string) => void;
	winnerPosition: string[];
}

const _Matrix = styled.div`
	background-color: #a7a1a1;
	flex-direction: column;
`;

export default function Matrix({rows, fillPosition, winnerPosition}: Props) {
	return (
		<_Matrix>
			{
				rows.map(
					(row, i) => (
						<Row
							key={i}
							colNumber={i}
							row={row}
							fillPosition={fillPosition}
							winnerPosition={winnerPosition}
						/>
					)
				)
			}
		</_Matrix>
	)
}
