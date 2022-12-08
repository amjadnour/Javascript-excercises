const sendQueryButton = document.getElementById('getWithQueryButton')
const sendPathButton = document.getElementById('getWithPathButton')
const postBodyButton = document.getElementById('postWithBodyButton')
const userNameInput = document.getElementById('userName')
const shoutInput = document.getElementById('shoutText')
const responseDisplay = document.getElementById('responseText')

function getInputs() {
    return {
        userName: `${userNameInput.value}`,
        shoutText: `${shoutInput.checked}`,
    }
}

function fetchWithGet(fullUrl) {

    fetch(fullUrl, {
        method: 'GET'
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        }
        response.text()
            .then(data => {
                console.log(`data=${data}`)
                responseDisplay.innerText = `${data}`
            })
    }, error => {
        console.log(`There was an error: error=${error}`)
    })
}

function fetchWithPost(fullUrl, nameText, shoutFlag) {
    const sendData = {
        person: nameText,
        shout: shoutFlag
    }
    fetch(fullUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendData)
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Something went wrong: http-status=${response.status}`)
            return
        }
        response.text()
            .then(data => {
                console.log(`data=${data}`)
                responseDisplay.innerText = `${data}`
            })
    }, error => {
        console.log(`There was an error: error=${error}`)
    })
}

function sendDataByQuery() {
    //Using http://localhost:8080/hello-query?person=alice&shout=true
    const inputs = getInputs()
    console.log(`sendDataByQuery: userName=${inputs.userName}, shoutText=${inputs.shoutText}`)

    const fullUrl = `http://localhost:8080/hello-query?person=${inputs.userName}&shout=${inputs.shoutText}`
    console.log(`sendDataByQuery: fullUrl=${fullUrl}`)
    fetchWithGet(fullUrl)
}

function sendDataByPath() {
    //Using http://localhost:8080/hello-path2/alice/shout/true
    const inputs = getInputs()
    console.log(`sendDataByPath: userName=${inputs.userName}, shoutText=${inputs.shoutText}`)

    const fullUrl = `http://localhost:8080/hello-path2/${inputs.userName}/shout/${inputs.shoutText}`
    console.log(`sendDataByPath: fullUrl=${fullUrl}`)
    fetchWithGet(fullUrl)
}

function sendDataByPost() {
    //Using http://localhost:8080/hello-query-post
    const inputs = getInputs()
    console.log(`sendDataByPost: userName=${inputs.userName}, shoutText=${inputs.shoutText}`)

    const fullUrl = 'http://localhost:8080/hello-query-post'
    console.log(`sendDataByPost: fullUrl=${fullUrl}`)
    fetchWithPost(fullUrl, inputs.userName, inputs.shoutText)
}

sendQueryButton.addEventListener('click', sendDataByQuery)
sendPathButton.addEventListener('click', sendDataByPath)
postBodyButton.addEventListener('click', sendDataByPost)
