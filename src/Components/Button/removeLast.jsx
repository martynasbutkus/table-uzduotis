const removeLast = (data, setData) => {
  if (data.length === 0) {
    alert('Jau viską ištrynei')
    return
  }

  const newData = [...data]
  newData.pop()
  setData(newData)
}

export default removeLast