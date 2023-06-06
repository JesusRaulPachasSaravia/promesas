async function showGitHubPersonal(){
  let response = await fetch("https://api.github.com/users/JesusRaulPachasSaravia/repos")

  let listaRepos = await response.json();

  console.log(listaRepos)
}

function getRepos(){
  fetch('https://api.github.com/users/JesusRaulPachasSaravia/repos')
}

showGitHubPersonal();