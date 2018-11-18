import React from 'react'
import { translate } from "react-i18next";

const input = (props) => {

    let input = null;

    if (props.type === 'textarea') {
        input =
            <textarea
                className={'form-control' + (!props.valid && props.touched ? ' is-invalid' : '')}
                placeholder={props.t('pages.contact.form.' + props.id)}
                rows={props.rows}
                value={props.value}
                onChange={e => props.changed(e, props.id)}
            />
    } else {
        input =
            <input
                type="text"
                className={'form-control' + (!props.valid && props.touched ? ' is-invalid' : '')}
                placeholder={props.t('pages.contact.form.' + props.id)}
                value={props.value}
                onChange={e => props.changed(e, props.id)}
            />
    }

    return (
        <div className="form-group" key={props.id}>
            {input}
        </div>
    )
}

export default translate()(input);
