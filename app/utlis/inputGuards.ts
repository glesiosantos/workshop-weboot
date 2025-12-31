export function allowOnlyNumbers(e: KeyboardEvent) {

   if (e.key === 'Enter') {
    e.preventDefault()
    return
  }

  const allowedKeys = [
    'Backspace',
    'Delete',
    'ArrowLeft',
    'ArrowRight',
    'Tab'
  ]

  if (allowedKeys.includes(e.key)) return

  if (!/^\d$/.test(e.key)) {
    e.preventDefault()
  }
}

export function sanitizeNumber(value: string) {
  return value.replace(/\D/g, '')
}
