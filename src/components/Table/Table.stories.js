import React from 'react'
import BasicTable from './Table'
import DummyData from '../DummyData/DummyData'

export default{
    name:'Member',
    component:BasicTable
}

export const User=()=><BasicTable familyMember={DummyData}></BasicTable>