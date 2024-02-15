//STATE INFO

const BASE_URL = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/mitch/events'
const state = []

const eventsContainer = document.getElementById('events')


//FETCH CALLS

async function getEvents(){
    try{
        const response = await fetch(`$BASE_URL}/events`)
        const json = await response.json();

        return json.data 
        
    }catch(err){
        console.log(err)
    }
}






//EVENT LISTENERS

const form = document.getElementById('addEvent')

form.addEventListener('submit', async (addEvent)=> {
    addEvent.preventDefault()

        const formData = form.elements
        
        let {id, name, description, dateTime, location} = formData

        const updatedObject = {
            name: name.value,
            description: description.value,
            dateTime: dateTime.value,
            location: location.value
        }

    
})







//RENDER FUNCTIONS

async function addEvent(event){
    event.preventDefault();
}


function renderEvents(){

    const htmlEvents = events.map(events =>{
        let div = document.createElement('div')
        div.className = 'card'
    }

        div.innerHTML = `<img 
    })
}