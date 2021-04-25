const links = [
    {
        label: "Week 1 notes",
        url: "week01/index.html"
    }
]

// link = "<a href=" + links[0].url> + "Week 1</a>";
// document.getElementById("list").innerHTML = link;

var a = document.createElement('a');
var link = document.createTextNode("This is link");

a.appendChild(link);

a.title = "This is Link";

a.href = "https://www.geeksforgeeks.org";

document.getElementById("list").appendChild(a);
