
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

import { useState,useEffect } from 'react';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
 import Cpipeline from './Cpipeline';





const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
      align : "center"

    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950,
        marginLeft : "auto",
        marginRight : "auto"
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));


  
function CoursePipeline(){
    const classes = useStyles();
    const[enquiries,setStaff] = useState([])

    const image_url = "https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg"

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    useEffect(()=>{
      axios
          .get("http://localhost:4500/enquiries")
          .then(
              response =>{
                  console.log('promise fullfilled');
                  console.log(response);
                  setStaff(response.data);
              }
          )
         
      },[])
    return(
        <>
        <p style={{ backgroundImage : `url(${image_url})` }}>
        <br/>
        <h3 className="centerfooter"> Activity Log - Course</h3>
        <br/>
        <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              {/* <TableCell className={classes.tableHeaderCell}>Index</TableCell> */}
              {/* <TableCell className={classes.tableHeaderCell}>Enquiry Code</TableCell> */}
              <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
              <TableCell className={classes.tableHeaderCell}>Course Name</TableCell>
              <TableCell className={classes.tableHeaderCell}>Updated Date</TableCell>
              <TableCell className={classes.tableHeaderCell}>Previous Status</TableCell>
              <TableCell className={classes.tableHeaderCell}>Current Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {enquiries.map(enquiry=>
            <TableRow key={enquiry.EnquiryId}>
                    <Cpipeline details={enquiry}/>
            </TableRow>
          )}
        </TableBody>
        {/* <TableFooter>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={15}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </TableFooter> */}
        </Table>
    </TableContainer>
    </p>
    </>
    )
}

export default CoursePipeline