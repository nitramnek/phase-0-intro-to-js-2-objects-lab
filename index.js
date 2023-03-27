//K3n5c0d3
// solution Starts Here!

const employee = {
        name: "Ken",
        streetAddress: "80100 MBA"
    }
function updateEmployeeWithKeyAndValue(employee, key, value) {
        const newPersonel = { ...employee };
        newPersonel[key] = value;
        return newPersonel;
    }
//debugger

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
    }
function deleteFromEmployeeByKey(employee, key) {
        const newPersonel = { ...employee };
        delete newPersonel[key];
        return newPersonel;
    }
function destructivelyDeleteFromEmployeeByKey(employee, key) {
        delete employee[key];
        return employee;
    }
//debugger