const Hamid = {
    firstName: 'Hamidreza',
    lastName: 'Hemati',
    friends: ['Parvin', 'Kasra', 'Niusha'],
    location: 'Iran',
    job: 'Developer'
}

console.log(Hamid['job'])

console.log(`${Hamid.firstName} has ${Hamid.friends.length}, and his best frind called ${Hamid['friends'][0]}`)