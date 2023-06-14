window.onload = () => {
  if(!sessionStorage.name){
      location.href = '/login';
  } else{
      greeting.innerHTML = `hello ${sessionStorage.name}`;
  }
}

const logOut = document.getElementById('logout');

logOut.onclick = () => {
  sessionStorage.clear();
  location.reload();
}
