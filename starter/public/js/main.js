console.log("Script Running!");
const handleSubmitSurvey = () => {
    

	const taskValue = document.getElementById("taskType").value; // correct id
	const difficultyLevelValue = document.getElementById("difficultyType").value; // correct id
	const titleValue = document.getElementById("taskTitle").value; // correct id
	const dV = document.getElementById("taskDescription").value; // correct id
	const timeValue = document.getElementById("timeType").value; // correct id

	const writeData = firebase.database().ref();

	writeData.push({
		title: titleValue,
		time: timeValue,
		difficulty: difficultyLevelValue,
		description: dV,
		type: taskValue
    });
    
    alert("Your task has been submitted!")
    taskValue.value = null;
    difficultyLevelValue.value = null;
    titleValue.value = "";
    dV.value = "";
    timeValue.value = "";

}
