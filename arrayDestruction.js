
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

    let [name, skills, scores] = student;   //Destruction array name to name, skills array to skills, scores array to scores
    console.log(name, skills, scores)       
    let [htmScore, cssScore, jsScore, reactScore] = scores;  //Destruction array scores array to different scores
    console.log(jsScore, reactScore)       //jsScore and React score to variable.


