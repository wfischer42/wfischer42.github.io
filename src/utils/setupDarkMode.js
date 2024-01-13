function setDarkMode() {
  const darkModeKey = 'darkMode'
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storedValue = sessionStorage.getItem(darkModeKey)
  const darkModeOn = storedValue !== null ? JSON.parse(storedValue) : prefersDarkScheme

  if (darkModeOn) {
    window.document.documentElement.classList.add('dark')
  } else {
    window.document.documentElement.classList.remove('dark')
  }
}

setDarkMode()
