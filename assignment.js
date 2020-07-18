//javascript problem solving assignment.

//problem 1

function feetToMile(feet) {

    if(feet <= 0){
        return "Distance Can not be zero or negative!"
    } else {
        var mile = feet / 5280;  // 1 mile = 5280 feet.
    }
    return mile;
}

var result = feetToMile(5280);
console.log(result);

// end of problem 1.



// problem 2

function woodCalculator(chair, table, bed){

    var woodForChair = chair * 1;
    var woodForTable = table * 3;
    var woodForBed = bed * 5;
    var totalWood = woodForChair + woodForTable + woodForBed;
    return totalWood;
}

var totalwoodForAllFurniture = woodCalculator(2, 2, 2);

console.log(totalwoodForAllFurniture);

// end of problem 2.


// problem 3

function brickCalculator(floorOfBuilding){

    if (floorOfBuilding <= 10){

        var brickPerFloorFirstTen = 15000;
        var totalBrickNeed = brickPerFloorFirstTen * floorOfBuilding;

    } else if (floorOfBuilding <= 20){

        var brickPerFloorUpTen = 12000;
        var floorUpTen = floorOfBuilding - 10;
        var brickNeed = floorUpTen * brickPerFloorUpTen;
        var totalBrickNeed = brickNeed + 150000;

    } else {

        var brickPerFloorUpTwenty = 10000;
        var floorUpTwenty = floorOfBuilding - 20;
        var brickNeed = floorUpTwenty * brickPerFloorUpTwenty;
        var totalBrickNeed = brickNeed + 270000;
    }

    return totalBrickNeed;
}


var result = brickCalculator(11);

result = Math.abs(result);   //convert negative value to positive.

console.log(result);


//problem 4

function tinyFriend(names){
    var NameOfTinyFriend = names[0];

    if(names.length <= 0){
        return 'Your list of friends is empty!'
    } else{
        for (var i = 0; i < names.length; i++){
            var currentTinyName = names[i];
            if (currentTinyName.length < NameOfTinyFriend.length){
                NameOfTinyFriend = currentTinyName;
            }
        }
    }

    return NameOfTinyFriend;
}

var result = tinyFriend(['Farhad','Rony','Shahreen','FH']);

console.log(result);



//end of problem 4.
