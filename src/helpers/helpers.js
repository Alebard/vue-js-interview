
const getRandomCountry = () => {
    const countriesList = ['russia', 'usa'];
    return countriesList[Math.floor(Math.random() * countriesList.length)];
}
const getRandomScore = () => {
    return Math.floor(Math.random() * (40 - 1 + 1) + 1);
}

const addDataUsers = (users) => {
    return users.map((user) => {
        const country = getRandomCountry();
        const score = getRandomScore();

        return {
            ...user,
            country,
            score
        }
    })
}

export default {
    addDataUsers
}
