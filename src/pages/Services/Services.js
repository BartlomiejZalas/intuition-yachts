import React from 'react'
import RegularPageWrapper from '../../components/RegularPageWrapper';
import { translate } from "react-i18next";

const services = ({ t }) => {
    return (
        <RegularPageWrapper title={t('pages.services.title')}>
            <div dangerouslySetInnerHTML={{__html: t('pages.services.content')}} />
        </RegularPageWrapper>
    )
}

export default translate()(services);
