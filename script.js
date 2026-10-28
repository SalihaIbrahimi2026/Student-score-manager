const body = document.getElementById("body");
const btn = document.getElementById("btn_click");

btn.addEventListener("click", function(event){
    const numberOfSubjects = Number(document.getElementById("Num_subjects").value);
    document.body.appendChild(document.createElement("br"));

   


    let arr_scores = [];
    let get_inputs = []

    for ( let i=1; i<=numberOfSubjects; i++){
        let label = document.createElement("label")
        body.appendChild(label);
        label.textContent = `Enter the score for subject ${i}`
        let scores = document.createElement("input");
        scores.type = "number"
        body.appendChild(scores);
        document.body.appendChild(document.createElement("br"));
        document.body.appendChild(document.createElement("br"));

        get_inputs.push(scores);
    }
   

    let push_btn = document.createElement("button");
    push_btn.type = "submit"
    push_btn.textContent = "Submit Scores";
    body.appendChild(push_btn);

push_btn.addEventListener("click", function(){

    arr_scores = [];
    for (let i=0; i< get_inputs.length; i++){
        let get_scores = Number(get_inputs[i].value);
        arr_scores.push(get_scores);
    }

    function Total(a){
    let total = a.reduce((Sum,num) => Sum+num, 0);
    let p = document.createElement("p");
    body.append(p);
    p.textContent = `Total of scores:  ${total}`;

    let average = a.reduce((Sum,num) => 
        Sum+num/arr_scores.length, 0);
    let p1 = document.createElement("p");
    body.append(p1);
    p1.textContent = `Average of scores:  ${average}`;
    console.log(average);
}
    
Total(arr_scores);

});



})
