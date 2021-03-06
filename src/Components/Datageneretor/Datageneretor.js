import React from 'react';
import Showdatageneretor from '../Showdatageneretor/Showdatageneretor';

const Datageneretor = () => {
    const datageneretors = [
        {
            "id": "623789e318467585612f297c",
            "email": "nona_washington@kengen.mq",
            "profile": {
                "name": "Nona Washington",
                "company": "Kengen",
                "dob": "1993-11-26"
            }
        },
        {
            "id": "623789e3e6a2bae083627bab",
            "email": "cameron_mccarthy@renovize.buzz",
            "profile": {
                "name": "Cameron Mccarthy",
                "company": "Renovize",
                "dob": "1989-12-06"
            }
        },
        {
            "id": "623789e31274478eff27ca90",
            "email": "clements_dunn@neocent.property",
            "profile": {
                "name": "Clements Dunn",
                "company": "Neocent",
                "dob": "1989-04-05"
            }
        },
        {
            "id": "623789e309429221a506d3db",
            "email": "gwen_chang@sportan.homes",
            "profile": {
                "name": "Gwen Chang",
                "company": "Sportan",
                "dob": "1993-11-09"
            }
        },
        {
            "id": "623789e39d6d0a0879343250",
            "email": "jefferson_bernard@apextri.cbn",
            "profile": {
                "name": "Jefferson Bernard",
                "company": "Apextri",
                "dob": "1992-06-18"
            }
        },
        {
            "id": "623789e3fc7ae37e37905abf",
            "email": "dena_cabrera@ezentia.ovh",
            "profile": {
                "name": "Dena Cabrera",
                "company": "Ezentia",
                "dob": "1992-07-08"
            }
        },
        {
            "id": "623789e3c211438e7f2bfb12",
            "email": "horn_crane@webiotic.tips",
            "profile": {
                "name": "Horn Crane",
                "company": "Webiotic",
                "dob": "1992-08-28"
            }
        }
    ]
    return (
        <div>
            {
                datageneretors.map(datageneretor => <Showdatageneretor
                    key={datageneretor.id}
                    datageneretor={datageneretor}
                >

                </Showdatageneretor>)
            }
        </div>
    );
};

export default Datageneretor;