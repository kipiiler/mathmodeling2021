import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { mainTheme } from "./style/theme";
import AboutPage from "./pages/AboutPage/AboutPage";
import HomePage from "./pages/HomePage/HomePage";
import FAQPage from "./pages/FAQPage/FAQPage";
import CalendarPage from "./pages/CalendarPage/CalendarPage";
import EventPage from "./pages/EventPage/EventPage";
import BlogPage from "./pages/BlogsPage/BlogPage";
import CoursePage from "./pages/CoursePage/CoursePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import BlogDetail from "./pages/BlogsPage/BlogDetailPage/BlogDetail";

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/calendar" component={CalendarPage} />
              <Route exact path="/event" component={EventPage} />
              <Route exact path="/gallery" component={GalleryPage} />
              <Route exact path="/courses" component={CoursePage} />
              <Route exact path="/faq" component={FAQPage} />
              <Route exact path="/blog" component={BlogPage} />
              <Route exact path="/blog/:id" component={BlogDetail} />
            </Switch>
          </Router>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
