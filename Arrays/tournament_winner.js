
// TC O(N) | SC O(N)
function tournamentWinner(competitions, results) {
    let resPlayerPoints = {};
    let tourWinner = ''
    let pointsMax = -Infinity;

    for (let i = 0; i < competitions.length; i++) {
        let comp = competitions[i];
        let res = results[i];
        let winner;
        if (res == 1){
            // home winner
            winner = comp[0];
        }else{
            // away win
            winner = comp[1];
        }
        if (winner in resPlayerPoints){
            resPlayerPoints[winner] += 3;
        }else{
            resPlayerPoints[winner] = 3;
        }
        if (resPlayerPoints[winner] > pointsMax){
            pointsMax = resPlayerPoints[winner];
            tourWinner = winner;
        }
    }

    return tourWinner;
  }

  console.log("\n First test")
  competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"],
  ];

  results = [0, 0, 1]
  console.log(tournamentWinner(competitions, results));
  
//   console.log("\n Second test")
//   arr2 = [-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20]
//   console.log(sortedSquaredArray(arr2));
  
//   console.log("\n Third test")
//   arr3 = [1, 1, 4, 9, 9, 9, 16]
//   console.log(sortedSquaredArray(arr3));
  
//   console.log("\n Fourth test")
//   arr4 = [-2, -1]
//   console.log(sortedSquaredArray(arr4));
  
  