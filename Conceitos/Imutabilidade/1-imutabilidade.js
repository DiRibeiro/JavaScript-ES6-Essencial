const user = {
    name: 'Diego',
    lastName: 'Ribeiro'
};

function getUserWithFullName(user) {
    return {
        ...user, //spread operator
        fullName: `${user.name} ${user.lastName}` //String literal
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);