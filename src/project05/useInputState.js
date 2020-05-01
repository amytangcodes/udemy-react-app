import { useState } from 'react'

export default (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: evt => {
      setValue(evt.target.value)
    },
    reset: () => setValue('') // clear input field
  }
}
