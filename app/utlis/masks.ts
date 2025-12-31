export function onlyNumbers(value: string) {
  return value.replace(/\D/g, '')
}

export function maskCPF(value: string) {
  const v = onlyNumbers(value).slice(0, 11)

  if (v.length <= 3) return v
  if (v.length <= 6) return `${v.slice(0, 3)}.${v.slice(3)}`
  if (v.length <= 9)
    return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6)}`
  return `${v.slice(0, 3)}.${v.slice(3, 6)}.${v.slice(6, 9)}-${v.slice(9)}`
}

export function maskPhone(value: string) {
  const v = onlyNumbers(value).slice(0, 11)

  if (v.length <= 2) return v
  if (v.length <= 6) return `(${v.slice(0, 2)}) ${v.slice(2)}`
  if (v.length <= 10)
    return `(${v.slice(0, 2)}) ${v.slice(2, 6)}-${v.slice(6)}`
  return `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`
}

export function maskCardNumber(value: string) {
  const v = onlyNumbers(value).slice(0, 16)
  return v.replace(/(\d{4})(?=\d)/g, '$1 ')
}

export function maskExpiry(value: string) {
  const v = onlyNumbers(value).slice(0, 4)

  if (v.length <= 2) return v
  return `${v.slice(0, 2)}/${v.slice(2)}`
}

export function maskCVV(value: string) {
  return onlyNumbers(value).slice(0, 4)
}