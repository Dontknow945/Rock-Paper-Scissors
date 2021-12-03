function computerPlay() {
    const computer = Math.floor(Math.random()*3)+1;
    
    switch (computer) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            break;
    }
}