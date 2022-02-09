//make navbar
const dogButtons = document.querySelector('.dogs-list')

function makingANavButton(dog) {
    let dogNavButton = document.createElement('li')
    dogNavButton.setAttribute('class', 'dogs-list__button')
    dogNavButton.innerText = dog.name
    dogNavButton.style.color = "white"
    dogButtons.append(dogNavButton)
    dogNavButton.addEventListener('click', function() {
       createCard(dog)
      })
}

for (const dog of data) {
    makingANavButton(dog)
   }


//make main dog cards
const dogCard = document.querySelector('.main__dog-section')

function createCard(dog) {
    dogCard.innerHTML = `<h2>${dog.name}</h2>
           <img src="${dog.image}" alt="dog"/>
            <div class="main__dog-section__desc">
              <h3>Bio</h3>
              <p>${dog.bio}</p>
            </div class="main__dog-section__btn">
            ${goodBadDogButton(dog)}`

}

//goodbad dog button, starting value
function goodBadDogButton(dog) {
    if(dog.isGoodDog) {
    return `<p><em>Is naughty?</em> No!</p>
            <button>Bad dog!</button>`
    }
    else if(!dog.isGoodDog) {
        return `<p><em>Is naughty?</em> Yes!</p>
                <button>Good dog!</button>`
        }
}

//goodbad event listener

// const goodBad = document.querySelector('button')

// goodBad.addEventListener('click', function() {
//     if(dog.isGoodDog) {
//         dog.isGoodDog = false
//     }
//     else if(dog.isGoodDog) {
//         dog.isGoodDog = true
//     }
// })




//new dog form
function createNewDog() {
    dogCard.innerHTML = 
          `<h2>Add a new Dog</h2>
          <form class="form">
    
            <label for="name">Dog's name</label>
            <input type="text" id="name" name="name">
    
            <label for="image">Dog's picture</label>
            <input type="url" id="image" name="image">
    
            <label for="bio">Dog's bio</label>
            <textarea rows="5" id="bio" name="bio"></textarea>
    
            <input type="submit" id="submit" name="submit" value="Let's add a dog!" class="form__button">
          </form>
      </section>
       </input>`
}

const addDogButton = document.querySelector('li')
addDogButton.addEventListener('click', function() {
    createNewDog()

    const submitNewDog = document.querySelector('.form')
    const name = document.querySelector('#name')
    const image = document.querySelector('#image')
    const bio = document.querySelector('#bio')

    let dogObject = {id: data.length + 1, isGoodBoy: true}

    name.addEventListener('input', function(event) {
        dogObject.name = event.target.value
       })

    image.addEventListener('input', function(event) {
        dogObject.image = event.target.value
     
       })
    
    bio.addEventListener('input', function(event) {
        dogObject.bio = event.target.value
       })
 
    
    submitNewDog.addEventListener('submit', function(event) {
        event.preventDefault()   
        data.push(dogObject) 
        makingANavButton(data[data.length-1])
        console.log(data.length)
       
       })
})

       
   






    //to do
    //sort images so they are the same size
    //sort good dog button
