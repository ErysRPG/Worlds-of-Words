import allLanguages from './default-languages.json' with { type: 'json' };

// Global variables for language selection and number of paragraphs
let chosenLanguage = document.querySelector("#language-select");
let chosenItem = chosenLanguage.options[chosenLanguage.selectedIndex].value;
let numParagraphs = parseInt(document.getElementById('paragraph-count').value);
let numSentences = parseInt(document.getElementById('sentence-count').value);
let result = document.querySelector(".output");
let downloadLink = document.getElementById("download-link");
let uploadBtn = document.getElementById("file-input");
let uploadedCustomLanguage = null; // Variable to store uploaded custom language data
let clearBtn = document.getElementById("clear-btn");

window.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    generateBtn.addEventListener('click', () => {
        // Update chosen language and regenerate paragraphs when the button is clicked
        chosenItem = chosenLanguage.options[chosenLanguage.selectedIndex].value;
        // if custom language is selected, load custom data into JSON before generating paragraphs
        if (chosenItem === "custom-lang") {
            loadCustomDataIntoJSON(); // Load custom data into JSON before generating paragraphs
            // Check if required fields are filled out before generating paragraphs
            if (!requiredFieldsIfCustomLanguageSelected()) {
                return;
            }
        }
        result.innerHTML = generateParagraphs(); // Generate paragraphs
    },
        downloadLink.addEventListener('click', () => {
                saveLanguage(); // Save custom language as JSON file when download link is clicked
        }
    ),
        // Add event listener for file input change to handle custom language file upload
        uploadBtn.addEventListener('change', (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedCustomLanguage = JSON.parse(e.target.result);
                // Add the uploaded custom language to the allLanguages object
                allLanguages.languages.push(uploadedCustomLanguage);
                // Set the custom language option as the selected language in the dropdown
                chosenLanguage.value = "custom-lang";
                // erase any existing custom language data from the textarea fields before loading new data
                clearCustomLanguageFields();
                // load the data from the uploaded file into the custom language fields
                document.getElementById("custom-lang-sounds").value = uploadedCustomLanguage.C.concat(uploadedCustomLanguage.V).join(" ");
                document.getElementById("custom-lang-syllables").value = uploadedCustomLanguage.syllables.join(" ");
            };
            reader.readAsText(file);
        }));


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
            case "lang-alien":
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
            case "custom-lang":
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
            case "lang-draconic":
                for (let i = 0; i < numSentences; i++) {
                    for (let j = 0; j < sentenceLength; j++) {
                        generatedSentence += generateWords() + " "; // add generated words to the sentence with spaces
                    }

                    firstChar = generatedSentence.charAt(0).toUpperCase();
                    generatedSentence = firstChar + generatedSentence.slice(1); // capitalize the first letter of the sentence
                    cleanSentemce = generatedSentence.trim() + ". "; // trim any extra spaces and add a period at the end of the sentence
                }
                break;
            case "lang-alien":
                for (let i = 0; i < numSentences; i++) {
                    for (let j = 0; j < sentenceLength; j++) {
                        generatedSentence += generateWords() + " "; // add generated words to the sentence with spaces
                    }

                    firstChar = generatedSentence.charAt(0).toUpperCase();
                    generatedSentence = firstChar + generatedSentence.slice(1); // capitalize the first letter of the sentence
                    cleanSentemce = generatedSentence.trim() + ". "; // trim any extra spaces and add a period at the end of the sentence
                }
                break;
            case "custom-lang":
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
        let language = null;
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
                let numSyllables2 = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


                // generate syllables 
                for (let i = 0; i < numSyllables2; i++) {
                    generatedWord += generateSyllables();
                }
                break;
            case "lang-draconic":
                language = allLanguages.languages[2];
                let numSyllables3 = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


                // generate syllables 
                for (let i = 0; i < numSyllables3; i++) {
                    generatedWord += generateSyllables();
                }
                break;
            case "lang-alien":
                language = allLanguages.languages[3];
                let numSyllables4 = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


                // generate syllables 
                for (let i = 0; i < numSyllables4; i++) {
                    generatedWord += generateSyllables();
                }
                break;
            case "custom-lang":
                language = allLanguages.languages[3];
                let numSyllablesCustom = Math.floor(Math.random() * 5) + 1; // syllable number between 1 and 6


                // generate syllables 
                for (let i = 0; i < numSyllablesCustom; i++) {
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
        let language = null;
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
                // select second language of the json
                language = allLanguages.languages[1];
                console.log(language);
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
                language = allLanguages.languages[2];
                console.log(language);
                let consonants2 = language.C;
                let vowels2 = language.V;
                let syllables2 = language.syllables;

                // choose random syllable structure from the language's syllables array
                let randomSyllableIndex2 = Math.floor(Math.random() * syllables2.length);
                let randomSyllable2 = syllables2[randomSyllableIndex2];

                // for each character in the syllable (C or V),
                // replace with random consonant or vowel from the language's consonants or vowels array

                for (let char of randomSyllable2) {
                    if (char === "C") {
                        let randomConsonantIndex = Math.floor(Math.random() * consonants2.length);
                        generatedSyllable += consonants2[randomConsonantIndex];
                    } else if (char === "V") {
                        let randomVowelIndex = Math.floor(Math.random() * vowels2.length);
                        generatedSyllable += vowels2[randomVowelIndex];
                    }

                }
                break;
            case "lang-alien":
                language = allLanguages.languages[3];
                console.log(language);
                let consonants3 = language.C;
                let vowels3 = language.V;
                let syllables3 = language.syllables;

                // choose random syllable structure from the language's syllables array
                let randomSyllableIndex3 = Math.floor(Math.random() * syllables3.length);
                let randomSyllable3 = syllables3[randomSyllableIndex3];

                // for each character in the syllable (C or V),
                // replace with random consonant or vowel from the language's consonants or vowels array

                for (let char of randomSyllable3) {
                    if (char === "C") {
                        let randomConsonantIndex = Math.floor(Math.random() * consonants3.length);
                        generatedSyllable += consonants3[randomConsonantIndex];
                    } else if (char === "V") {
                        let randomVowelIndex = Math.floor(Math.random() * vowels3.length);
                        generatedSyllable += vowels3[randomVowelIndex];
                    }

                }
                break;
            case "custom-lang":
                loadCustomDataIntoJSON();
                language = allLanguages.languages[allLanguages.languages.length - 1]; // get the last language in the array, which should be the custom language

                let consonantsCustom = language.C;
                let vowelsCustom = language.V;
                let syllablesCustom = language.syllables;

                // choose random syllable structure from the language's syllables array
                let randomSyllableIndexCustom = Math.floor(Math.random() * syllablesCustom.length);
                let randomSyllableCustom = syllablesCustom[randomSyllableIndexCustom];

                // for each character in the syllable (C or V),
                // replace with random consonant or vowel from the language's consonants or vowels array

                for (let char of randomSyllableCustom) {
                    if (char === "C") {
                        let randomConsonantIndex = Math.floor(Math.random() * consonantsCustom.length);
                        generatedSyllable += consonantsCustom[randomConsonantIndex];
                    } else if (char === "V") {
                        let randomVowelIndex = Math.floor(Math.random() * vowelsCustom.length);
                        generatedSyllable += vowelsCustom[randomVowelIndex];
                    }

                }
                break;
            default:
                alert("Syllable generation not implemented for this language yet.");
                break;
        }

        return generatedSyllable;
    }

    function loadCustomDataIntoJSON() {
        // Get custom sounds and syllables from the textarea inputs and split them into arrays
        let customSounds = document.getElementById("custom-lang-sounds").value.trim().split(/\s+/);
        let customSyllables = document.getElementById("custom-lang-syllables").value.trim().split(/\s+/);

        // Create a custom language object
        let customLanguage = {
            name: "custom-lang",
            V: customSounds.filter(sound => /^[aeiouAEIOU]$/.test(sound)), // Filter vowels
            C: customSounds.filter(sound => !/^[aeiouAEIOU]$/.test(sound)), // Filter consonants
            syllables: customSyllables
        };

        // Add the custom language to the allLanguages object
        allLanguages.languages.push(customLanguage);
    }

    function requiredFieldsIfCustomLanguageSelected() {
        if (chosenItem === "custom-lang") {
            // Check if the custom language fields are filled out
            let customSounds = document.getElementById("custom-lang-sounds").value
            let customSyllables = document.getElementById("custom-lang-syllables").value
            if (customSounds === "" || customSyllables === "") {
                alert("Please fill out the custom language fields before generating text.");
                return false; // Prevent generation if fields are not filled
            } else {
                loadCustomDataIntoJSON(); // Load custom data into JSON if fields are filled
                return true; // Allow generation to proceed
            }
        }
    }

    function saveLanguage() {
        // get the custom language object from the allLanguages object
        let customLanguage = allLanguages.languages[allLanguages.languages.length - 1]; // get the last language in the array, which should be the custom language
        customLanguage.name = prompt("Enter a name for your custom language:"); // Prompt the user to enter a name for their custom language

        // Create a blob from the custom language object and create a download link
        let blob = new Blob([JSON.stringify(customLanguage)], { type: "application/json" });
        let url = URL.createObjectURL(blob);
        let downloadLink = document.getElementById("download-link");
        downloadLink.href = url;
        downloadLink.download = `${customLanguage.name}.json`; // Set the download filename to the custom language name
    }

    function clearCustomLanguageFields() {
        document.getElementById("custom-lang-sounds").value = "";
        document.getElementById("custom-lang-syllables").value = "";
    }

    