type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }

}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`
}

const user = {
    name: 'Flávio Santos',
    email: 'flavio@gmail.com',
    address: {
        city: 'São Paulo',
        state: 'SP'
    }

}

const message = showWelcomeMessage(user)