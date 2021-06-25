import React from 'react'

import './style/ListPersonalPage.scss'

import PersonalSearch from './PersonalSearch'
import PersonalListMember from './PersonalListMember'


export default function ListPersonalPage() {
    return (
        <div>
            <div className="containerCenter">
                <PersonalSearch/>
                <PersonalListMember/>
            </div>
        </div>
    )
}
