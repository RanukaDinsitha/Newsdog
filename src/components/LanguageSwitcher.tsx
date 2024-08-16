// Dashboard.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home, Newspaper, Video, List, Settings, Dog } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Dashboard.css";

// Placeholder Components
const HottestArticles = () => (
  <Card variant="outlined" className="card">
    <CardContent>
      <Typography variant="h4" component="div" className="card-header">
        Trending Articles
      </Typography>
      <Divider className="card-divider" />
      <Typography variant="body1" className="card-body">
        Here, are some trending topics/papers in Sri Lanka
      </Typography>
    </CardContent>
  </Card>
);

// Other components (ArticlesPage, NewspaperPage, VideosPage, SettingsPage) go here...

const Dashboard = () => {
  return (
    <Router>
      <div className="dashboard-container">
        <div className="sidebar">
          <Box className="sidebar-header">
            <Typography
              variant="h6"
              sx={{ flexGrow: 1 }}
              className="app-bar-typography"
            >
              <Dog className="doggy" size={24} />
              &nbsp;
              <p id="logo-text">Newsdog</p>&nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
            <LanguageSwitcher /> {/* Add the language switcher here */}
          </Box>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to="/" className="sidebar-link">
                <Home className="sidebar-list-item-icon" size={24} />
                Home
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/articles" className="sidebar-link">
                <List className="sidebar-list-item-icon" size={24} />
                Articles
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/newspaper" className="sidebar-link">
                <Newspaper className="sidebar-list-item-icon" size={24} />
                Newspaper
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/videos" className="sidebar-link">
                <Video className="sidebar-list-item-icon" size={24} />
                Videos
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/settings" className="sidebar-link">
                <Settings className="sidebar-list-item-icon" size={24} />
                Settings
              </Link>
            </li>
          </ul>
        </div>
        <Box className="content-area">
          <AppBar position="static" className="app-bar">
            <Toolbar>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1 }}
                className="app-bar-typography"
              >
                <Dog className="doggy" size={24} />
                &nbsp;
                <p id="logo-text">Newsdog</p>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box className="content-box">
            <Routes>
              <Route path="/" element={<HottestArticles />} />
              {/* Other routes go here */}
            </Routes>
          </Box>
        </Box>
      </div>
    </Router>
  );
};

export default Dashboard;
