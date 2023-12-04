
async function getShaderSource(name) {
    const responsevert = await fetch(`./${name}.vert`);
    const vert = await responsevert.text();
    console.log(vert);

    const vert2 = await fetch(`./${name}.vert`).then(response => response.text());
    console.log(vert2);

    const response = await fetch(`./${name}.frag`);
    const frag = await response.text();
    console.log(frag);

    return [vert, frag];
}

async function main(){
    const outputele = document.getElementById("output");
    outputele.innerHTML = "Hello";

    const [vert, frag]= await getShaderSource("basic");
    outputele.innerHTML = vert + "\n\n" + frag;
}
main()