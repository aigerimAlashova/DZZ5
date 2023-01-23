let form = document.querySelector('.form')
let del = document.querySelector('.del')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    fetch(`http://localhost:3000/cards`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: e.target[0].value,
            LastName: e.target[1].value
        })
    }).then((res) => alert('Вы успешно зарегистрировались!', res))
    .catch((err) => alert('Не удалось зарегатся!', err))
})

del.addEventListener('click', () => {
    fetch(`http://localhost:3000/cards/2`, {
        method: "DELETE",
    }).then(res => alert('Вы успешно удалили аккаунт', res))
    .catch(err => alert('Не удалось удалить аккант', err))
})

