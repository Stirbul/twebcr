function triangle() {
    for (var newItem = '#'; newItem.length < 7; newItem = newItem + '#') {
        console.log(newItem);
    }
}
//---------------------------------------------
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}
//----------------------------------------------
function minArray(...numbers) {
    if (numbers == null) {
        return 0;
    }
    min = numbers[0];
    for (i = 1; i < numbers.length; ++i) {
        alert(numbers[i]);
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    return min;
}
//------------------------------------------------
class Animal {
    name;

    Animal(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    name;
    created;

    Dog(name) {
        super.name = name;
        created = Date.now;
    }
}
//----------------------------------------------------