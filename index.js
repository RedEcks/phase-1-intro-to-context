// Your code here
function createEmployeeRecord(array){
    return {
        firstName: array[0] ,
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents :[],
        timeOutEvents:[] 
    }

}

function createEmployeeRecords(arrays){
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(object,time){
    const timeArray = time.split(" ")
    object.timeInEvents.push({
        type:"TimeIn",
        date:timeArray[0],
        hour:parseInt(timeArray[1])
    })
    return object
}

function createTimeOutEvent(object,time){
    const timeArray = time.split(" ")
    object.timeOutEvents.push({
        type:"TimeOut",
        date:timeArray[0],
        hour:parseInt(timeArray[1])
    })
    return object
}

function hoursWorkedOnDate(object,date){
    //uses date given to check if it matches the timeIn and timeOut dates
    //loop through the object to find the date that matches the one given
    //if they match then find the hours and find the difference 
    let clockIn=0
    let clockOut=0
    object.timeInEvents.forEach(element => {
        if (date===element.date){
            clockIn=element.hour
        }
    });
    
    object.timeOutEvents.forEach(element => {
        if (date===element.date){
            clockOut=element.hour
        }
    });
    let workedHours = (clockOut-clockIn)/100
    return workedHours
}

function wagesEarnedOnDate(object,date){

    let payRate = object.payPerHour
    return payRate *hoursWorkedOnDate(object,date)
}

function allWagesFor(object){
    let dates=object.timeInEvents.map(event => event.date)
    let allWages=0
    for(let i=0;i<dates.length;i++){
        allWages += wagesEarnedOnDate(object,dates[i])
    }

    return allWages
}

function calculatePayroll(employeeRecords){
    //console.log(allWagesFor(employeeRecords[0]))
    let totalWage=0
    for(let i=0;i<employeeRecords.length;i++){
        totalWage += allWagesFor(employeeRecords[i])
    }
    return totalWage
}