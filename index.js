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

    console.log(arrays)
    for(let i=0;i<arrays.length;i++){
        createEmployeeRecord(arrays[i])
    }
}