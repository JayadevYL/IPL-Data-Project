function b(matches){
    let add=0
    for(let match of matches){
        const team =match.winner
        if(team === 'Mumbai Indians')
        add++
    }
    return add
}
module.exports=b
