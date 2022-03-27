import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Button from '../components/Button'
import Matrix from '../components/Matrix'
import { IMarkSymbol, IPosition } from '../models/interfaces'
import TicTacToeModel from '../models/tic-tac-toe.model'

const Home: NextPage = () => {

  const [matrix, setMatrix] = useState<TicTacToeModel>();
  const [winnerPosition, setWinnerPosition] = useState<string[]>([]);

  const resetGame = () => {
    const model = new TicTacToeModel();
    setMatrix(model);
    setWinnerPosition([]);
  }

  const fillPosition = (position: string): void => {

    try {
      const model = new TicTacToeModel({
        matrix: matrix?.getMatrix(),
        currentTurn: matrix?.currentPlayer
      });
      
      const updatedMatrix = model.fillPosition(position as IPosition, matrix?.nextPlayer as IMarkSymbol)
    
      setMatrix(updatedMatrix as any);

      const result = updatedMatrix.getGameResult();

      if (result.oWon || result.xWon) {
        setWinnerPosition(result.positions);
        return;
      }
  
      const withRandomPlay = updatedMatrix.randomPlay();
      const gameResult = withRandomPlay.getGameResult();

      setMatrix(withRandomPlay as any);

      if (gameResult.oWon || gameResult.xWon) {
        setWinnerPosition(gameResult.positions);
        return;
      }

    } catch (error: any) {
      alert(error.message)
    }
  }
  
  useEffect(() => {
    const model = new TicTacToeModel();
    setMatrix(model);
  }, [])

  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column'
    }}>
      <Matrix rows={
        matrix?.getMatrixPositions() ?? []}
        fillPosition={fillPosition}
        winnerPosition={winnerPosition}
      />
      <Button label='reiniciar' onClick={resetGame}/>
    </div>
  )
}

export default Home
