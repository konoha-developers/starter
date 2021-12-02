const contributorInputField = document.getElementById("contributor-input-field");
const pageLink = document.getElementById("page-link")


const setUserLink = (githubUsername)=>{
    pageLink.href = `https://konoha-developers.github.io/starter/contributors/${githubUsername}/${githubUsername}.html`;
}

const inputChange = ()=>{
    const username = contributorInputField.value.trim()
    setUserLink(username)
}
