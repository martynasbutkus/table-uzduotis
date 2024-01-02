const AddTable = (data, setData, firstName, lastName, age) => {
  if (firstName && lastName && age > 0) {
    const newData = [...data, { firstName, lastName, age }]
    setData(newData)
  } else if (age <= 0) {
    alert('Pataisykite amžių')
  } else {
    alert('Užpildykite visus langelius')
  }
}

export default AddTable;
