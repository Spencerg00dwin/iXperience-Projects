const contacts = [
    {name: 'Spencer', number: '123412312'},
    {name: 'Dustin', number: '4567456'},
];

function printContacts(){
    let html = '<ul>'
    for(let contact of contacts){
        html += '<li>' + contact.name + '</li>'
    }
    html += '</ul'
    document.body.innerHTML = html;
}

function addContact(contact){
    return new Promise((resolve, reject) => {

    setTimeout(() => {

        const success = true
        // const success = false


        if (success){
        contacts.push(contact)
        resolve({success: true})
    } else{
        reject(new Error('something went wrong'))
    }
    }, 2000)
})


}

printContacts()

const newContact = {
    name: 'Susan',
    number: '923509890'
}

async function init(){
    try{
    await addContact(newContact)
    printContacts()
    } catch (err){
        console.log(err)
    }
}

init()


//Old way of dealing w/ promises

// const promise = addContact(newContact)

// promise.then(() => {
//     printContacts()
// }).catch((err) => {
//     console.log(err)
// })