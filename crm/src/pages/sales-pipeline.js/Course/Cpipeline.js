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

function Cpipeline(props){
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
        {/* <TableCell>
                {props.details.EnquiryId}  
        </TableCell>  */}
        <TableCell>
        <Grid container>
            <Grid item lg={2}>
                <Avatar alt={props.details.Name} src='.' className={classes.avatar}/>
            </Grid>
            &nbsp;&nbsp;&nbsp;
            <Grid item lg={15}>
                <Typography className={classes.name}>{props.details.Name}</Typography>
                <Typography color="textSecondary" variant="body2">{props.details.Email_id}</Typography>
            </Grid>
        </Grid>
      </TableCell>
      <TableCell>
            {props.details.Course_Name}  
      </TableCell>
      <TableCell>
            {props.details.updatedAt.toString().substr(0 ,10)}  
      </TableCell>
    <TableCell>
        <Typography 
          className={classes.status}
          style={{
              backgroundColor: 
              ((props.details.Previous_Status === 'Rejected' && 'red') ||
              (props.details.Previous_Status === 'Selected' && 'green') ||
              (props.details.Previous_Status === 'Interested' && 'grey') ||
              (props.details.Previous_Status === 'Admitted' && 'blue') ||
              (props.details.Previous_Status === 'Pending' && 'orange'))
          }}
        >{props.details.Previous_Status}</Typography>
      </TableCell>
      <TableCell>
        <Typography 
          className={classes.status}
          style={{
              backgroundColor: 
              ((props.details.Current_Status === 'Rejected' && 'red') ||
              (props.details.Current_Status === 'Selected' && 'green') ||
              (props.details.Current_Status === 'Interested' && 'grey') ||
              (props.details.Current_Status === 'Admitted' && 'blue') ||
              (props.details.Current_Status ===  'Pending' && 'orange'))
          }}
        >{props.details.Current_Status}</Typography>
      </TableCell>
      </>
    )
}

export default Cpipeline;