import React from 'react';
import AuxC from '../../components/AuxC';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';

const Project = props => {
    const breadcrumbs = props.project.breadcrumbs.map(link =>
        <li class="breadcrumb-item" key={link.to}><Link to={link.to}>{link.title}</Link></li>
    );
    const images = props.project.images.map(src =>
        <a href={src} key={src}><img src={src} alt={props.project.title} className="img-fluid pb-2" /></a>
    );
    const menu = props.project.menu ? (
        <AuxC>
            <hr />
            <p>{props.project.menuDescription}</p>
            <ol>
                {props.project.menu.map(menuItem =>
                    <li key={menuItem.id}><Link to={'/projects/' + menuItem.id}>{menuItem.title}</Link></li>
                )}
            </ol></AuxC>
    ) : null;
    return (
        <AuxC>
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            {breadcrumbs}
                            <li class="breadcrumb-item active" aria-current="page">{props.project.title}</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 pb-2">
                    {images}
                </div>
                <div className="col-12 col-md-8">
                    <div dangerouslySetInnerHTML={{ __html: props.project.description }} />
                    {menu}
                </div>

            </div>
        </AuxC>
    )
}

export default translate()(Project);
