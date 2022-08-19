function a(matchD2016,deliveries){
    const mid=matchD2016.map(eachmatch => eachmatch.id)
    const r ={}
    for(s of deliveries){
        if(mid.includes(s.match_id)){
            const extrun = s.extra_runs;
            const t=s.bowling_team;
            if(r[t]){
                r[t] += parseInt(extrun);
            }
            else{
                r[t]= parseInt(extrun);
            }
        }
    }
    return r;
} 
module.exports=a