const links = [
    {
        label: "Week 1 notes",
        url: "week01/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week02/index.html"
    }
]

for (i = 0; i < links.length; i++)
{
    var a = document.createElement('a');
    var link = document.createTextNode("Week " + i);

    a.appendChild(link);
    a.title = links[i].label;

    a.href = links[i].url;
    console.log(links[i].url);

    document.getElementById("list").appendChild(a);
}
