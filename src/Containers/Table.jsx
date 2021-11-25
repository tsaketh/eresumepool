import React from "react";
import '../App.css';


const Table = ({contents}) => {
    const obj = contents[0];
    let arr = [];
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            arr.push(key);
        }
    }
    const cols = arr.map((col) => {
        return <th style={{padding: '5px'}} key={col} className="table-headers-cells">{col}</th>
    })
    const content = contents.map((obj)=>{
        let arr = [];
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                arr.push(element);
            }
        }
        const cols = arr.map((col) => {
            return <td style={{padding: '5px'}} key={col} className="table-cells">{col}</td>
        })
        return(
            <tr className="table-contents">
                {cols}
            </tr>
        )
    })
    return(
        <table className="center" style={{borderCollapse: 'collapse'}}>
            <thead>
                <tr className="table-headers">
                    {cols}
                </tr>
            </thead>
            <tbody>
                {content}
            </tbody>
        </table>
    )
};

export default Table;