function showDetails(parkId) {
    const detailElement = document.getElementById(`details-${parkId}`);
    const displayStyle = detailElement.style.display;
    if (displayStyle === "block") {
        detailElement.style.display = "none";
    } else {
        detailElement.style.display = "block";
    }
}