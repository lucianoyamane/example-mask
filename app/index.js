
let applyMask = (mask, value) => {
    let array = value.split('');
    return array.join(".");
}

module.exports.applyMask = applyMask;