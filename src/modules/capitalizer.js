function capitalize(str) {
    var separateStr = str.toLowerCase().split(' ');
    for (var i = 0; i < separateStr.length; i++) {
        separateStr[i] = separateStr[i].charAt(0).toUpperCase() +
        separateStr[i].substring(1);
    }
    return separateStr.join(' ');
}

export { capitalize };