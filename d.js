function d(matches){
    const r={};
    for(let match of matches){
        const season=match.season;
        if(r[season]){
            r[season] +=1;
        }
        else{
            r[season] =1;
        }
    }
    return r;
}
module.exports=d;