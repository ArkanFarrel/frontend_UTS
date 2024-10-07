import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link, useNavigate } from "react-router-dom";
import data from "../data";

function sidebarTree(data, parent_id = null) {
  const tree = [];

  for (const item of data) {
    if (item.parent_id === parent_id) {
      const children = sidebarTree(data, item.id);
      if (children.length > 0) {
        item.children = children;
      }
      tree.push(item);
    }
  }

  return tree;
}

const generateMenuItems = (nodes) => {
  return nodes.map((node) => {
      const hasChildren = node.children && node.children.length > 0;

      if (hasChildren) {
          return (
              <SubMenu key={node.id} icon={<HomeOutlinedIcon />} label={node.name}>
                  {generateMenuItems(node.children)}
              </SubMenu>
          );
      } else {
          return (
              <MenuItem key={node.id} icon={<PeopleOutlinedIcon />}>
                  <Link to={`/${node.name.toLowerCase()}`}>{node.name}</Link>
              </MenuItem>
          );
      }
  });
};

const SidebarComponent = () => {
  const treeData = sidebarTree(data);
  const { collapseSidebar, toggleSidebar, toggled, broken } = useProSidebar();
  const navigate = useNavigate();

  const toggle = () => {
    toggleSidebar();
    if (toggled) {
      collapseSidebar();
    } else {
      collapseSidebar();
    }
  };

  const handleLogout = () => {
    navigate("/"); 
  };

  console.log(toggled, broken);

  return (
    <>
      <Sidebar
        breakPoint="md"
        transitionDuration={400}
        backgroundColor="white"
        rtl={false}
        style={{ height: "100vh", position: "relative" }}
      >
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              toggle();
            }}
            style={{ textAlign: "center" }}
          >
            <h2>Property</h2>
          </MenuItem>

          {generateMenuItems(treeData)}

          <MenuItem
            icon={<ExitToAppIcon />}
            onClick={handleLogout}
            style={{
              position: "fixed",
              bottom: 0,
              width: "17.5%",
              
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Sidebar>
      {broken && (
        <button onClick={toggle} style={{ float: "right", margin: "15px" }}>
          <MenuOutlinedIcon />
        </button>
      )}
    </>
  );
};

export default SidebarComponent;
