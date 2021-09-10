import React, { FC } from 'react'

import Stats from './components/Stats/stats.component'
import Header from './components/Header/header.component'
import Footer from './components/Footer/footer.component'
import User from './components/User/user.component'
import TicTacToe from './components/TicTacToe/tic-tac-toe.component'
import { BoardProvider } from './components/TicTacToe/hooks/board.hook'

const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <User />
                <BoardProvider>
                    <TicTacToe />
                    <Stats />
                </BoardProvider>
            </main>
            <Footer />
        </>
    )
}

export default App
