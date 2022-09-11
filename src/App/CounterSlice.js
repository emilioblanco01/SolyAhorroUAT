import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: {
            Porcentaje: 0,
            Nombre: 'José Luis',
            Apellido: 'Castellanos Barba',
            Correo: 'jlcasb@solyahorro.com',
            Telefono: '3315995754',
            FechaNacimiento: '10/04/1998',
            VendedorID: 26,
            Perfil: false,
            Cotizaciones: [
                {
                    id: 1,
                    name: 'Prospecto 1',
                    address: 'Calle #1234 Colonia CP 1234',
                    phone: '33-44-55-66-77',
                    duedate: '02/12/2021'
                },
                {
                    id: 2,
                    name: 'Prospecto 1',
                    address: 'Calle #1234 Colonia CP 1234',
                    phone: '33-44-55-66-77',
                    duedate: '02/12/2021'
                },
                {
                    id: 3,
                    name: 'Prospecto 1',
                    address: 'Calle #1234 Colonia CP 1234',
                    phone: '33-44-55-66-77',
                    duedate: '02/12/2021'
                },  
                
            ]
        },
    },
    reducers: {
        changeNombre: (state, action) => {state.value.Nombre = action.payload},
        changeApellido: (state, action) => {state.value.Apellido = action.payload},
        changeCorreo: (state, action) => {state.value.Correo = action.payload},
        changeTelefono: (state, action) => { state.value.Telefono = action.payload},
        changeFechaNacimiento: (state, action) => { state.value.FechaNacimiento = action.payload},
        changePerfil: (state, action) => {state.value.Perfil = action.payload},
        changePorcentaje: (state, action) => { state.value.Porcentaje = action.payload},
        changeVendedorID: (state, action) => {state.value.VendedorID = action.payload},
        changeCotizaciones: (state, action) => {
            const cotizaciones = [];
            action.payload.map( cotizacion => cotizaciones.push({
                id: cotizacion.Id,
                name: `${cotizacion.Nombre} ${cotizacion.Apellido}`,
                address: `${cotizacion.Municipio} ${cotizacion.Estado}`,
                phone: `${cotizacion.Celular}`,
                duedate: `${cotizacion.Fecha.replaceAll('-', '/')}` 
            }));
            state.value.Cotizaciones = cotizaciones;
            //state.value.Cotizaciones = action.payload
        }
    },
},
)

// Action creators are generated for each case reducer function
export const { changeNombre, changeApellido,changeCorreo, changeTelefono, changeFechaNacimiento, changePerfil, changeCotizaciones, changePorcentaje, changeVendedorID } = counterSlice.actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched


// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectNombre = state => state.counter.value.Nombre;
export const selectApellido = state => state.counter.value.Apellido;
export const selectCorreo = state => state.counter.value.Correo;
export const selectTelefono = state => state.counter.value.Telefono;
export const selectFechaNacimiento = state => state.counter.value.FechaNacimiento;
export const selectPerfil = state => state.counter.value.Perfil;
export const selectCotizaciones = state => state.counter.value.Cotizaciones;
export const selectPorcentaje = state => state.counter.value.Porcentaje;
export const selectVendedorID = state => state.counter.value.VendedorID;
export const selectAll = state => state.counter.value;


export default counterSlice.reducer