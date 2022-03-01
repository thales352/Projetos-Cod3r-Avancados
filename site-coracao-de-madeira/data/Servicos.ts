import ServicoModel from "../models/ServicoModel";

export default function () {}

export const servData = [
  new ServicoModel(
    Math.random() * 1000,
    "Logo em Acrílico",
    false,
    "/logo-em-acrilico.jpg"
  ),
  new ServicoModel(Math.random() * 1000, "Logo em MDF"),
  new ServicoModel(Math.random() * 1000, "Logo em Madeira"),
  new ServicoModel(Math.random() * 1000, "Placa Adesivada em Acrílico"),
  new ServicoModel(Math.random() * 1000, "Placa Adesivada em MDF"),
];
