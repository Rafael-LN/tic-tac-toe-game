import React, { FC } from 'react'

import Header from './components/Header/header.component'
import Footer from './components/Footer/footer.component'
import User from './components/User/user.component'
import TicTacToe from './components/TicTacToe/tic-tac-toe.component'
import { BoardProvider } from './components/TicTacToe/hooks/board.hook'

const App: FC = () => {
    return (
        <>
            <Header />
            <User />
            <BoardProvider>
                <TicTacToe />
            </BoardProvider>
            <Footer />
        </>
    )
}

export default App
