function sleep(waitTime){
  return new Promise((resolve, reject) => {
    // wait for waitTime, then resolve
    setTimeout(() => {
      resolve(true)
    }, waitTime)
  })
}

const init = async() =>{
  console.log("I should log immediately")
  await sleep(1000)
  console.log("I should log after a second")
}

init()

// console.log("I should log immediately")
// await sleep(1000)
// // won't work because await must be within an async function
// console.log("I should log after a second")
