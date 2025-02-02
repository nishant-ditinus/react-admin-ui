// const rows: GridRowsProp = [
//   //   { id: 1, col1: 'Hello', col2: 'World', status: true },
//   //   { id: 2, col1: 'DataGridPro', col2: 'is Awesome', status: false },
//   //   { id: 3, col1: 'MUI', col2: 'is Amazing', status: true },
//   // ];


import { GridColDef } from "@mui/x-data-grid";
import DataTable from "../../components/dataTable/DataTable"
import "./users.scss"
import { userRows } from "../../data";

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90},
  { field: 'avatar', headerName: 'Avatar', width: 100, renderCell: (params) => {
    return <img src={params.row.img || "/noavatar.png"} alt="" />;
  }},
  { field: 'firstName',type:"string", headerName: 'First Name', width: 150, editable: true},
  { field: 'lastName',type:"string", headerName: 'Last Name', width: 150, editable: true},
  { field: 'email',type:"string", headerName: 'Email', width: 200},
  { field: 'phone',type:"string", headerName: 'Phone', width: 150},
  { field: 'createdAt',type:"string", headerName: 'Created At', width: 100},
  { field: 'verified',type:"boolean", headerName: 'verified', width: 100},
];
function Users() {
  return (
    <div className='user'>
      <div className="info">
        <div className="subInfo">
        <h1>Users</h1>
        <button>Add New User</button>

        </div>
        <div className="table">
          <DataTable slug="users" columns={columns} rows={userRows} />
        </div>
      </div>
    </div>
  )
}

export default Users