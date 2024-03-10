const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const Matinee_Discount = 3;

function buyTicket() {
    // Check for invalid age input (non-numeric)
    const age = prompt("What is your Age?");
    if (isNaN(age)) {
        alert("Please enter a valid numeric age.");
        return; // Exit function early if age is invalid
    }

    // Check for invalid age range (negative or above 120)
    if (age < 0 || age > 120) {
        alert("Please enter a valid age between 0 and 120.");
        return; // Exit function early if age is out of range
    }

    let cost = getBaseTicketCost(age);

    // Convert isMatinee to lowercase for case-insensitive comparison
    const isMatinee = prompt("Are you attending a matinee show?").toLowerCase();
    if (isMatinee !== "yes" && isMatinee !== "y" && isMatinee !== "no" && isMatinee !== "n") {
        alert("Please answer 'yes', 'no', 'y', or 'n' for the matinee question.");
        return; // Exit function early if matinee answer is invalid
    }

    if (isMatinee === "yes" || isMatinee === "y") {
        cost = cost - Matinee_Discount;
    }

    alert("Your ticket will cost: $" + cost);
}

function getBaseTicketCost(age) {
    if (age <= 12 || age >= 65) {
        return CHILD_AND_SENIOR_TICKET_COST;
    }
    return GENERAL_ADMISSION_TICKET_COST;
}