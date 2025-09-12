import codigoCivilData from "./codigo-civil/data.json";
import type { Codigo } from "./interfaces";

const codigoCivil: Codigo = codigoCivilData;

export const allCodigos: Record<string, Codigo> = {
    [codigoCivil.id]: codigoCivil,
    // Aquí se podrían importar otros códigos en formato JSON
};