export const plus = (number) => {
    if(number === undefined || number === "" || number === null){
        return '+'
    } else {
        let result = `+ ${number}`;
       return result;
    } 
}

export const minus = (number) => {
    return '-';
}

export const times = (number) => {
    return '*';
}

export const divided = (numbers) => {
    return '/';
}
