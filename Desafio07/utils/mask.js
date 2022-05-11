export default function formatCurrency(value) {
  // obtém somente os dígitos de value
  let digits = value.replace(/\D/g, '')
  if (digits.length < 3) {
    // atribui zeros a esquerda
    const zeros = '0'.repeat(3 - digits.length)
    digits = zeros + digits
  }
  const decimalPosition = digits.length - 2
  // ignora os zeros a direita e obtém os outros dígitos
  const integerPart = digits.substring(0, decimalPosition)
    .replace(/^0+([0-9]+)/, '$1')
  const decimalPart = digits.substring(decimalPosition)
  return integerPart + "." + decimalPart
}