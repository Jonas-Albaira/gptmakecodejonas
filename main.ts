//% color=#0fbc11 icon="\uf2b9"
//% color=160 weight=100 icon="\uf086"
namespace chatgpt {

    //% block="ask ChatGPT $question"
    export function ask(question: string, handler: (response: string) => void) {
        let url = "http://localhost:3000/chat";
        let data = JSON.stringify({ question: question });

        control.runInParallel(() => {
            fetch(url, {
                method: "POST",
                body: data,
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => resp.json())
                .then(json => {
                    // server returns { answer: "..." }
                    handler(json.answer)
                })
                .catch(err => {
                    console.log("Error: " + err)
                    handler("Error: " + err)
                })
        })
    }
}

