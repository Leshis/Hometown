import { activitiesData } from "./data.js";

const activitiesRadios = document.getElementById('activities-radios')

function getActivitiesArray(activities){
    const activitiesArray = []    
    for (let activity of activities){
        for (let activityType of activity.activityType){
            if (!activitiesArray.includes(activityType)){
                activitiesArray.push(activityType)
            }
        }
    }
    return activitiesArray
}

function renderActivitiesRadios(activities){
    let radioItems = ``
    const activityType = getActivitiesArray(activities)
    for (let activity of activityType){
        radioItems += `
        <div class="radio">
            <label for="${activity}">${activity}</label>
            <input
            type="radio"
            id="${activity}"
            value="${activity}"
            name="emotions"
            >
        </div>`
    }
    activitiesRadios.innerHTML = radioItems
}

renderActivitiesRadios(activitiesData)

