document.getElementById("downloadCvButton").addEventListener("click", function() {
    // Adjust the path to your CV file if it's in a different folder
    const cvUrl = "assets/MantuSahoo_CV.pdf"; // Path to your CV file
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "MantuSahoo_CV.pdf"; // The name it will save as
    link.click();
});
