
async function getShader(name) {
    const responsevert = await fetch(`./${name}.vert`);
    const vert = await responsevert.text();
    console.log(vert);

    const response = await fetch(`./${name}.frag`);
    const frag = await response.text();
    console.log(frag);

    return [vert, frag];
}

async function main(){
    outputele = document.getElementById("output");
    outputele.innerHTML = "Hello";

    const [vert, frag]= await getShader("basic");
    outputele.innerHTML = vert + "\n\n" + frag;
}
main()