const employee = {}
employee.name = "Warren"
employee.streetAddress = "West 8"

function updateEmployeeWithKeyAndValue(object, key, value) {
    return {
...object,
[key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value) {
    object[key] = value 
    return object
}

function deleteFromEmployeeByKey (object, key){
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey (object, key){
    delete object[key];
    return object;
}


destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Frank")
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "West 7")

function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}

