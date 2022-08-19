function d(matches){
    const z={};
    for(let match of matches){
        const v=match.winner;
        if(z[v]){
            z[v] +=1;
        }
        else{
            z[v]=1;
        }
        return z;
    }
}
module.exports=d;