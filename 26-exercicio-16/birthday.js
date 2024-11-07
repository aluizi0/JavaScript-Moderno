const dayjs = require('dayjs');

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()
    
    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, 'year')
    const daysToNextBirthday = nextBirthday.diff(today, 'day') + 1

    console.log(`Você tem: ${ageInYears} anos.`)
    console.log(`Próximo aniversário: ${nextBirthday.format("DD/MM/YYYY")}.`)
    console.log(`Dias para completar ${ageInYears + 1} anos: ${daysToNextBirthday}.`)
}

birthday('1995-11-06') // Você tem: 25 anos.