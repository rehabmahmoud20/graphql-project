import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({empPerPage,totalEmp,handle}) {
  const [page, setPage] = React.useState(2);
  let pageNumbers = 0;

  for (let i = 1; i <= Math.ceil(totalEmp / empPerPage); i++) {
    pageNumbers++

  }
  const handleChange = (event, value) => {
    setPage(value);
    handle(value)
  };

  return (
    
    <Stack spacing={2}>
      {/* <Typography>Page: {page}</Typography> */}
     <Pagination count={pageNumbers} page={page} onChange={handleChange} />
    </Stack>
  );
}
