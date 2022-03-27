import React from "react";
import styled from "styled-components"

interface Props {
	label: string;
	onClick: () => void;
}

const _Button = styled.button`
	padding: 1.2rem;
	width: 360px;
	text-transform: uppercase;
	margin: 1.2rem;
	&:hover {
		cursor: pointer;
	}
`;

export default function Button(props: Props) {
	return <_Button onClick={props.onClick}>{ props.label }</_Button>
}
