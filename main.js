var profiles = [
  bob = {
    first_name: "Robert",
    last_name: "Johnson",
    age: 43,
    hometown: "Denver, CO",
  },
  fred = {
    first_name: "Fred",
    last_name: "Smith",
    age: 38,
    hometown: "Salt Lake City, UT",
  },
  jim = {
    first_name: "James",
    last_name: "Miller",
    age: 27,
    hometown: "Bozeman, MT",
  }
];
var fruits = {
  citrus: ["orange", "grapefuit", "lemon", "lime"],
  sweet: ["apple", "banana", "grape", "pear"],
  exotic: ["papaya", "mango", "coconut", "starfruit"]
};

for (var i = 0; i < profiles.length; i++) {
  for (var key in profiles[i]) {
    document.writeln(profiles[i][key] + "<br>");
  }
    document.writeln("<br>");
};

for (var key in fruits) {
  for (var i = 0 ; i < key.length; i++) {
    document.writeln(fruits[key][i] + "<br>");
  }
    document.writeln("<br>");
};
