function makeRequest(location){
    return new Promise( (resolve, reject) => {
        if(location === 'google'){
            resolve('Google says Hi..')
        }
        else{
            reject('We can only talk to google')
        }
    })
} 

function processedRequest(response){
    return new Promise( (resolve, reject) => {
        console.log('processing response')
        resolve(`Extra info + ${response}`)
    })
}

// makeRequest('google').then((respone) => {
//     console.log('Response Received')
//     return processedRequest(respone)
// }).then(processedResponse => {
//     console.log(processedResponse)
// }).catch((error)=>{
//     console.log(error)
// })


//async await
async function doWork (){
    try{
    const response = await makeRequest('google')
    console.log('Response Received')
    const processedResponse = await processedRequest(response) 
    console.log(processedResponse)
    } catch(err){
        console.log(err)
    }
}
doWork()