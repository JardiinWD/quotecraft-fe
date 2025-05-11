// ------------
// ------------ TEXT FORMATTER
// ------------

/**
 * @description Truncates long text to a specified maximum length.
 * @param {string} text - The text to be truncated.
 * @param {number} maxLength - The maximum length of the text before truncation.
 * @returns {string} - The truncated text with ellipsis if it exceeds the maximum length.
 */
export const truncateLongText = (text: string, maxLength: number) => {
  // Check if the text is empty or null
  if (!text) return ''
  // Check if the text is already shorter than the maximum length
  if (text.length > maxLength) return text.slice(0, maxLength) + '...'
  // If the text is shorter than the maximum length, return it as is
  return text
}

// ------------
// ------------ CURRENCY FORMATTER
// ------------

/**
 * @description Transforms a number to a currency string.
 * @param {number} number - The number to be transformed.
 * @returns {string} - The formatted currency string.
 */
export const transformNumberToCurrency = (number: number) => {
  // Check if the number is a valid number
  if (isNaN(number)) return ''
  // Format the number to a currency string
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
  // Return the formatted number
  return formattedNumber
}

/**
 * @description Transforms a string to a currency string.
 * @param {string} string - The string to be transformed.
 * @returns {string} - The formatted currency string.
 */
export const transformStringToCurrency = (string: string) => {
  // Check if the string is empty or null
  if (!string) return ''
  // Convert the string to a number
  const number = parseFloat(string.replace(/[^0-9.-]+/g, ''))
  // Check if the number is a valid number
  if (isNaN(number)) return ''
  // Format the number to a currency string
  const formattedNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(number)
  // Return the formatted number
  return formattedNumber
}

// ------------
// ------------ DATE FORMATTER
// ------------

/**
 * @description Formats a date string or Date object into a readable format.
 * @param {string | Date} date - The date to be formatted.
 * @param {string} locale - The locale to use for formatting (default is 'en-US').
 * @param {object} options - Additional Intl.DateTimeFormat options.
 * @returns {string} - The formatted date string.
 */
export const dateFormatter = (
  date: string | Date,
  locale: string = 'en-US',
  options: Intl.DateTimeFormatOptions = {}
): string => {
  // Convert the input to a Date object if it's a string
  const dateObj = typeof date === 'string' ? new Date(date) : date
  // Check if the date is valid
  if (isNaN(dateObj.getTime())) return ''
  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options
  }).format(dateObj)
}

/**
 * @description Transforms a JWT expiration timestamp into a readable date and checks if the token is expired.
 * @param {number} token - The expiration timestamp of the JWT (in seconds since epoch).
 * @returns {object} - An object containing the expiration date and a boolean indicating if the token is expired.
 */
export const transformJwtExpirationDate = (token: number) => {
  // Convert the token (seconds since epoch) to milliseconds
  return new Date(token * 1000)
}
