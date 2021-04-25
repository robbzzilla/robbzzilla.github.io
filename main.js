const links = [
    {
        label: "Week 1 notes",
        url: "week01/index.html"
    }
]

// link = "<a href=" + links[0].url> + "Week 1</a>";
// document.getElementById("list").innerHTML = link;

var a = document.createElement('a');
var link = document.createTextNode("Week 01");

a.appendChild(link);

a.title = links[0].label;

a.href = links[0].url;

document.getElementById("list").appendChild(a);
