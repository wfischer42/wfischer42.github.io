import { useDarkMode } from '@/hooks/useDarkMode'
import { twJoin, twMerge } from 'tailwind-merge'

export const DarkModeToggle: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { setDarkMode } = useDarkMode()

  return (
    <button
      {...props}
      className={twMerge(
        `w-12 h-7 rounded-full dark:bg-neutral-800 bg-neutral-400 transition-colors duration-150 relative focus-within:outline-none overflow-hidden`,
        props.className
      )}
      onClick={() => setDarkMode((dm) => !dm)}
    >
      <div
        className={twJoin(
          'w-5 h-5 rounded-full absolute bg-neutral-100 top-[3px] left-1 transition-transform duration-150 ease-in-out dark:translate-x-[18px]'
        )}
      />
      <div
        className={twJoin(
          'w-5 h-5 absolute dark:bg-neutral-800 bg-neutral-400 -top-3 dark:top-0 dark:left-[18px] left-0 rounded-full opacity-0 dark:opacity-100 transition-all duration-150'
        )}
      />
    </button>
  )
}
