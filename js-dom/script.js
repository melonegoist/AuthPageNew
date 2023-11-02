let button = document.getElementById('button_id');

button.onclick = function output(){
    let login = document.getElementById('login_id').value;
    let password = document.getElementById('password_id').value;

    console.log(login, password);
    
    let logins = ['1ndra', 's1mple', 'max'];
    for (let login_lister of logins){
        if (login == login_lister)alert(`Hi, ${login}`)
    };
};

let show_password = document.getElementById('show_password');

show_password.onclick = function show_password(){
    let icon = document.getElementById('show_password');

    if (document.getElementById('password_id').type == 'password'){
        document.getElementById('password_id').type = 'text';
        icon.style = 'background-image: url(file:img/my_icon.png)';
    }

    else if (document.getElementById('password_id').type == 'text'){
        document.getElementById('password_id').type = 'password';
        icon.style = 'background-image: url(file:img/my_icon_hidden.png)';
    }
}

