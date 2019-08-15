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

const filters = {
    searchText: ''
}
//a function to search for the title of the workout from the array above
const renderWorkouts = function (workout, filters) {
    const filteredWorkouts = workout.filter(function (workout){
        return workout.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
 //Filters which workouts have not been completed
 const incompleteWorkout = filteredWorkouts.filter(function (workout) {
    return !workout.completed
})

//clears all workouts
    document.querySelector('#workout').innerHTML = ''


const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteWorkout.length} workouts left`
document.querySelector('#workout').appendChild(summary)
   
//adds the workout that fulfills the search criteria
    filteredWorkouts.forEach(function (workout){
        const workoutEl = document.createElement('p')
        workoutEl.textContent = workout.title
        document.querySelector('#workout').appendChild(workoutEl)
    })
}
renderWorkouts(workout, filters)

document.querySelector('#remove-all').addEventListener('click', function (){
    //hashes for ids, . for classes
    document.querySelectorAll('.workout').forEach(function(workout){
        workout.remove()
    })
})

document.querySelector('#search-text').addEventListener('input', function (e) {
    filters.searchText = e.target.value
    renderWorkouts(workout, filters)
})

//Default event refreshes the webpage when "submit" is hit. 
//We want to do this manually, in order to keep the data
document.querySelector('#name-form').addEventListener('submit', function (e){
    e.preventDefault()
    //prints the user's input in the console
    console.log(e.target.elements.newWorkout.value)

})

const newWorkout = function (title) {
    const workout = {
        title,
        completed = false
    }
    workout.push(title)
}

newWorkout = e.target.elements.newWorkout.value
//clears the input field after user input
e.target.elements.newWorkout.value = ''

//  //Add array titles as p's to the end of the body
//  workout.forEach(function (workout) {
//      const p = document.createElement('p')
//      p.textContent = workout.title
//      document.querySelector('body').appendChild(p)
//      })

