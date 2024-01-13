import { useEffect } from 'react'

import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const darkModeAtom = atomWithStorage<boolean>(
  'darkMode',
  window.document.documentElement.classList.contains('dark'),
  {
    getItem(key, initialValue) {
      const storedValue = sessionStorage.getItem(key)
      return storedValue !== null ? JSON.parse(storedValue) : initialValue
    },
    setItem(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value))
    },
    removeItem(key) {
      sessionStorage.removeItem(key)
    },
  }
)

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  useEffect(() => {
    const root = window.document.documentElement
    if (darkMode) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [darkMode])

  return { darkMode, setDarkMode }
}
