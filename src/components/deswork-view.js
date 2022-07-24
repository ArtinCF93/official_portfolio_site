import React from 'react';
import Pdf from '../files/AzimiArtin_CaseStudy_Meta.pdf';
import Pdf2 from '../files/AzimiArtin_CaseStudy_Politiself.pdf';
import './gdwork-view.css'

class DesWork extends React.Component {

    render() {

        return (
                <div className="container">
                <h1>UI UX Design Work</h1>
                <hr />
                <br /><br />
                <div className="grid">
                    <div className="grid_item8">
                    <a href = {Pdf} target = "_blank" className="gdButton">See Case Study</a>
                    </div>
                    <div className="grid_item9">
                    <a href = {Pdf2} target = "_blank" className="gdButton">See Case Study</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DesWork