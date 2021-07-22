


export const MONTH = { '1' : 'Janvier', '2': 'Fevrier', '3': 'Mars', '4': 'Avril', '5': 'Mai', '6': 'Juin',
'7': 'Juillet', '8': 'Aout', '9': 'Septembre', '10': 'Octobre', '11': 'Novembre', '12': 'Décembre', };

export const DAY = {'1': 'Lundi', '2': 'Mardi', '3': 'Mercredi', '4': 'Jeudi', '5': 'Vendredi',
'6': 'Samedi', '7': 'Dimanche'};

export function dayBeforeBirthday(birthDate) {

    const currentDate = new Date();
    const birthday = new Date(birthDate);
    const currentYear = currentDate.getFullYear();

    birthday.setFullYear(currentYear)
    birthday.setFullYear( (birthday.getTime() < currentDate.getTime() ? currentYear + 1 : currentYear)  );
    const timeBeforeBirthday = birthday.getTime() - currentDate.getTime();
    const dayBeforeBirthday = (timeBeforeBirthday / (1000 * 3600 * 24)).toFixed(0)

    return (dayBeforeBirthday);
}

export function getNumberDays(beginDate, endDate, percentageNeeded) {
    const currentDate = new Date();
    // const currentDate = new Date("08/05/2021");
    const begin = new Date(beginDate);
    const end = new Date(endDate);

    var timeBeforeGo = end.getTime() - begin.getTime();
    var advancedTime = (currentDate.getTime() - begin.getTime());

    if (percentageNeeded === false)
    return  ( ((timeBeforeGo - advancedTime) / (1000 * 3600 * 24)).toFixed(0) )
    var percentage = (advancedTime * 100 / timeBeforeGo);
    if (percentageNeeded === true)
    return( (percentage < 100 ? percentage.toFixed(2) : 0) );
}

export function writeDate(date) {
    var dateToWrite = new Date(date);
    // return (date);
    return (dateToWrite.getDate() + ' ' + MONTH[dateToWrite.getMonth() + 1] + ' ' + dateToWrite.getFullYear());
}
