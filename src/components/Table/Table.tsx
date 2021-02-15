import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import {MemberProps} from "@store/quizHistory";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

interface RowProps {
  data: MemberProps;
}

const convertStatus = (status: String) => {
  if (status === 'Finished') {
    return 'Zakończony';
  }
  if (status === 'Pending') {
    return 'W trakcie';
  }
  if (status === 'Awaiting') {
    return 'Nie rozpoczęty';
  }
}

function Row({ data }: RowProps) {
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          {
            data.status === 'Finished' &&
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          }
        </TableCell>
        <TableCell component="th" scope="row">
          {data.email}
        </TableCell>
        <TableCell align="right">{convertStatus(data.status)}</TableCell>
        <TableCell align="right">{data.points}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Pytanie</TableCell>
                    <TableCell>Odpowiedź</TableCell>
                    <TableCell align="right">Poprawna odpowiedź</TableCell>
                    <TableCell align="right">Ilość punktów</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.answers.map((answer, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {answer.question}
                      </TableCell>
                      <TableCell>{answer.answer}</TableCell>
                      <TableCell align="right">{answer.correctAnswer}</TableCell>
                      <TableCell align="right">
                        {answer.points}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export interface CollapsibleTableProps {
  rows: MemberProps[];
}

export default function CollapsibleTable({ rows }: CollapsibleTableProps) {
  return (
    <TableContainer component={"div"} style={{backgroundColor: 'rgb(225, 225, 225)'}}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Email</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Punkty</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} data={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}