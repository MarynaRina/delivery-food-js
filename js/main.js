const btnAuth = document.querySelector('.button-auth'),
    modalAuth = document.querySelector('.modal-auth'),
    closeAuth = document.querySelector('.close-auth'),
    btnOut = document.querySelector('.button-out'),
    userName = document.querySelector('.user-name'),
    loginForm = document.getElementById('logInForm'),
    inputLogin = document.getElementById('login'),
    inputPassword = document.getElementById('password');

const login = (user) => {
    btnAuth.style.display = 'none';
    btnOut.style.display = 'flex';
    userName.style.display = 'flex';
    userName.textContent = user.login;
    modalAuth.style.display = 'none';
};

const logout = () => {
    btnAuth.style.display = 'flex';
    btnOut.style.display = 'none';
    userName.style.display = 'none';
    userName.textContent = '';

    localStorage.removeItem('user')
};

btnAuth.addEventListener('click', () => {
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener('click', () => {
    modalAuth.style.display = 'none';
});

btnOut.addEventListener('click', () => {
    logout();
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    }

    localStorage.setItem('user', JSON.stringify(user))
    login(user);
});

if (localStorage.getItem('user')) {
    login(JSON.parse(localStorage.getItem('user')));
}
