function randomString() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz1234567890";
    const lenString = 7;
    let randomstring = '';

    for (var i = 0; i < lenString; i++) {
        var rnum = Math.floor(Math.random() * characters.length);
        randomstring += characters.substring(rnum, rnum + 1);
    }

    return randomstring;
}

export default randomString;