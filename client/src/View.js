import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from "@nextui-org/react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

const View = () => {
    const arr2d=useSelector((state) => state.cart)
    const arr1d = [].concat(...arr2d)
 // console.log(arr1d)
  const select= useSelector((state) => state.property1);
  const select2= useSelector((state) => state.property2);
  const select3= useSelector((state) => state.property3);
  //console.log(select3)
 
  const filteredUsers = Object.keys(select)
  .filter(key => arr1d.includes(key))
  .reduce((obj, key) => {
      obj[key] = select[key];
      return obj;
}, {});
 

const filteredUsers2 = Object.keys(select2)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select2[key];
    return obj;
}, {});

const filteredUsers3 = Object.keys(select3)
.filter(key => arr1d.includes(key))
.reduce((obj, key) => {
    obj[key] = select3[key];
    return obj;
}, {});


const parameters={
  
name:"name",
label:" label",
ProjectPlotArea:"Project Plot Area",
GreenArea:"Green Area",
PropertyStatus:"Property Status",
PriceRange:"Price Range",
TotalTowers:"Total Towers",
TotalFlats:"Total Flats",
OCStatus:"OC Status",
Density:"Density",
PodiumNonPodium:"Podium/Non-Podium",
ApprovedBank:"Approved Banks",
ClubHouseSize:"Club House Size",
ConstructionType:"Construction Type",
TowerHeights:"Tower Heights",
LiftperTower:"Lift Per Tower",
FloorvsFlats:"Floor vs Flats",
PossessionDate:"Possession Date",
Lobby:"Lobby",
Distance:"Distance",

}
const filteredUsers4 = Object.keys(parameters)
.filter(key => arr1d.includes(key))
.reduce((obj, value) => {
    obj[value] = parameters[value];
    return obj;
}, {});

console.log(filteredUsers)


  return (
    <>

        <Table
      striped
      sticked
         
      css={{
        
        height: 'auto',
        width:'100%',
        minWidth: "100%",
        marginTop:'50px'    
    
      }}
    >
      <Table.Header >
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>COMPARISION PARAMETERS</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select.name}</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select2.name}</Table.Column>
        <Table.Column style={{textTransform:'uppercase',fontSize:'14px'}}>{select3.name}</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1" >
          <Table.Cell>
         
        {
         
        Object.entries(filteredUsers4).map(([key, value]) => (
    <div key={key} style={{fontWeight:'700',height:'30px',textTransform:'uppercase',fontSize:'12px'}}>{value}</div>
))
 
}

    </Table.Cell>
          <Table.Cell>
          
{Object.entries(filteredUsers).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}
          </Table.Cell>
          <Table.Cell>
          <div>
{Object.entries(filteredUsers2).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}


</div>
          </Table.Cell>
          <Table.Cell>
          <div>
{Object.entries(filteredUsers3).map(([key, value]) => (
    <div key={key}  style={{height:'30px',fontSize:'14px'}}>{value}</div>
))
 
}


</div>
          </Table.Cell>
        </Table.Row>
      
      </Table.Body>
    </Table>
  </> 

  )
}

export default View;