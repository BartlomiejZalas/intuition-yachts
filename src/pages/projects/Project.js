import React from 'react';
import AuxC from '../../components/Aux';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

const Project = props => {
    return (
        <AuxC>
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/projects">{props.t('menu.projects')}</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{props.project.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 pb-2">
                    <img src={props.project.image} alt={props.project.title} className="img-fluid" />
                </div>
                <div className="col-12 col-md-8" dangerouslySetInnerHTML={{ __html: props.project.description }} />
            </div>
        </AuxC>
    )
}

export default translate()(Project);
