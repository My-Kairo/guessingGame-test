function GuessingGame (nmbr) {

    let guess = nmbr || [];
    let message = "";

    function setNumber(numb) {
        let gess = Number(numb);
        if (!guess.includes(gess)){
            guess.push(gess);
        }else {
            return
        }
    }

    function getNumber () {
        return guess;
    }

    function  guessing(gess) {

    }

    function setString (strng){
        let gess = Number(strng);
        if (gess < 1 || gess > 100){
            message = "Number out of context";
        } 
    }

    function theGame (numb){
        let gess = Number(numb);
        if (gess) {
            Math.ceil(Math.random() * 100)
            message = " New game started"
        }
    }
    return {
        guessing,
        setNumber,
        getNumber,
        setString,
        theGame
    }
}