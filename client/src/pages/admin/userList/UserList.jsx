import './userList.scss';
import { DataGrid } from '@mui/x-data-grid';
// import { userRows } from '../../../dummyData.js';
import { useContext, useState } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contextApi/authContext/AuthContext';
import { useEffect } from 'react';
import { getAllUsers } from '../../../contextApi/authContext/apiCalls';

export default function UserList() {
  const { users, dispatch } = useContext(AuthContext);
  const [data, setData] = useState(null);
  console.log(users);
  useEffect(() => {
    getAllUsers(dispatch);
  }, [dispatch]);
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
            <Link to={'/dashboard/user/' + params.row.id}>
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
      />
    </div>
  );
}
