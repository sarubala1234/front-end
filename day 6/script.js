function loadusers() {

}

const userlist = document.getElementById("user-list")

userlist.innerHTML = "loading users...";



  fetch("https://jsonplaceholder.typicode.com/users")
.then(res => {
    if (!res.ok) {
        throw new Error("Network error");
    }
    return res.json();

}
)

.then(data=>  {
    userlist.innerHTML = "";
    data.forEach(user => {
        const div = document.createElement("div");
       div.innerHTML = `<p><strong>${user.name}</strong> — ${user.email}</p>`;
        
        userlist.appendChild(div);
      
        
    });
})

.catch(error => {
    userlist.innerHTML = `<p style="color: red;">Error loading users: ${error.message}</p>`;

});




