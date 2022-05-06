import type { NextPage } from 'next'

import { ScrambleForm } from '@/form/index'

const Home: NextPage = () => {
  return (
    <main>
      <h1>🐣 Standup Scramble</h1>

      <ScrambleForm />
    </main>
  )
}

export default Home
