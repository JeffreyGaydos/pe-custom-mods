function GenNationPage(nationCat) {
var cats = `Experimental
Reconnaissance
Night Fighter
Bomber
Fighter
Two Seater
Transport
Topic
Maritime
Lighter than Air
Concept
Attack Aircraft
General
Electronic Warfare
Weaponry`.split("\n");

var shortCodeBase = `[catlist taxonomies_and="category:{NATION};post_tag:{CAT}" numberposts=15]`;

var nation = "";
for(var i = 0; i < cats.length; i++) {
  var catline = shortCodeBase.replace("{NATION}", "{" + nationCat + "}");
  catline = catline.replace("{CAT}", "{" + cats[i] + "}");
  nation += `<div class="nat-cat" id="cat-${cats[i]}">
    <p>${cats[i]}</p>
    ${catline}
    <br/>
</div>
`;
}

nation += `
<script>
document.querySelectorAll(".nat-cat .lcp_catlist:empty").forEach(e => e.parentElement.style.display = "none")
</script>
`;

return nation;
}