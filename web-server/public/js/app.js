console.log("Client side js is loaded")





const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

// messageOne.textContent = 'From Java Script'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    messageTwo.textContent = 'loading ...'
    messageOne.textContent = ''
    fetch('http://localhost:3000/weather?address=' + location).then((response)=>{
        response.json().then((data)=>{
            if (data.error){
                messageTwo.textContent = ''
                messageOne.textContent = data.error
            } else{
                messageOne.textContent = data.forcast
                messageTwo.textContent = data.location
            }
        })
    })
})