export function validarInputUsuario(input) {
    var sinTildes = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    var soloPermitidos = sinTildes.replace(/[^a-z.]/g, "");
    var sinPuntosPrincipio = soloPermitidos.replace(/^\./, "");
    return sinPuntosPrincipio;
}
export function validarSoloNumeros(input) {
    var patron = /^[0-9]+$/;
    return patron.test(input);
}
export function validarTextoMayusculasYNumeros(input) {
    var patron = /^[A-Z]+[0-9]+$/;
    return patron.test(input);
}
export function validarTextoPuntoTexto(input) {
    var patron = /^[a-z]+\.[a-z]+$/;
    return patron.test(input);
}
export function formatearUsuario(input) {
    var sinTildes = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
    var sinPuntosPrincipio = sinTildes.replace(/^\./, "");
    return sinPuntosPrincipio;
}
//# sourceMappingURL=ValidacionInput.js.map