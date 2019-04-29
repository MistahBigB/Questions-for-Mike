const workout = [{
    title: 'pushups',
    completed: true
}, {
    title: 'pullups',
    completed: false
}, {
    title: 'situps',
    completed: false
}, {
    title: 'dips',
    completed: true
}, {
    title: 'run',
    completed: true
}]

//sorts the list of objects in the array to list incompletes first
//because false comes alphabetically before true
//swap the -1 and 1 values for a and b to get true to come before false
const sortWorkout = function (workout) {
    workout.sort(function (a, b) {
        if (a.completed < b.completed) {
            return -1
        }
        else if (b.completed < a.completed) {
            return 1
        }
        else {
            return 0
        }
    })
}

//to sort the values as booleans, with false coming first
// const sortWorkout = function (workout) {
//         workout.sort(function (a, b) {
//             if (!a.completed && b.completed) {
//                 return -1
//             }
//             else if (!b.completed && a.completed) {
//                 return 1
//             }
//             else {
//                 return 0
//             }
//         })
// }


sortWorkout(workout)
console.log(workout)

//filters the objects in the array to find out which ones are completed: false
// no need for case sensitive, since the value is boolean
const findWorkout = function (workout){
    return workout.filter(function (workout){
        return !workout.completed  
    })
}

console.log(findWorkout(workout, false))