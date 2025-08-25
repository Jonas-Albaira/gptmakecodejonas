//% color=#0fbc11 icon="\uf2b9"
//% color=160 weight=100 icon="\uf086"
namespace gptmakecode {

    //% block="ask ChatGPT $prompt"
    export function ask(prompt: string, handler: (response: string) => void) {
        let url = "http://localhost:3000/chat";
        let data = JSON.stringify({ prompt: prompt });

        control.runInParallel(() => {
            fetch(url, {
                method: "POST",
                body: data,
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => resp.json())
                .then(json => {
                    handler(json.text)
                })
                .catch(err => {
                    console.log("Error: " + err)
                    handler("Error: " + err)
                })
        })
    }
}

