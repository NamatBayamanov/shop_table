import classes from "./Table.module.scss";
import { getDatas } from "../../data/data_store";
function Table() {
  const datas = Object.values(getDatas());

  const output = datas.map((currentValue, index, arr) => {
    const curr = Object.values(currentValue);
    console.log(curr);

    const cu = Object.entries(curr[0]);
    let KEY;
    let VAL;
    for (const [key, val] of cu) {
      KEY = key;
      VAL = val;
    }
    
    let Stores;
    if (VAL.includes("S")) Stores = VAL;

    let months = curr[1];
    let d = '';
    let h = months.map(mon => {
      return mon.name;
    }); 
    return (
      <table className={classes.Table}>
        <tbody>
          <tr>
            <td>{Stores}</td>
          </tr>
        </tbody>
      </table>
    );
  });
  return <div className={classes.Table}>{output}</div>;
}

export default Table;
