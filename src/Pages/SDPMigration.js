import React from 'react'
import { NavbarComponent } from '../components/NavbarComponent';
import { MigrationComponent } from '../components/MigrationComponent';
import MyForm from '../components/myForm';

const SDPMigration = () => {
  return(
    <div>
    <NavbarComponent/>
 
    <MyForm title="SDP Migration" label1={"Producion number"} label2={"#SDP"} type1={Number} type2={Number} btn={"Migrate"} />
  </div>
  );
}

export default SDPMigration

