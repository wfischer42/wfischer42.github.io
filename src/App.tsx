import { HomePage } from '@/pages/Home'
import { Route, Switch } from 'wouter'
import './App.css'
import { DarkModeToggle } from './components/DarkModeToggle'
import { useDarkMode } from './hooks/useDarkMode'

const App: React.FC = () => {
  const { darkMode } = useDarkMode()
  return (
    <>
      <div className="absolute top-4 right-4 flex flex-col text-xs text-opacity-20">
        <DarkModeToggle />
        {darkMode ? 'dark' : 'light'}
      </div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App
