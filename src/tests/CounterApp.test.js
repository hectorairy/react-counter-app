import React from "react";
import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas para el componente <CounterApp />", () => {
  // ! Esto no es una buena practica, pero nos ayuda para tener el autocompletado en la variable wrapper
  let wrapper = shallow(<CounterApp />);

  beforeEach(() => {
    wrapper = shallow(<CounterApp />);
  });

  test("Debe de mostrar <CounterApp /> correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto de 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const valorParametro = wrapper.find("h2").text();
    expect(valorParametro).toBe("100");
  });

  test("Debe de incrementar con el botón de +1", () => {
    wrapper.find("button").at(0).simulate("click");
    const valorParametro = wrapper.find("h2").text();
    expect(valorParametro).toBe("11");
  });

  test("Debe de decrementar con el botón de -1", () => {
    wrapper.find("button").at(2).simulate("click");
    const valorParametro = wrapper.find("h2").text();
    expect(valorParametro).toBe("9");
  });

  test("Debe de colocar el valor por defecto con el btn reset ", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    const valorParametro = wrapper.find("h2").text();
    expect(valorParametro).toBe("100");
  });
});
