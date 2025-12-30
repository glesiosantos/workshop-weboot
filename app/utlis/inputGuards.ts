export function allowOnlyNumbers(e: KeyboardEvent) {
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
