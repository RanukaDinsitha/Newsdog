import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Home,
  Newspaper,
  Video,
  List,
  Settings,
  Dog,
  Languages,
} from "lucide-react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Card,
  CardContent,
  Divider,
  Select,
  MenuItem,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import TransparentReviewButton from "./components/Review";
import "./Dashboard.css";
// import LoadingSpinner from "./components/Spinner";
// import { Player } from "./components/video/Player"

// Placeholder Components
const HottestArticles = () => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {t("trending_articles", { defaultValue: "Trending Articles" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" /> &nbsp;
        <Typography variant="body1" className="card-body">
          {t("trending_articles_description", {
            defaultValue: "Here are some trending topics/papers in Sri Lanka.",
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ArticlesPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {t("articles", { defaultValue: "Articles" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" />
        &nbsp;
        <Typography variant="body1" className="card-body">
          {t("articles_description", {
            defaultValue:
              "Check out articles on what is going on in Sri Lanka.",
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

const NewspaperPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {t("newspaper", { defaultValue: "Newspaper" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" />
        &nbsp;
        <Typography variant="body1" className="card-body">
          {t("newspaper_description", {
            defaultValue:
              "Check out our custom newspaper, made by data from other newspapers.",
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

const VideosPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {t("videos", { defaultValue: "Videos" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" />
        &nbsp;
        <Typography variant="body1" className="card-body">
          {t("videos_description", {
            defaultValue: "Check out the videos of Sri Lankan news.",
          })}
          <ReactPlayer
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            className="player"
          />
        </Typography>
      </CardContent>
    </Card>
  );
};

const LanguagesPage = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    i18n.changeLanguage(event.target.value as string);
  };

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {i18n.t("languages", { defaultValue: "Languages" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" />
        &nbsp;
        <Typography variant="body1" className="card-body">
          {i18n.t("change_languages_here", {
            defaultValue: "Change languages here",
          })}
        </Typography>
        &nbsp;
        <div className="language-selector">
          <Languages className="language-icon" size={24} />
          <Select
            value={i18n.language}
            onChange={handleChangeLanguage}
            className="language-select"
            variant="outlined"
            size="small"
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="si">සිංහල (Sinhala)</MenuItem>
            <MenuItem value="ta">
              தமிழ் (Tamil) <b>Inaccurate</b>
            </MenuItem>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

const SettingsPage = () => {
  const { t } = useTranslation();

  return (
    <Card variant="outlined" className="card">
      <CardContent>
        <Typography variant="h4" component="div" className="card-header">
          {t("settings", { defaultValue: "Settings" })}
        </Typography>
        &nbsp;
        <Divider className="card-divider" />
        &nbsp;
        <Typography variant="body1" className="card-body">
          {t("settings_description", {
            defaultValue: "Change your settings and other preferences here.",
          })}
        </Typography>
      </CardContent>
    </Card>
  );
};

// const NotFound = () => {
//   <Card variant="outlined" className="card">
//   <CardContent>
//     <Typography variant="h4" component="div" className="card-header">
//       {t("settings", { defaultValue: "Settings" })}
//     </Typography>
//     &nbsp;
//     <Divider className="card-divider" />
//     &nbsp;
//     <Typography variant="body1" className="card-body">
//       {t("settings_description", {
//         defaultValue: "Change your settings and other preferences here.",
//       })}
//     </Typography>
//   </CardContent>
// </Card>
// }

// Dashboard Component
const Dashboard = () => {
  const { t } = useTranslation();

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
              <p id="logo-text">{t("app_name", { defaultValue: "Newsdog" })}</p>
              &nbsp;&nbsp;&nbsp;&nbsp;
            </Typography>
          </Box>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Link to="/" className="sidebar-link">
                <Home className="sidebar-list-item-icon" size={24} />
                {t("home", { defaultValue: "Home" })}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/articles" className="sidebar-link">
                <List className="sidebar-list-item-icon" size={24} />
                {t("articles", { defaultValue: "Articles" })}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/newspaper" className="sidebar-link">
                <Newspaper className="sidebar-list-item-icon" size={24} />
                {t("newspaper", { defaultValue: "Newspaper" })}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/videos" className="sidebar-link">
                <Video className="sidebar-list-item-icon" size={24} />
                {t("videos", { defaultValue: "Videos" })}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/languages" className="sidebar-link language-button">
                <Languages className="sidebar-list-item-icon" size={24} />
                {t("languages", { defaultValue: "Languages" })}
              </Link>
            </li>
            <li className="sidebar-list-item">
              <Link to="/settings" className="sidebar-link">
                <Settings className="sidebar-list-item-icon" size={24} />
                {t("settings", { defaultValue: "Settings" })}
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
                <p id="logo-text">
                  {t("app_name", { defaultValue: "Newsdog" })}
                </p>
              </Typography>
            </Toolbar>
          </AppBar>
          <Box className="content-box">
            <Routes>
              <Route path="/" element={<HottestArticles />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="/newspaper" element={<NewspaperPage />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/languages" element={<LanguagesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              {/* <Route path="/404" element={<NotFound />} /> */}
              {/* Add any additional routes here */}
            </Routes>
          </Box>
          {/* <div className="spinner-box">
             <LoadingSpinner />
          </div> */}
          <div className="review-box">
            <TransparentReviewButton />
          </div>
        </Box>
      </div>
    </Router>
  );
};

export default Dashboard;
