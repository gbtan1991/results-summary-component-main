fetch("./data.json")
.then(response => response.json())
.then(data =>{

    //GETTING SUMMARY ITEMS
    const summaryItems  = document.querySelectorAll(".summary-item");
    
    //ITERATION OVER THE DATA AND UPDATING THE SUMMARY ITEMS
    let totalScore = 0;
    data.forEach((item, index) => {      
        const summaryItem = summaryItems[index];

        //UPDATING THE ICONS FROM JSON
        const iconImg = summaryItem.querySelector(".icon");
        iconImg.src = item.icon;

        //UPDATING THE TITLE FROM JSON
        const title = summaryItem.querySelector(".summary-item-title");
        title.textContent = item.category;

        //UPDATING THE SCORE FROM JSON
        const scoreSpan = summaryItem.querySelector(".summary-score span");
        scoreSpan.textContent =item.score;

        //CALCULATING THE SCORE
        totalScore += item.score


      });

//CALCULATING THE AVERAGE SCORE
const averageScore = totalScore / data.length;

//DISPLAYING THE AVERAGE SCORE
const resultScore = document.querySelector(".result-score span");
resultScore.textContent = averageScore.toFixed(0);

//DEFINE RANKING AND DESCRIPTIONS BASED ON THE AVERAGE SCORE
const ranking = averageScore >= 90 ? "Excellent" :
                averageScore >= 70 ? "Great" :
                averageScore >= 50 ? "Good" : "Average";

const description = averageScore >= 90 ? "You scored higher than 90% of the people who have taken these test" : 
                    averageScore >= 70 ? "You scored higher than 65% of the people who have taken these test" :
                    averageScore >= 50 ? "You scored higher than 50% of the people who have taken these test" :
                    "You scored lower than 50% of the people who have taken these test";

//UPDATE THE RANKING AND DESCRIPTION
const rankElement = document.querySelector(".result-rank");
rankElement.textContent = ranking;

const descriptionElement = document.querySelector(".result-description");
descriptionElement.textContent = description;


})



.catch(error =>{
    console.log(error);
});





