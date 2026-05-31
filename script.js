window.addEventListener("scroll", () => {
document.querySelector("nav").style.boxShadow =
window.scrollY > 50
? "0 5px 15px rgba(0,0,0,0.2)"
: "none";
});
function searchBible() {

    let search = document
    .getElementById("verseSearch")
    .value
    .toLowerCase();

    let verses = {
        "philippians 4:13":
        "I can do all things through Christ who strengthens me.",

        "john 3:16":
        "For God so loved the world that He gave His only begotten Son.",

        "psalm 23:1":
        "The Lord is my shepherd; I shall not want.",

        "jeremiah 29:11":
        "For I know the plans I have for you, declares the Lord."
    };

    let result =
    verses[search] ||
    "Verse not found. Open the full Bible below.";

    document.getElementById("bibleResult").innerHTML =
    "<p>" + result + "</p>";
}
