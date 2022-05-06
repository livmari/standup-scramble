import { FC } from 'react'

interface InputProps {
  name: string
  label?: string
  helper?: string
  placeholder?: string
  singleRow?: boolean
}

const TextInput: FC<InputProps> = ({
  helper,
  label,
  name,
  placeholder,
  singleRow = true,
}) => {
  return (
    <fieldset className={'flex flex-col gap-2'}>
      {label ?? <label htmlFor={name}>{label}</label>}

      {helper && <small>{helper}</small>}

      <textarea
        name={name}
        id={name}
        placeholder={placeholder ?? ''}
        rows={singleRow ? 1 : 3}
        className={`${singleRow && 'resize-none'}`}
      />
    </fieldset>
  )
}

export default TextInput
