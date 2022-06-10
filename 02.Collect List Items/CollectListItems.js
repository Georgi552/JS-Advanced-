function extractText() {
    const allListItems = Array.from(document.querySelectorAll("li"));
    const result = allListItems.map(e =>e.textContent).join("\n");
    document.getElementById('sum').value = result;
    
}