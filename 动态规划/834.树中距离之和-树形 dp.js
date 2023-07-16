var sumOfDistancesInTree = function (n, edges) {
    let g = Array(n).fill(null).map(() => []); 
    for (const [x, y] of edges) {
        g[x].push(y);
        g[y].push(x);
    }
    console.log(g)
    let ans = Array(n).fill(0);
    let size = Array(n).fill(1);
    function dfs(x, fa, depth) {
        ans[0] += depth; 
        for (const y of g[x]) {
            if (y !== fa) { 
                dfs(y, x, depth + 1); 
                size[x] += size[y]; 
            }
        }
    }
    dfs(0, -1, 0);
    console.log(size)
     console.log(ans)

    function reroot(x, fa) {
        for (const y of g[x]) { 
            if (y !== fa) { 
                ans[y] = ans[x] + n - 2 * size[y];
                reroot(y, x); 
            }
        }
    }
    reroot(0, -1); 
    return ans;
};