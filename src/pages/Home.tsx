import Bio from '@/content/bio.mdx'
import Profile from '@/content/profile.mdx'

export const HomePage: React.FC = () => {
  return (
    <div className="dark:bg-neutral-900 bg-neutral-100 w-full max-w-3xl mx-auto mt-32">
      <Profile />
      <div className="max-w-xl mx-auto mt-8">
        <Bio />
      </div>
    </div>
  )
}
