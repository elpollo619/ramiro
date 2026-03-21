import { useState } from 'react'

function SmartImage({ sources = [], alt = '', className = '' }) {
  const [index, setIndex] = useState(0)

  const handleError = () => {
    if (index < sources.length - 1) {
      setIndex(index + 1)
    }
  }

  if (!sources.length) return null

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      onError={handleError}
    />
  )
}

export default SmartImage