import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import StoreIcon from "@mui/icons-material/Store";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Route, Routes, useNavigate } from "react-router-dom";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import ProductDetails from "./components/Products/ProductDetails";
import CreateProduct from "./components/Products/CreateProduct";
import CustomerDetails from "./components/Customers/CustomerDetails";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import OrderDetailsForm from "./components/Order/OrderDetailsTable";
import OrderDetailsTable from "./components/Order/OrderDetailsTable";

const drawerWidth = 220;

const menu = [
  { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
  { name: "Products", path: "/admin/products", icon: <StoreIcon /> },
  { name: "Customers", path: "/admin/customers", icon: <GroupIcon /> },
  { name: "Orders", path: "/admin/orders", icon: <ListAltIcon /> },
  {
    name: "AddProduct",
    path: "/admin/product/create",
    icon: <AddBoxIcon />,
  },
];

const Admin = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = (item) => {
    navigate(item.path);
    handleDrawerToggle();
  };

  const drawer = (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <div>
        <Toolbar sx={{ backgroundColor: "rgb(79,70,229)", color: "white" }}>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {menu.map((item) => (
            <ListItem
              key={item.name}
              disablePadding
              onClick={() => handleMenuClick(item)}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Box>
                  <Avatar
                    className="text-white"
                    sx={{ width: "56", height: "56", bgcolor: "#9155fd" }}
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/user/qasim.png`}
                      alt="profile"
                    />
                  </Avatar>
                </Box>
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </div>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          display: { sm: "none" },
          backgroundColor: "rgb(79,70,229)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ display: { sm: "none" } }} />
        <Routes>
          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/products" element={<ProductDetails />}></Route>
          <Route path="/product/create" element={<CreateProduct />}></Route>
          <Route path="/orders" element={<OrderDetailsTable />}></Route>
          <Route path="/customers" element={<CustomerDetails />}></Route>
        </Routes>
      </Box>
    </Box>
  );
};

Admin.propTypes = {
  window: PropTypes.func,
};

export default Admin;
