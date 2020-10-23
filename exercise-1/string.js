const message = "toggle case is the coolest";

var prairie = {
    animal: {
        type: {
            name: "chien"
        }
    }
}

var way = "animal.type";

String.prototype.allReplace = function(obj) {
    var retStr = this;
    bool = true;
    for (var x in obj) {
        retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
    }
    return retStr;
};

//Verify message
const verifyMessage = (message) => {
    return typeof message === "string" && message !== "" ? true : false;
}

//All functions about message
function ucfirst(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return (message+'').charAt(0).toUpperCase()+message.substr(1);
}

function capitalize(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return message.split(' ').map(word => ucfirst(word)).join(' ');
}

function camelCase(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return capitalize(message).replace(/\W/g, "");
}

function snake_case(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return message.replace(" ", "_");
}

function leet(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return message.allReplace({'a': '4', 'e': '3', 'i': '1', 'o': '0', 'u': '(_)', 'y': '7'})
}

function prop_access(prairie, way) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    if(typeof prairie !== "object" || prairie == null) {
        return "Your object is not correct";
    }else if(typeof way !== "string" || way.length === 0){
        return "Your path is not correct";
    }

    way.split('.').map(element => {
        if(prairie.hasOwnProperty(element)){
            prairie = prairie[element];
        }else {
            prairie = "Your object doesn't have the property : " + element;
        }
    })
    return JSON.stringify(prairie);
}

function yoda(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return message.split(' ').reverse().join(' ');
}

function verlan(message) {
    if(!verifyMessage(message)) {
        return "noop";
    }
    return yoda(message.split('').reverse().join(''));
}

//Call all functions
    console.log(`\nMessage de base : ${message} \n`)

    console.log(`Méthode ucFirst : ${ucfirst(message)}`);

    console.log(`Méthode capitalize : ${capitalize(message)}`);

    console.log(`Méthode camelCase : ${camelCase(message)}`);

    console.log(`Méthode snake_case : ${snake_case(message)}`);

    console.log(`Méthode leet : ${leet(message)}`);

    console.log(`Méthode prop_access : ${prop_access(prairie, way)}`);

    console.log(`Méthode yoda : ${yoda(message)}`);

    console.log(`Méthode verlan : ${verlan(message)}`);