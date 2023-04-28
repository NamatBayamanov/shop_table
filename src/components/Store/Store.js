import Table from "../Table/Table";
import classes from "./Store.module.scss";
function Store() {
  return ( 
    <div className={classes.Store} >
        <Table></Table>
    </div>
  );
}

export default Store;