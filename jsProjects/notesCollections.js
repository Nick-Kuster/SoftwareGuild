var friends = ["Aneki", "Quell", "Clarity",
               "Sleepy", "Roghar", "DM Crimson"];
var team1 = new Array();
var team2 = new Array();
//adds to end
for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.push(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.push(friends[i]);
    }
}

//adds to beginning


    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1.unshift(friends[i]);
    } else {
        // otherwise add them to team 2
        team2.unshift(friends[i]);
    }
}
//Also adds to end
for (var i = 0; i < friends.length; i++) {
    if (i % 2 == 0) {
        // if the index is even, add the person to team 1
        team1[team1.length] = friends[i];
    } else {
        // otherwise add them to team 2
        team2[team2.length] = friends[i];
    }
}

function findMax(array){
var largest =  Math.max.apply(Math, array);
console.log(largest);
}

findMax([1,2,3,4,5,72,-5000])
