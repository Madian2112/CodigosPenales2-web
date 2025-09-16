import codigoCivilData from "./codigos/codigo-civil/data.json";
import codigoTrabajoData from "./codigos/codigo-trabajo/data.json";
import codigoFamiliaData from "./codigos/codigo-familia/data.json";
import codigoPenalData from "./codigos/codigo-penal/data.json";
import codigoProcesalPenalData from "./codigos/codigo-procesal-penal/data.json";
import codigoComercioData from "./codigos/codigo-comercio/data.json";
import codigoTributarioData from "./codigos/codigo-tributario/data.json";

import leyTransparenciaData from "./leyes/ley-transparencia/data.json";
import leyTurismoData from "./leyes/ley-turismo/data.json";
import leyPropiedadIndustrialData from "./leyes/ley-propiedad-industrial/data.json";
import leyProteccionConsumidorData from "./leyes/ley-proteccion-consumidor/data.json";
import leyContratacionEstadoData from "./leyes/ley-contratacion-estado/data.json";

import documentoConstitucionRepublicaData from "./documentos/documento-constitucion-republica/data.json";
import documentoReglamentoContratacionData from "./documentos/documento-reglamento-contratacion/data.json";
import documentoLeyGeneralAmbienteData from "./documentos/documento-ley-general-ambiente/data.json";

import type { Articulo } from "./interfaces";

const codigoCivil: Articulo = codigoCivilData;
const codigoTrabajo: Articulo = codigoTrabajoData;
const codigoFamilia: Articulo = codigoFamiliaData;
const codigoPenal: Articulo = codigoPenalData;
const codigoProcesalPenal: Articulo = codigoProcesalPenalData;
const codigoComercio: Articulo = codigoComercioData;
const codigoTributario: Articulo = codigoTributarioData;

const leyTransparencia: Articulo = leyTransparenciaData;
const leyTurismo: Articulo = leyTurismoData;
const leyPropiedadIndustrial: Articulo = leyPropiedadIndustrialData;
const leyProteccionConsumidor: Articulo = leyProteccionConsumidorData;
const leyContratacionEstado: Articulo = leyContratacionEstadoData;

const documentoConstitucionRepublica: Articulo = documentoConstitucionRepublicaData;
const documentoReglamentoContratacion: Articulo = documentoReglamentoContratacionData;
const documentoLeyGeneralAmbiente: Articulo = documentoLeyGeneralAmbienteData;

export const allCodigos: Record<string, Articulo> = {
    [codigoCivil.id]: codigoCivil,
    [codigoTrabajo.id]: codigoTrabajo,
    [codigoFamilia.id]: codigoFamilia,
    [codigoPenal.id]: codigoPenal,
    [codigoProcesalPenal.id]: codigoProcesalPenal,
    [codigoComercio.id]: codigoComercio,
    [codigoTributario.id]: codigoTributario,
};

export const allLeyes: Record<string, Articulo> = {
    [leyTransparencia.id]: leyTransparencia,
    [leyTurismo.id]: leyTurismo,
    [leyPropiedadIndustrial.id]: leyPropiedadIndustrial,
    [leyProteccionConsumidor.id]: leyProteccionConsumidor,
    [leyContratacionEstado.id]: leyContratacionEstado,
}

export const allDocumentos: Record<string, Articulo> = {
    [documentoConstitucionRepublica.id]: documentoConstitucionRepublica,
    [documentoReglamentoContratacion.id]: documentoReglamentoContratacion,
    [documentoLeyGeneralAmbiente.id]: documentoLeyGeneralAmbiente,
}