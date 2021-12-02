const contributorInputField = document.getElementById("contributor-input-field");
const pageLink = document.getElementById("page-link")


const setUserLink = (githubUsername)=>{
    pageLink.href = `http://127.0.0.1:5500/contributors/${githubUsername}/${githubUsername}.html`
}

const inputChange = ()=>{
    const username = contributorInputField.value.trim()
    setUserLink(username)
}
