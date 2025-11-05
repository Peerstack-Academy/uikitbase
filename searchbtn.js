 const searchBtn = document.getElementById("searchBtn");
  const searchBox = document.getElementById("searchBox");
  const searchInput = document.getElementById("searchInput");

  searchBtn.addEventListener("click", function(event) {
    event.preventDefault(); 

    if (searchBox.style.display === "none") {
      searchBox.style.display = "block";
      searchInput.focus(); 
    } else {
      searchBox.style.display = "none";
    }
  });