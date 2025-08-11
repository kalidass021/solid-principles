// liskov substition principle

// subtypes must be sustitubable for their base types

// if a sub class breaks the behaviour expected from the parent, it's violating LSP (Lisko Substition Principle).


// wrong

class Bird {
    fly() {
        // ..
    }
}

class Eagle extends Bird {
    dive() {
        //..
    }
}

const eagle = new Eagle();
eagle.fly();
eagle.dive();

class Penquin extends Bird {
    // Problem: penquit can't fly
}

// correct way

class Bird {
    layEgg() {
        // ..
    }
}

class FlyingBird {
    fly() {
        // ..
    }
}

class SwimmingBird extends Bird {
    swim() {
        // ..
    }
}

class Eagle extends FlyingBird {
    // ..
}

class Penquin extends SwimmingBird {
    // ..
}

const penquin = new Penquin();
penquin.swim();
penquin.layEgg();