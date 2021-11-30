import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("Debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getUsuarioActivo Debe de retornar un objeto", () => {
    // getUsuarioActivo

    const nombre = "Hector";

    const userActiveTest = {
      uid: "ABC567",
      username: "Hector",
    };
    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toEqual(userActiveTest);
  });
});
