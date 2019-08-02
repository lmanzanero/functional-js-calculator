export const plus = (number) => {
    if(number === undefined || number === "" || number === null){
        return '+'
    } else {
        let result = `+ ${number}`;
       return result;
    } 
}

export const minus = (number) => {
    if(number === undefined || number === "" || number == null){
        return '-';
    } else {
        let result = `- ${number}`
        return result;
    }
}

export const times = (number) => {
    if(number === undefined || number === "" || number == null){
        return '*';
    } else {
        let result = `* ${number}`
        return result
    }
}

export const divided = (number) => {
    if(number === undefined || number === "" || number == null){
        return '/';
    } else {
        let result = `/ ${number}`
        return result
    }
}
