interface address{
    address:string,
    state:string,
    zipCode:string
}

  interface user{
    email:string,
    password:string,
    confirmPassword:string,
    phoneNumber:string
}

interface car {
    make:string[],
    model:string[]
}

export {address, user, car}