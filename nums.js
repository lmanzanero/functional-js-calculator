export const one = (operation) => { 

       if(operation == null){
        return 1
       } else{
        return 1 + operation
       } 
}

export const two = () => {
    return 2;
}

export const three = () => {
    return 3;
}

export const four = () => {
    return 4;
}

const addStyle = (property) => (value) => (element) => {
    element.style[property] = value;
}
