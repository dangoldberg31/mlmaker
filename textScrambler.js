//console.log('tes7to')

// A default article can be assigned here in case nothing is submitted with the function call
let articleText = "A majority of Republicans rallied on Tuesday against trying former President Donald J. Trump for /“incitement of insurrection,/” with only five members of his party joining Democrats in voting to go forward with the impeachment trial for his role stirring up a mob that attacked the Capitol. The 55 to 45 vote cleared the way for Mr. Trump’s second impeachment trial, by narrowly killing a Republican effort to dismiss the charge as unconstitutional. But it strongly suggested that the Senate did not have the votes to convict the former president. The opposition of all but a handful of Republicans underscored Mr. Trump’s continued strength in the party even after his brazen campaign to overturn his election defeat, fueled by false claims of voting fraud, and the deadly assault by his followers after he urged them to go to Congress to fight the result."

//Need a format to do a first processing of article text and adding escapes where needed. 

// This will be a list of properNouns to substitute into the article. I may do a few lists depending on preferred result. 
const properNounsArray = [];

//Proper nouns to substitute into destination article.
const sourceNouns = [];

//Proper nounces to replace in destination article.
const destinationNouns = [];

//Proper noun finder function. This can be used both for finding proper nouns to replace in a submitted text, and also to pull an array of words than can be substituted into the text. 
//Can be set to find all capitalized words not beginning a sentence.

/*
const properNounFinder = text => {
    let properNouns = [];
    let textArray = text.split('. ');
    let wordsList = [];
    for (let x = 0; x<textArray.length; x++) {
        let sentenceWords = textArray[x].split(' ');
        sentenceWords.shift();
        wordsList.push(sentenceWords);
    }
    for (let i = 0; i<wordsList.length; i++) {
        if (wordsList[i][0] === wordsList[i][0].toUpperCase()) {
            properNouns.push(i);
        }
    }
    return properNouns;
}

*/

//console.log(properNounFinder(articleText));

// Returns a random number correspondending to the lenght of the substitute word array (properNouns)
const randomIndexNum = () => {
    let randomNum = Math.floor(Math.random()) * properNouns.length;
    return randomNum;
}

console.log(randomIndexNum)
