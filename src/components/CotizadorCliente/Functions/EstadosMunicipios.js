import { GetMunicipio } from "../../../apis/peticiones";

const EstadosMunicipios = async ({ target, dispatch }) => {
    dispatch({ type: 'SET_ESTADO', payload: target.value });
    const municipios = await GetMunicipio({ Estado: target.value })
    dispatch({ type: 'SET_MUNICIPIOS', payload: municipios })
}

export default EstadosMunicipios;