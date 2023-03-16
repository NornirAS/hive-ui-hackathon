export const addToStorage = (key: string, item: string | object | number) => {
  const itemType = typeof item
  if (itemType === 'object')
    return localStorage.setItem(key, JSON.stringify(item))
  localStorage.setItem(key, item.toString())
}

export const getFromStorage = (key: string) => {
  const item = localStorage.getItem(key)
  try {
    return item ? JSON.parse(item) : null
  } catch (e) {
    return item ? item : null
  }
}
