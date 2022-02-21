import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export default function UserList() {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      const fetchAllUsers = async () => {
        const res = await axios.get('/users');
        setData(res.data);
      };
      fetchAllUsers();
    } catch (e) {
      console.log(e);
    }
  }, []);
  data && console.log(data);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'User',
      width: 130,
      renderCell: (params) => {
        return (
          <div className='dashBGridUser'>
            <img src={params.row.avatar} alt='' />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/dashboard/user/' + params.row._id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutlineOutlinedIcon
              className='userListDelete'
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='dashBUsers'>
      {' '}
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
}
