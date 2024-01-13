import { HomePage } from '@/pages/Home'
import { Route, Switch } from 'wouter'
import { DarkModeToggle } from './components/DarkModeToggle'
import { useDarkMode } from './hooks/useDarkMode'

const App: React.FC = () => {
  const { darkMode } = useDarkMode()

  return (
    <>
      <div className="absolute top-4 right-4 gap-3 flex items-center text-xs text-opacity-20">
        {darkMode ? 'dark' : 'light'}
        <DarkModeToggle />
      </div>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  )
}

export default App
