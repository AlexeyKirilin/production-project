import { Routes, Route} from "react-router-dom"
import Counter from "./components/Counter"
import { Link } from "react-router-dom"
import { AboutPageAsync } from "./pages/AboutPage/AboutPageAsync"
import { MainPageAsync } from "./pages/MainPage/MainPageAsync"
import { Suspense, useContext, useState } from "react"
import './styles/index.scss'
import { Theme, ThemeContext } from "./theme/ThemeContext"
import { useTheme } from "./theme/useTheme"
import { classNames } from "./helpers/classNames/classNames"



const App = () => {
    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                switch theme
            </button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                        <Route path={'/about'} element={<AboutPageAsync/>}/>
                        <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App

