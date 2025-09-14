import codigoCivilData from "./codigo-civil/data.json";
import codigoTrabajoData from "./codigo-trabajo/data.json";
import codigoFamiliaData from "./codigo-familia/data.json";
import codigoPenalData from "./codigo-penal/data.json";
import codigoProcesalPenalData from "./codigo-procesal-penal/data.json";
import codigoComercioData from "./codigo-comercio/data.json";
import type { Codigo } from "./interfaces";

const codigoCivil: Codigo = codigoCivilData;
const codigoTrabajo: Codigo = codigoTrabajoData;
const codigoFamilia: Codigo = codigoFamiliaData;
const codigoPenal: Codigo = codigoPenalData;
const codigoProcesalPenal: Codigo = codigoProcesalPenalData;
const codigoComercio: Codigo = codigoComercioData;


export const allCodigos: Record<string, Codigo> = {
    [codigoCivil.id]: codigoCivil,
    [codigoTrabajo.id]: codigoTrabajo,
    [codigoFamilia.id]: codigoFamilia,
    [codigoPenal.id]: codigoPenal,
    [codigoProcesalPenal.id]: codigoProcesalPenal,
    [codigoComercio.id]: codigoComercio,
    // Aquí se podrían importar otros códigos en formato JSON
};