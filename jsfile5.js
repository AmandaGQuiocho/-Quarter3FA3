document.getElementById("generateButton").onclick = winners;
function winners() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);
	
	let lg = Math.max(num1, num2, num3);
    let rank = [num1, num2, num3].sort(() => Math.random() - 0.5); 
	
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let letter = letters[num1 - 1] || "A";
    let minstotal = num2 * num3;
    let hours = Math.floor(minstotal/ 60);
    let minutes = minstotal % 60;

    document.getElementById("story").innerHTML = `
        <h2>Race Winners</h2>
        <p><b>The Top 3 Finishers are:</b> ${num1}, ${num2}, ${num3}</p>
        <p><b>1st Place:</b> Runner #${rank[0]}</p>
        <p><b>2nd Place:</b> Runner #${rank[1]}</p>
        <p><b>3rd Place:</b> Runner #${rank[2]}</p>
        <p>The medal letter for racer #${num1} is <b>${letter.toUpperCase()}</b></p>
        <p>Finishing the race in a span of <b>${hours} hour(s) and ${minutes} minute(s)</b></p>
		<p><b>The runner with the greatest number tag is:</b> ${lg}</p>
        <p>Congratulations to all runners!</p>
    `;
}
