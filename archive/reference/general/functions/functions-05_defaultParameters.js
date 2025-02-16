// keywords: default parameters

// can now put default parameters right with parameters in function
// BUT WHEREVER YOU START, YOU HAVE TO PROVIDE DEFAULTS FOR THE REST OF THE PARAMETERS AFTER THAT
// In the case below, if the 5 year default was removed, would return NaN
function interest(principal, rate = 3.5, years = 5) {
    // OLD WAY: use truthyness to set defaults
    // rate = rate || 3.5
    // years = years || 5

    return ((principal * rate) / 100) * years
}

console.log(interest(10000))
