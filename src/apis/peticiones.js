import { ApiMunicipios, ApiTarifas, ApiLogin, ApiGeneracionPDF, ApiPagos, ApiRegistro, ApiPdfQuote, ApiPaneles, ApiListCap, ApiListMarca, ApiListInv, APIChangePass, ApiSendEmail } from "./url";
import { useSelector } from 'react-redux';
import { selectPorcentaje } from "../App/CounterSlice";
//Municipios
export const GetMunicipio = async ({ Estado }) => {
    let municipios = []
    const formData = new FormData();
    formData.append('state_pdbt', Estado)
    const response = await fetch(ApiMunicipios, { method: 'POST', body: formData })
    const data = await response.json()
    data.map(d => municipios.push(d.Municipio))
    return municipios
}

export const GetCotizacion = async ({ periodo, Estado, Consumidos, TipoTarifa, Price, porcentaje, state, Municipio }) => {
    const formData = new FormData();
    formData.append('periodo', periodo);
    formData.append('porcentaje', porcentaje);
    formData.append('capacidadPanel', state.PanelCap);
    formData.append('capacidadInversor', state.InversorCap);
    Price ? formData.append('pagoRecibo', Consumidos) : formData.append('kwConsumidos', Consumidos);
    formData.append('municipio', state.municipio);
    formData.append('estado', state.estado);
    formData.append('esCliente', state.esCliente);
    const TipTarifa = TipoTarifa === 'Price' ? 'rateDacPrice' : TipoTarifa
    const response = await fetch(ApiTarifas({ tipoTarifa: TipTarifa }), { method: 'POST', body: formData });
    const data = await response.json();
    return data;

}

export const Register = async ({ Data }) => {
    const formData = new FormData();
    formData.append('firstNameUser', Data.Nombre);
    formData.append('lastNameUser', Data.Apellido);
    formData.append('birthdateUser', Data.fecha);
    formData.append('emailUser', Data.correo);
    formData.append('passwordUser', Data.Password);
    formData.append('TypeUser', 2);
    formData.append('cellphoneNumber', Data.cellphone);
    const response = await fetch(ApiRegistro, { method: 'POST', body: formData })
    const data = await response.json()
}

export const CotizadorInstaladores = async () => {
    const formData = new FormData();
    formData.append('enganche', 0.1);
    formData.append('cantidadPaneles', 10);
    formData.append('pagoInstalador_panel', 100);
    formData.append('plazoMeses', 12);
    formData.append('capacidadPanel', 540);
    const response = await fetch('http://127.0.0.1:8000/ratePdbtCS', { method: 'POST', body: formData })
    const data = await response.json()
}

export const GeneracionPdf = async ({ Data, setLevel, level, nombre, apellido }) => {
    let datos = Data.Resultado;
    let tarifa = Data.Tarifa.replace('rate', '');
    tarifa = tarifa.replace('Price', '');
    const Financiamiento = Data.Financiamiento.filter(f => f.Meses === Data.Plazo);
    const formData = new FormData();
    formData.append('TipoCliente', Data.VendedorID !== 26 ? 1 : 2);
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('estado', Data.estado);
    formData.append('municipio', Data.municipio);
    formData.append('telefono', Data.Telefono);
    formData.append('correo', Data.Correo);
    formData.append('asesor', `${Data.NombreInstalador} ${Data.ApellidoInstalador}`);
    formData.append("telasesor", Data.TelefonoInstalador.toString());
    formData.append('correoAsesor', Data.CorreoInstalador);
    formData.append('tipoCotizacion', tarifa.toLowerCase());
    formData.append("plazoMeses", Data.Plazo);
    formData.append("montoCredito", Data.contado === 0 ? Financiamiento[0].montoCredito : 0);
    formData.append("montoEnganche", Data.contado === 0 ? Data.Enganche : 0);
    formData.append("Pago", Data.contado === 0 ? Financiamiento[0].Pago : 0);
    formData.append("cantidadPaneles", datos.cantidadPaneles);
    formData.append("TipoPanel", parseInt(Data.PanelCap) ?? 540);
    formData.append("marcaPanel", Data.MarcaPanel);
    formData.append("marcaInversor", Data.MarcaInversor);
    formData.append('generacionActual', Data.Resultado.gastoKwViejo);
    formData.append('generacionNueva', Data.Resultado.gastoKwNuevo);
    formData.append('gastoPromedio', datos.gastoLuz);
    formData.append('gastoPromedioNuevo', datos.gastoLuzNuevo);
    formData.append('periodoPago', Data.periodo);
    formData.append('total', Data.PrecioFinal ?? Data.Resultado.CostoEquipo);
    formData.append('idUsuario', Data.VendedorID);
    formData.append('contado', Data.contado);
    formData.append('numeroServicio', Data.numeroServicio);
    formData.append('capacidadInversor', Data.InversorCap);
    formData.append('esCliente', Data.esCliente);


    const response = await fetch(ApiGeneracionPDF, { method: 'POST', body: formData });
    //const res = await response;
    const b64 = await response.text();
    // Decode Base64 to binary and show some information about the PDF file (note that I skipped all checks)
    var bin = atob(b64);
    // Insert a link that allows the user to download the PDF file
    var link = document.createElement('a');
    link.innerHTML = 'Download PDF file';
    link.download = 'Cotizacion.pdf'; //CotizacionSolyAhorro__Folio.pdf
    link.href = 'data:application/pdf;base64,' + b64;
    link.click();
    setLevel(level + 1);
    //return data;
}

