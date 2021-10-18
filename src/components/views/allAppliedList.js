import * as React from 'react';
import {
    Table, 
    TableBody, 
    TableCell,
    TableContainer,
    TableHead , 
    TableRow,
    Paper ,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
} from '@material-ui/core';

import faker from 'faker';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: 15,
        margin: "10px auto",
        maxWidth: 950
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light),
        marginRight: '10px'
    },
    name : {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark,
    }

}));

let USERS = [];
let STATUSES = ["Already Applied", "Not Applied" ];

for(let i=0;i<20;i++){
  USERS[i] = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    phone: faker.phone.phoneNumber(),
    jobTitle: faker.name.jobTitle(),
    company: faker.company.companyName(),
    salary: faker.random.number()
  }
}

function MyTable() {
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


    return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeaderCell}>UserInfo</TableCell>
            <TableCell className={classes.tableHeaderCell}>JobInfo</TableCell>
            <TableCell className={classes.tableHeaderCell}>Salary</TableCell>
            <TableCell className={classes.tableHeaderCell}>Satus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {USERS.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>
                    <Grid container>
                        <Grid item lg={2}>
                            <Avatar alt={user.name} src='.' className= {classes.avatar} />
                        </Grid>
                        <Grid item lg={10}>
                            <Typography className={classes.name}>{user.name} </Typography>
                            <Typography color="textSecondary" variant="body2">{user.email}</Typography>
                            <Typography color="textSecondary" variant="body2">{user.phone}</Typography>
                        </Grid> 
                    </Grid>
                </TableCell>
                <TableCell>
                    <Typography  color="primary" variant="subtitle2"> {user.jobTitle} </Typography>
                    <Typography  color="textSecondary" variant="body2"> {user.company}  </Typography>
                </TableCell>
                <TableCell>Rs.{user.salary}</TableCell>
                <TableCell>
                  Already Joined
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
            <TablePagination
                rowsPerPageOptions={[5, 25, 100]}
                component="div"
                count={USERS.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />    
        </TableFooter>
      </Table>
    </TableContainer>
    )
}

export default MyTable


