import React, { useEffect } from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";

import PrivateRoutes from "./contexts/privateRoutes";

import {
  Navbar,
  Footer,
  sidebar,
  ThemeSettings,
  Sidebar,
  Chat,
  Notification,
} from "./components";

import {
  Audit,
  Document,
  Policy,
  Training,
  CheckList,
  Role,
  Task,
  RiskAssesment,
  User,
  Permision,
  General,
  CreateUser,
  Landing,
  Create,
  Detail,
  ProjectDetail,
  LoginPage,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

import "./App.css";
import Index from "./pages/projects";
import CreateProject from "./pages/projects/createProject";

const App = () => {
  const { activeMenu } = useStateContext();

  const isLogin = () => {
    var Token = localStorage.getItem("Token") != null ? true : false;
    console.log(Token);
    if (Token) return true;
    else return false;
  };

  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <div className="flex relative dark:bg-main-dark-bg">
            <div
              className="fixed right-4 bottom-4"
              style={{ zIndex: "1000 " }}
            ></div>
            {activeMenu ? (
              <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={
                activeMenu
                  ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
                  : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
              }
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>

              <div>
                <Routes>
                  {/* App */}
                  <Route path="/" element={<Audit />} />
                  <Route path="login" element={<LoginPage />} />

                  <Route path="/policy" element={<Policy />} />
                  <Route path="/training" element={<Training />} />

                  {/* Tools */}
                  <Route path="/check list" element={<CheckList />} />
                  <Route path="/task" element={<Task />} />
                  <Route path="/risk assesment" element={<RiskAssesment />} />

                  {/* Tools */}
                  <Route path="/user" element={<User />} />
                  <Route path="/user/createuser" element={<CreateUser />} />
                  <Route path="/role" element={<Role />} />
                  <Route path="/permision" element={<Permision />} />
                  <Route path="/general" element={<General />} />

                  {/* Tools */}
                  <Route path="/user" element={<User />} />
                  <Route path="/role" element={<Role />} />
                  <Route path="/permision" element={<Permision />} />
                  <Route path="/general" element={<General />} />
                  <Route path="/projects" element={<Index />} />
                  <Route
                    path="/projects/create/new"
                    element={<CreateProject />}
                  />

                  <Route
                    path="/documents"
                    element={
                      <PrivateRoutes>
                        <Landing />
                      </PrivateRoutes>
                    }
                  />
                  <Route
                    path="/documents/create"
                    element={
                      <PrivateRoutes>
                        <Create />
                      </PrivateRoutes>
                    }
                  />
                  <Route
                    path="/documents/:id"
                    element={
                      <PrivateRoutes>
                        <Detail />
                      </PrivateRoutes>
                    }
                  />
                  <Route
                    path="/projects/:id"
                    element={
                      <PrivateRoutes>
                        <ProjectDetail />
                      </PrivateRoutes>
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
