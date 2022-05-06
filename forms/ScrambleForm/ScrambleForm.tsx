import type { FC } from 'react'

import { Button, TextInput } from '@/components/index'

interface EntryFormProps {}

const ScrambleForm: FC<EntryFormProps> = () => {
  return (
    <form>
      <TextInput
        name={'teamName'}
        label={'Team name'}
        helper={"What's your teams name?"}
        placeholder={'The Breakfast club'}
      />

      <TextInput
        name={'teamMembers'}
        label={'Team members'}
        helper={'List all the people in your team, separated by commas'}
        placeholder={'John, Claire, Brian, Andy, Allison'}
        singleRow={false}
      />

      <Button>Scramble!</Button>
    </form>
  )
}

export default ScrambleForm