export const quotePaymentinChange = async ({ PrecioTotal, Enganche, tasa, dispatch }) => {
    const formData = new FormData();
    const enganche = Enganche === 0 ? PrecioTotal / 10 : Enganche;
    formData.append('valorSistema', PrecioTotal);
    formData.append('tasa', tasa);
    formData.append('enganche', enganche / PrecioTotal);
    fetch(ApiPagos, { method: 'POST', body: formData })
        .then(response => response.json())
        .then(data => dispatch({ type: 'SET_FINANCIAMIENTO', payload: data}));
}

export const quotePayment = async ({ PrecioTotal, Enganche, tasa, dispatch }) => {
    const formData = new FormData();
    const enganche = Enganche === 0 ? PrecioTotal / 10 : Enganche;
    formData.append('valorSistema', PrecioTotal);
    formData.append('tasa', tasa);
    formData.append('enganche', enganche / PrecioTotal);
    const response = await fetch(ApiPagos, { method: 'POST', body: formData });
    const data = await response.json()
    return data;
}

//Login Instalador
export const login = async (Data) => {
    const formData = new FormData();
    formData.append('emailUser', Data.user);
    formData.append('passwordUser', Data.password);
    const response = await fetch(ApiLogin, { method: 'POST', body: formData });
    const data = await response.json();
    return data;
}

export const TarifaMedia = async (Data) => {
    const formData = new FormData();
    if (Data.Tarifa === 'rateGdmto') {
        formData.append('capacidadPanel', Data.PanelCap);
        formData.append('capacidadInversor', Data.InversorCap);
        formData.append('kwConsumidos', Data.PROMEDIO_CONSUMO_ENERGIA);
        formData.append('periodo', Data.periodo);
        formData.append('municipio', Data.municipio);
        formData.append('estado', Data.estado);
        formData.append('demandaAnual', Data.DEMANDA_MAXIMA_ANO);
        formData.append('demandaPromedio', Data.DEMANDA_MAXIMA_PROMEDIO);
        formData.append('FactorPotencia', Data.FactorPotencia);
        formData.append('porcentaje', Data.Porcentaje);
        formData.append('esCliente', Data.esCliente);
        formData.append('FAT', 1);
    }
    else {
        formData.append('capacidadPanel', Data.PanelCap);
        formData.append('capacidadInversor', Data.InversorCap);
        formData.append('base', Data.BASE);
        formData.append('intermedia', Data.INTERMEDIA);
        formData.append('punta', Data.PUNTA);
        formData.append('demandaAnual', Data.DEMANDA_MAXIMA_ANO);
        formData.append('demandaPromedio', Data.DEMANDA_MAXIMA_PROMEDIO);
        formData.append('demandaPunta', Data.DEMANDA_MAXIMA_MES_PUNTA);
        formData.append('periodo', Data.periodo);
        formData.append('municipio', Data.municipio);
        formData.append('estado', Data.estado);
        formData.append('FactorPotencia', Data.FactorPotencia);
        formData.append('porcentaje', Data.Porcentaje);
        formData.append('esCliente', Data.esCliente);
        formData.append('FAT', 1);
    }
    const response = await fetch(ApiTarifas({ tipoTarifa: Data.Tarifa }), { method: 'POST', body: formData })
    const data = await response.json()
    return data;
}

export const pdfQuote = async (id) => {
    const form = new FormData();
    form.append('idCotizacion', id);
    const response = await fetch(ApiPdfQuote, { method: 'POST', body: form });
    const b64 = await response.text();
    var bin = atob(b64);
    var link = document.createElement('a');
    link.innerHTML = 'Download PDF file';
    link.download = 'Cotizacion.pdf'; //CotizacionSolyAhorro__Folio.pdf
    link.href = 'data:application/pdf;base64,' + b64;
    link.click();
}

