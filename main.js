const links = [
    {
        label: "Week 1 notes",
        url: "week01/index.html"
    }
]

link = "<a href=" + links[0].url> + "/>";
document.getElementById("list").innerHTML = link;