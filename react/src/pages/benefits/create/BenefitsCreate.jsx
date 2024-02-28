import React from 'react'
import AppLayout from '../../../layout/AppLayout'
import CreateForm from '../../../components/createForm/CreateForm'
//Pantalla que mostrara el formulario de creacion
export const BenefitsPage = () => {
    return (
        <AppLayout Page={"Benefits"}>
            <CreateForm></CreateForm>
        </AppLayout>
    )
}

export default BenefitsPage;
