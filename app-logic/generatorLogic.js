import allLanguages from './default-languages.json' with { type: 'json' };

// Global variables for language selection and number of paragraphs
let chosenLanguage = document.querySelector("#language-select");
let chosenItem = chosenLanguage.options[chosenLanguage.selectedIndex].value;
let numParagraphs = parseInt(document.getElementById('paragraph-count').value);
let numSentences = parseInt(document.getElementById('sentence-count').value);
let result = document.querySelector(".output");
let language = null;


window.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', () => {
        result.innerHTML = generateParagraphs(); // Generate paragraphs
    });
});

function generateParagraphs() {
    let numParagraphs = parseInt(document.getElementById('paragraph-count').value);
    let numSentences = parseInt(document.getElementById('sentence-count').value);
    let paragraph = "";
    let cleanParagraph = "";
    let paragraphs = [];
    // generate paragraphs based on sentences
    switch (chosenItem) {
        case "lang-elvish":
            // loop through the number of paragraphs 
            for (let i = 0; i < numParagraphs; i++) {
                paragraph = ""; // reset paragraph for each iteration
                // for each paragraph, add the user's desired number of sentences
                for (let j = 0; j < numSentences; j++) {
                    paragraph += generateSentences(); // add generated sentences to the paragraph
                }
                paragraphs.push(paragraph);
                
            }
                cleanParagraph = paragraphs.map(p => `<p>${p}</p>`).join(""); // join paragraphs with new lines. \n won't work on HTML
    
            break;
        case "lang-dwarvish":
            // loop through the number of paragraphs 
            for (let i = 0; i < numParagraphs; i++) {
                paragraph = ""; // reset paragraph for each iteration
                // for each paragraph, add the user's desired number of sentences
                for (let j = 0; j < numSentences; j++) {
                    paragraph += generateSentences(); // add generated sentences to the paragraph
                }
                paragraphs.push(paragraph);
                
            }
                cleanParagraph = paragraphs.map(p => `<p>${p}</p>`).join(""); // join paragraphs with new lines. \n won't work on HTML
            break;
        case "lang-draconic":
            break;
        case "lang-alien":
            break;
        case "custom-lang":
            break;
    }

    return cleanParagraph;
}



function generateSentences() {
    let numSentences = parseInt(document.getElementById('sentence-count').value);
    let sentenceLength = Math.floor(Math.random() * 10) + 1; // sentence length between 1 and 10 words
    let generatedSentence = "";
    let firstChar = '';
    let cleanSentemce = "";
    // generate sentences based on words
    switch (chosenItem) {
        case "lang-elvish":

            for (let i = 0; i < numSentences; i++) {
                for (let j = 0; j < sentenceLength; j++) {
                    generatedSentence += generateWords() + " "; // add generated words to the sentence with spaces
                }

                firstChar = generatedSentence.charAt(0).toUpperCase();
                generatedSentence = firstChar + generatedSentence.slice(1); // capitalize the first letter of the sentence
                cleanSentemce = generatedSentence.trim() + ". "; // trim any extra spaces and add a period at the end of the sentence
            }
            break;
        case "lang-dwarvish":
            for (let i = 0; i < numSentences; i++) {
                for (let j = 0; j < sentenceLength; j++) {
                    generatedSentence += generateWords() + " "; // add generated words to the sentence with spaces
                }

                firstChar = generatedSentence.charAt(0).toUpperCase();
                generatedSentence = firstChar + generatedSentence.slice(1); // capitalize the first letter of the sentence
                cleanSentemce = generatedSentence.trim() + ". "; // trim any extra spaces and add a period at the end of the sentence
            }
            break;
    }
    return cleanSentemce;
}

function generateWords() {
    let generatedWord = "";
    switch (chosenItem) {
        case "lang-elvish":
            // select first language of the json
            language = allLanguages.languages[0];
            let numSyllables = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


            // generate syllables 
            for (let i = 0; i < numSyllables; i++) {
                generatedWord += generateSyllables();
            }

            break;
        case "lang-dwarvish":
            language = allLanguages.languages[1];
            let numSyllables1 = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


            // generate syllables 
            for (let i = 0; i < numSyllables1; i++) {
                generatedWord += generateSyllables();
            }
            break;

        default:
            alert("Syllable generation not implemented for this language yet.");
            break;
    }

    return generatedWord;
}

function generateSyllables() {
    let generatedSyllable = "";

    switch (chosenItem) {
        case "lang-elvish":
            // select first language of the json
            language = allLanguages.languages[0];
            let consonants = language.C;
            let vowels = language.V;
            let syllables = language.syllables;

            // choose random syllable structure from the language's syllables array
            let randomSyllableIndex = Math.floor(Math.random() * syllables.length);
            let randomSyllable = syllables[randomSyllableIndex];

            // for each character in the syllable (C or V),
            // replace with random consonant or vowel from the language's consonants or vowels array

            for (let char of randomSyllable) {
                if (char === "C") {
                    let randomConsonantIndex = Math.floor(Math.random() * consonants.length);
                    generatedSyllable += consonants[randomConsonantIndex];
                } else if (char === "V") {
                    let randomVowelIndex = Math.floor(Math.random() * vowels.length);
                    generatedSyllable += vowels[randomVowelIndex];
                }
            }
            break;
        case "lang-dwarvish":
            // select first language of the json
            language = allLanguages.languages[1];
            let consonants1 = language.C;
            let vowels1 = language.V;
            let syllables1 = language.syllables;

            // choose random syllable structure from the language's syllables array
            let randomSyllableIndex1 = Math.floor(Math.random() * syllables1.length);
            let randomSyllable1 = syllables1[randomSyllableIndex1];

            // for each character in the syllable (C or V),
            // replace with random consonant or vowel from the language's consonants or vowels array

            for (let char of randomSyllable1) {
                if (char === "C") {
                    let randomConsonantIndex = Math.floor(Math.random() * consonants1.length);
                    generatedSyllable += consonants1[randomConsonantIndex];
                } else if (char === "V") {
                    let randomVowelIndex = Math.floor(Math.random() * vowels1.length);
                    generatedSyllable += vowels1[randomVowelIndex];
                }
            }
            break;
        case "lang-draconic":
            break;
        case "lang-alien":
            break;
        default:
            alert("Syllable generation not implemented for this language yet.");
            break;
    }

    return generatedSyllable;
}