export const peticionPaneles = async (data) => {
    const tarifa = data.Tarifa;
    const form = new FormData();
    if (tarifa === 'rate01' || tarifa === 'rateDac' || tarifa === 'ratePdbt') {
        form.append('kwConsumidos', data.KWconsumidos);
        form.append('cantidadPaneles', data.cantidadPaneles);
        form.append('capacidadInversor', data.InversorCap);
        form.append('tipoCotizacion', data.Tarifa);
        form.append('capacidadPanel', data.PanelCap);
        form.append('periodo', data.periodo);
        form.append('municipio', data.municipio);
        form.append('estado', data.estado);
        form.append('porcentaje', data.Porcentaje);
        form.append('esCliente', data.esCliente);
    }
    else if (tarifa === 'rateGdmto') {
        form.append('kwConsumidos', data.tarifaMedia.PROMEDIO_CONSUMO_ENERGIA);
        form.append('periodo', data.periodo);
        form.append('municipio', data.municipio);
        form.append('estado', data.estado);
        form.append('demandaAnual', data.tarifaMedia.DEMANDA_MAXIMA_ANO);
        form.append('demandaPromedio', data.tarifaMedia.DEMANDA_MAXIMA_PROMEDIO);
        form.append('FactorPotencia', data.tarifaMedia.FactorPotencia); 
        form.append('FAT', 1);
        form.append('capacidadPanel', data.PanelCap);
        form.append('cantidadPaneles', data.cantidadPaneles);
        form.append('tipoCotizacion', data.Tarifa);
        form.append('capacidadInversor', data.InversorCap);
        form.append('porcentaje', data.Porcentaje);
        form.append('esCliente', data.esCliente);
    }
    else {
        form.append('base', data.tarifaMedia.BASE);
        form.append('intermedia', data.tarifaMedia.INTERMEDIA);
        form.append('punta', data.tarifaMedia.PUNTA);
        form.append('demandaAnual', data.tarifaMedia.DEMANDA_MAXIMA_ANO);
        form.append('demandaPromedio', data.tarifaMedia.DEMANDA_MAXIMA_PROMEDIO);
        form.append('demandaPunta', data.tarifaMedia.DEMANDA_MAXIMA_MES_PUNTA);
        form.append('periodo', data.periodo);
        form.append('municipio', data.municipio);
        form.append('estado', data.estado);
        form.append('FactorPotencia', data.tarifaMedia.FactorPotencia); 
        form.append('FAT', 1); 
        form.append('capacidadPanel', data.PanelCap);
        form.append('cantidadPaneles', data.cantidadPaneles);
        form.append('tipoCotizacion', data.Tarifa);
        form.append('capacidadInversor', data.InversorCap);
        form.append('porcentaje', data.Porcentaje);
        form.append('esCliente', data.esCliente);
    }

    const response = await fetch(ApiPaneles({
        rate: tarifa === 'rate01' || tarifa === 'rateDac' || tarifa === 'ratePdbt' ?
            'ratePanel' :
            tarifa === 'rateGdmto' ?
                'ratePanelGDMTO' :
                'ratePanelGDMTH'
    }),
        { method: 'POST', body: form });
    const result = await response.json()
    return result;

}

export const capacidades = async () => {
    const response = await fetch(ApiListCap);
    const result = await response.json();
    return result;
}

export const ListMarcas = async () => {
    const response = await fetch(ApiListMarca);
    const result = await response.json();
    return result;
}
export const ListInv = async () => {
    const response = await fetch(ApiListInv);
    const result = await response.json();
    return result;
}

export const ChangePassword = async (lastPass, newPass) => {
    const form = new FormData();
    form.append('id', JSON.parse(localStorage.getItem("DataUser")).id);
    form.append('viejaContrasena', lastPass);
    form.append('nuevaContrasena', newPass);
    const response = await fetch(APIChangePass, { method: 'POST', body: form })
    const data = await response.json()
    return data;
}

export const sendEmail = async (PersonalData, typeRate, municipio, estado, kwConsumidos) => {
    const form = new FormData();
    form.append('nombre', PersonalData.nombre);
    form.append('correo', PersonalData.correo);
    form.append('celular', PersonalData.telefono);
    form.append('mensaje', PersonalData.mensaje);
    form.append('tarifa', typeRate);
    form.append('kwConsumidos', typeRate === 'BombeoSolar' ? 0 : kwConsumidos);
    form.append('municipio', municipio);
    form.append('estado', estado);
    const response = await fetch(ApiSendEmail, { method: 'POST', body: form });
    const data = await response.json();
    return data;
}