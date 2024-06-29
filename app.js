document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    displayUserInfo(name, age, email);

});

function updateInfo() {
    var updatedData = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com"
    };

    document.getElementById("name").value = updatedData.name;
    document.getElementById("age").value = updatedData.age;
    document.getElementById("email").value = updatedData.email;

    displayUserInfo(updatedData.name, updatedData.age, updatedData.email);
}

function displayUserInfo(name, age, email) {
    document.getElementById("userInfoName").textContent = name;
    document.getElementById("userInfoAge").textContent = age;
    document.getElementById("userInfoEmail").textContent = email;

    document.getElementById("userInfo").style.display = "block";
}