export function validarInputUsuario(input) {
    const sinTildes = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    const soloPermitidos = sinTildes.replace(/[^a-z.]/g, "");
    const sinPuntosPrincipio = soloPermitidos.replace(/^\./, "");
    return sinPuntosPrincipio;
}
export function validarSoloNumeros(input) {
    const patron = /^[0-9]+$/;
    return patron.test(input);
}
export function validarTextoMayusculasYNumeros(input) {
    const patron = /^[A-Z]+[0-9]+$/;
    return patron.test(input);
}
export function validarTextoPuntoTexto(input) {
    const patron = /^[a-z]+\.[a-z]+$/;
    return patron.test(input);
}
export function formatearUsuario(input) {
    const sinTildes = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    const sinPuntosPrincipio = sinTildes.replace(/^\./, "");
    return sinPuntosPrincipio;
}
//# sourceMappingURL=ValidacionInput.js.map