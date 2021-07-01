/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
 var findPoisonedDuration = function (timeSeries, duration) {
    let poisontime = 0
    let waketimeline = timeSeries[0]+duration
    for (let i = 1; i < timeSeries.length; i++) {
        //中毒了
        if (timeSeries[i] >= waketimeline) {
            waketimeline = timeSeries[i] + duration
            poisontime+=duration
        }else{
            waketimeline= waketimeline + (timeSeries[i]-timeSeries[i-1])
            poisontime+=(timeSeries[i]-timeSeries[i-1])
        }
        if(i=timeSeries.length-1&&waketimeline>timeSeries[i-1]){
            poisontime+=duration
        }
    }
    return poisontime
};
findPoisonedDuration([1,2,3,4,5],5)