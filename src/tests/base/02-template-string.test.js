import moduleName, { getSaludo } from "../../base/02-template-string";
describe("Pruebas en archivo 02-template-string.test.js", () => {
  test("getSaludo debe de retornar Hola {nombre}", () => {
    const nombre = "Héctor";
    const saludo = getSaludo(nombre);
    expect(saludo).toBe(`Hola ${nombre}`);
  });

  //   getSaludo debe de retornar Hola Carlos si no hay argumento
  test("debe de retornar Hola carlos", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos");
  });
});
