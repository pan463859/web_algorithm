var countCollisions = function (directions) {
    directions=directions.split('');
    let crashed = 0
    let allr = 0
    for (let i = 0; i < directions.length; i++) {
        if (directions[i] == 'L') {
            if (!!directions[i - 1] && directions[i - 1] == 'S') {
                debugger
                directions[i] = 'S'
                crashed++
                console.log('ls',crashed,i)
            }
            continue
        }
        else if (directions[i] == 'S') {
            continue
        }
        else if (directions[i] == 'R') {
            if (!!directions[i + 1]) {
                if (directions[i + 1] == 'R') {
                    allr++
                    continue
                }
                else if (directions[i + 1] == 'L') {
                    crashed = crashed + (allr + 2)
                    console.log('rl',crashed,i)
                    allr = 0
                    directions[i + 1] = 'S'
                    continue
                }
                else if (directions[i + 1] == 'S') {
                    crashed = crashed + allr+1
                    console.log('rs',crashed,i)
                    allr = 0
                    continue
                }
            }
        }
    }
    return crashed
};
countCollisions("RLRSLL")