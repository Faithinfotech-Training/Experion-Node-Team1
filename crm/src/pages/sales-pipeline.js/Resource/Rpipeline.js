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

 const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: '10px 10px',
        maxWidth: 950
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

function Rpipeline(props){
    const classes = useStyles();

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    
    return(
        <>
        <TableCell>
                {props.details.rEnquiryId}  
        </TableCell> 
        <TableCell>
        <Grid container>
            <Grid item lg={2}>
                <Avatar alt={props.details.resourceName} src='.' className={classes.avatar}/>
            </Grid>
            &nbsp;&nbsp;
            <Grid item lg={15}>
                <Typography className={classes.name}>{props.details.resourceName}</Typography>
            </Grid>
        </Grid>
      </TableCell>
      <TableCell>
            {props.details.updatedAt.toString().substr(0 ,10)}  
      </TableCell>
    <TableCell>
        <Typography 
          className={classes.status}
          style={{
              backgroundColor: 
              ((props.details.Previous_Status === 'Available' && 'green') ||
              (props.details.Previous_Status === 'Not Available' && 'blue'))
          }}
        >{props.details.Previous_Status}</Typography>
      </TableCell>
      <TableCell>
        <Typography 
          className={classes.status}
          style={{
              backgroundColor: 
              ((props.details.rStatus === 'Available' && 'green') ||
              (props.details.rStatus === 'Not Available' && 'blue'))
          }}
        >{props.details.rStatus}</Typography>
      </TableCell>
      </>
    )
}

export default Rpipeline;