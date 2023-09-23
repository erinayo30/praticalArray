let users = [
        {
        firstName: "Damilola",
        lastName: "Oyedunmade",
        location: "Abuja",
        stack: "Frontend",
        image: "images/Dammy.jpg"
    },
    {
        firstName: "Haruna",
        lastName: "Idris",
        location: "Abuja",
        stack: "Frontend",
        image: "images/Haruna.jpg"
    },
    {
        firstName: "Azeez",
        lastName: "Ajarat",
        location: "Kogi",
        stack: "Frontend",
        image: "images/Ajarat.jpg"
    },
    {
        firstName: "Gift",
        lastName: "Uloka",
        location: "Abuja",
        stack: "Frontend",
        image: "images/Gift.jpg"
    },
    {
        firstName: "Muhammand",
        lastName: "Najeeb",
        location: "Abuja",
        stack: "Frontend",
        image: "images/Najeeb.jpg"
    },
    {
        firstName: "Zubaidat",
        lastName: "Shuka",
        location: "Abuja",
        stack: "Backend",
        image: "images/Zubby.jpg"
    },
    {
        firstName: "Victor",
        lastName: "Alabi",
        location: "Victor",
        stack: "Frontend",
        image: "images/Victor.jpg"
    }
]

// New Users
let newUsersList= [
    {
    firstName: "Audu",
    lastName: "Zaynab",
    location: "Lagos",
    stack: "Frontend",
    image: "images/Zaynab.jpg"
},
{
    firstName: "Sanusi",
    lastName: "Rasheed",
    location: "Lagose",
    stack: "Frontend",
    image: "images/Sanusi.jpg"
},
{
    firstName: "Anosike",
    lastName: "Prosper",
    location: "Abuja",
    stack: "Backend",
    image: "images/Prosper.jpg"
},
{
    firstName: "Ilosumba",
    lastName: "Henry",
    location: "Abuja",
    stack: "Frontend",
    image: "images/Henry.jpg"
},
{
    firstName: "Precious",
    lastName: "Bassey",
    location: "Abuja",
    stack: "Frontend",
    image: "images/Precious.jpg"
},
{
    firstName: "Joshua",
    lastName: "Farinmade",
    location: "Lagos",
    stack: "Frontend",
    image: "images/Joshua.jpg"
}
]

// get the DOM Element
let usersContainer = document.getElementById("users");
let newUsersOptions= document.getElementById("newUsers")


// render users
renderUsers();

let newUsers= "<option> Select new user</option>";

function renderUsers(){
let userBox = "";

if(users.length){
    users.forEach((user, index, users) => { 
        userBox += `<div class="user"> 
        <img src="${user.image}" alt="${user.firstName}">
        ${user.firstName} 
        ${user.lastName}
        ${user.location}
        ${user.stack}
        <hr>
        <button onclick ="deleteUser(${index})"> Delete </button>
        </div>`;
        usersContainer.innerHTML = userBox;
    
    })    
}
else{
    usersContainer.innerHTML = "Not Found"
}
}

newUsersList.forEach(user => {
    newUsers += `<option value= ${JSON.stringify(user)}>${user.firstName} ${user.lastName}</option>`;
});
newUsersOptions.innerHTML = newUsers;

// Remove From Front and End
function removeFirstUser(){
   let removedUser= users.shift();
   alert(`${removedUser.firstName} 
   has been removed, we have ${users.length} users left`)
    renderUsers()
}

function removeLastUser(){
    let removedUser = users.pop();
    alert(`${removedUser.firstName} 
   has been removed, we have ${users.length} users left`)
    renderUsers()
}

// Add to Front and End
function getSelectedUser(){
    // let selectedUser= e.target.value;
    let selectedUser = newUsersOptions.options[newUsersOptions.selectedIndex].value
    return selectedUser
}

function addToStart(){
    let selected = getSelectedUser();
    users.unshift(JSON.parse(selected))
    alert(`${selected.firstName} 
    has been Add, we have ${users.length} total users`)
    renderUsers()
}

function addToEnd(){
    let selected = getSelectedUser();
    alert(`${selected.firstName} 
    has been Add, we have ${users.length} total users`)
    users.push(JSON.parse(selected))
    renderUsers()
}

// Splice
function deleteUser(index){
    let confirmDelete = confirm(`Are you sure you want to remove ${users[index].
        firstName}`)
        if(confirmDelete){
            users.splice(index,1)
            renderUsers()
        }
}
// search users
function searchUser(){
    let searchQuery = document.getElementById("searchBox").value;
    users = users.filter(user => user.firstName.toLowerCase().includes
    (searchQuery.toLowerCase()))
    renderUsers()
} 