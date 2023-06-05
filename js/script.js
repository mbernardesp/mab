const mab = new GloboAB().mab('prod-http');

const experimentName = 'test-experimentation-mab'; 
var experiment;

var choosen;
var globoIdToken;
var glbExpIdToken
var hsIdToken;

//Choose
const choose = async () => {

    try {  
        //Get GLOBO_ID token from cookie provided by GloboId Authenticator
        const globoIdToken = getCookie("GLOBO_ID");

        //Get hsid token from cookie provided by new session
        const hsIdToken = getCookie("hsid");

        //SORTEIO
        const exp = mab.createExperiment(experimentName);      
        choosen = await mab.choose([exp], globoIdToken, glbExpIdToken, hsIdToken);      

        const {
             abAlternative,
             arm,
             arms,
             name,
             testId
        } = choosen.experiments[0];

        document.getElementById("labelChoose").innerHTML = abAlternative;

    } catch (error) {
        console.log("must implement control on exception")
        console.log(error.msg)
    }
}

//Increment
const increment = async () => {

    try {  
        //Get GLOBO_ID token from cookie provided by GloboId Authenticator
        const globoId = getCookie("GLOBO_ID");

        //Get hsid token from cookie provided by new session
        const hsid = getCookie("hsid");

        const {
            abAlternative,
            arm,
            arms,
            name,
            testId
        } = choosen.experiments[0];

        mab.increment(
            {
                experiment: name, 
                arm: arm, 
                testId: testId, 
                abAlternative: abAlternative
            },
            globoIdToken,
            choosen.glbExpIdToken,
            hsIdToken
        );

        document.getElementById("labelIncrement").innerHTML = "{experiment: " + name + ", abAlternative: " + abAlternative + ", arm: " + arm + ", testId: " + testId + "}";

    } catch (error) {
        console.log("must implement control on exception")
        console.log(error.msg)
    }
}

//Reward
const reward = async () => {

    try {  
        //Get GLOBO_ID token from cookie provided by GloboId Authenticator
        const globoId = getCookie("GLOBO_ID");

        //Get hsid token from cookie provided by new session
        const hsid = getCookie("hsid");

        const {
            abAlternative,
            arm,
            arms,
            name,
            testId
        } = choosen.experiments[0];

        mab.reward(
            {
                experiment: name, 
                arm: arm, 
                testId: testId, 
                abAlternative: abAlternative
            },
            globoIdToken,
            choosen.glbExpIdToken,
            hsIdToken
        );

        document.getElementById("labelReward").innerHTML = "{experiment: " + name + ", abAlternative: " + abAlternative + ", arm: " + arm + ", testId: " + testId + "}";

    } catch (error) {
        console.log("must implement control on exception")
        console.log(error)
    }
}

//Function to read cookie
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}


$(document).ready(function () {
    
    $("#choose").click(function () {
        choose();
    });

    $("#increment").click(function () {
        increment();
    });

    $("#reward").click(function () {
        reward();
    });
});
