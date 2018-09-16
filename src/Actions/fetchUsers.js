export const fetchUsers=() => dispatch =>{
    console.log("Action Creator");
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => dispatch ( {type:'FETCH_USERS',
  payload:data

  }));  
}

export const addUser=(newUser) => dispatch => {
    console.log("ADding User Action starting");
    fetch('https://jsonplaceholder.typicode.com/users',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(newUser => dispatch({
        type:'ADD_USER',
        payload:newUser
    }))
}