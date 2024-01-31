import React from 'react'
import AppLayout from '../../layout/AppLayout'
import SectionTable from '../../components/sectionTable/SectionTable'

export const BenefitsPage = () => {
    return (
        <AppLayout Page={"Benefits"}>
            <SectionTable SectionName={"Beneficios"}></SectionTable>
        </AppLayout>
    )
}

export default BenefitsPage;
