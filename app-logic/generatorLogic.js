import allLanguages from './default-languages.json' with { type: 'json' };

// Global variables for language selection and number of paragraphs
    let chosenLanguage = document.querySelector("#language-select");
    let chosenItem = chosenLanguage.options[chosenLanguage.selectedIndex].value;
    let numParagraphs = parseInt(document.getElementById('paragraph-count').value);
    let numSentences = parseInt(document.getElementById('sentence-count').value);
    let result = document.querySelector(".output");
    let language = null;
    let syllable = null;
    // Global arrays to hold generated words, paragraphs, and syllables
    let words = [];
    let paragraphs = [];
    let syllables = [];

window.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', () => {
        result.innerHTML = generateParagraphs(); // Generate new words and display them
    });
});

function generateParagraphs() {
            let numParagraphs = parseInt(document.getElementById('paragraph-count').value);
            let paragraph = "";
    // generate paragraphs based on sentences
    switch (chosenItem) {
        case "lang-elvish":
            
            for (let i = 0; i < numParagraphs; i++) {
               paragraph += generateSentences() + " \n"; // add generated sentences to the paragraph, separate by line breaks
            }
            
        
            result.innerHTML = paragraph;
            break;
        case "lang-dwarvish":
            language = allLanguages[1];
            break;
        case "lang-draconic":
            language = allLanguages[2];
            break;
        case "lang-alien":
            language = allLanguages[3];
            break;
        case "custom-lang":
            language = allLanguages[4];
            break;
    }
    return paragraph;
}


function generateSentences() {
            let numSentences = parseInt(document.getElementById('sentence-count').value);
            let sentenceLength = Math.floor(Math.random() * 10) + 1; // sentence length between 1 and 10 words
            let generatedSentence = "";
            let firstChar = '';
    // generate sentences based on words
    switch (chosenItem) {
        case "lang-elvish":
            
            for (let i = 0; i < numSentences; i++) {
                for (let j = 0; j < sentenceLength; j++) {
                    generatedSentence += generateWords() + " "; // add generated words to the sentence with spaces
                }
                
                firstChar = generatedSentence.charAt(0).toUpperCase();
                generatedSentence = firstChar + generatedSentence.slice(1); // capitalize the first letter of the sentence
                generatedSentence = generatedSentence.trim() + ". "; // trim any extra spaces and add a period at the end of the sentence
            }
        }
    return generatedSentence;
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
    
        default:
            alert("Syllable generation not implemented for this language yet.");
            break;
    }

    return generatedWord;
}

function generateSyllables() {
    let generatedSyllable ="";
          
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
        
        default:
            alert("Syllable generation not implemented for this language yet.");
            break;
    }

    return generatedSyllable;
}