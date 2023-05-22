let sampleDiv = document.createElement("div")
sampleDiv.classList.add("sample-div")
console.log(sampleDiv)

let sampleParagraph = document.createElement("p")
sampleParagraph.classList.add("sample-paragraph")
sampleParagraph.innerText = " Welcome to my youtube channel "

let sampleA = document.createElement("a")
sampleA.classList.add("sample-anchour")
sampleA.href = "https://sreeraksha.vercel.app/"
sampleA.innerText = 'click here to navigate to portfolio' 
sampleA.target = "_blank"
console.log(sampleA)
sampleDiv.append(sampleA, sampleParagraph)

sampleBody = document.querySelector('body')
sampleBody.append(sampleDiv)
