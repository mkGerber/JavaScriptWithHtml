let addFriends;
let addedFriends = [];

if (JSON.parse(localStorage.getItem('addedFriends')) === null && JSON.parse(localStorage.getItem('addFriends')) === null){
    localStorage.setItem('addedFriends', JSON.stringify([]));
    localStorage.setItem('addFriends', JSON.stringify([
        {
            name: 'Alex',
            age: 30,
            location: 'Virginia'
        },
        {
            name: 'John',
            age: 25,
            location: 'New York'
        },
        {
            name: 'Mary',
            age: 20,
            location: 'California'
        },
        {
            name: 'Chris',
            age: 35,
            location: 'Texas'
        }
    ]));
} else {
    addedFriends = JSON.parse(localStorage.getItem('addedFriends'));
    addFriends = JSON.parse(localStorage.getItem('addFriends'));
    
}


function addFriend(){
    let html = '';
    for (let i = 0; i < addFriends.length; i++){
        const friendObject = addFriends[i];
        const {name, age, location} = friendObject;
        html += `
        <div class="profile">
            <div class="profile-photo">
                <img class="profile-pic" src="friend-images/${name}.jpg">
            </div>
            <div class="profile-info">
                <p class="profile-name">${name}</p>
                <p class="profile-age">Age: ${age}</p>
                <p class="profile-location">Location: ${location}</p>
                <button class="add-button" onclick="
                addedFriends.push(addFriends[${i}]);
                console.log(addedFriends);
                addFriends.splice(${i}, 1);
                friendsList();
                addFriend();
                setLocalStorage()
                changeTotalFriends();
                ">Add Friend</button>
            </div>
        </div>
        `;

    }
    document.querySelector('.friends-section').innerHTML = html;
}

function friendsList(){
    let html = '';
    for (let i = 0; i < addedFriends.length; i++){
        const friendObject = addedFriends[i];
        const {name, age, location} = friendObject;
        html += `
        <div class="profile">
            <div class="profile-photo">
                <img class="profile-pic" src="friend-images/${name}.jpg">
            </div>
            <div class="profile-info">
                <p class="profile-name">${name}</p>
                <p class="profile-age">Age: ${age}</p>
                <p class="profile-location">Location: ${location}</p>
                <button class="delete-button" onclick="
                addFriends.push(addedFriends[${i}]);
                addedFriends.splice(${i}, 1);
                console.log(addedFriends);
                addFriend();
                friendsList();
                setLocalStorage()
                changeTotalFriends();
                ">Remove Friend</button>
            </div>
        </div>
        `;

    }
    document.querySelector('.added-friends-section').innerHTML = html;
}

function setLocalStorage(){
    localStorage.setItem('addedFriends', JSON.stringify(addedFriends));
    localStorage.setItem('addFriends', JSON.stringify(addFriends));
}

function changeTotalFriends(){
    let totalFriends = addedFriends.length;
    document.querySelector('.friend-count-div').innerHTML = `
    <div class="friend-count">${totalFriends}</div>
    <div class="friend-count-text tooltip">Total Friends: ${totalFriends}</div>
    `;
}

addFriend();
friendsList();
changeTotalFriends();
