const removeFirst = (data, setData) => {
  if (data.length === 0) {
    alert('Jau viską ištrynei')
    return
  }

  const newData = [...data]
  newData.shift()
  setData(newData)
}

export default removeFirst
