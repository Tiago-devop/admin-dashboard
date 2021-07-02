import "./UserList.css";
import { DataGrid } from "@material-ui/data-grid";

export default function UserList() {
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 130,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
  ];

  const rows = [
    {
      id: 1,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 2,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 3,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 4,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 5,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 6,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 7,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 8,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 9,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 10,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
    {
      id: 11,
      username: "Maria catrina",
      avatar:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?cs=srgb&dl=pexels-moose-photos-1036623.jpg&fm=jpg",
      email: "Maria@gmail.com",
      status: "active",
      transaction: "$120.00",
    },
  ];
  return (
    <div className="userList">
      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
