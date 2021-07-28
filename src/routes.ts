import React from "react";
import { Blog } from "./pages/Blog";
import { FindRoom } from "./pages/FindRoom";
import { BecomeHost } from "./pages/BecomeHost";
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { StudentProfile } from "./pages/StudentProfile";
import { StudentRooms } from "./pages/StudentRooms";
import { StudentMatches } from "./pages/StudentMatches";
import { StudentChat } from "./pages/StudentChat";
import { StudentHosts } from "./pages/StudentHosts";
import { HostProfileView } from "./pages/HostProfileView";

import {
  BECOMEHOST_ROUTE,
  BLOG_ROUTE,
  CONTACT_ROUTE,
  FINDROOM_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  HOME_ROUTE,
  STUDENT_PROFILEVIEW_ROUTE,
  STUDENT_PROFILE_ROUTE,
  STUDENT_ROOMS_ROUTE,
  STUDENT_MATCHES_ROUTE,
  STUDENT_CHATS_ROUTE,
  STUDENT_HOSTS_ROUTE,
  HOST_PROFILEVIEW_ROUTE,
  HOST_PROFILE_ROUTE,
  HOST_ROOMS_ROUTE,
  HOST_MATCHES_ROUTE,
  HOST_CHATS_ROUTE,
  HOST_HOSTS_ROUTE,
  STUDENT_PROFILEEDIT_ROUTE,
  HOST_PROFILEEDIT_ROUTE,
  LOGIN_EDIT,
} from "./utils/constants";
import { HostProfile } from "pages/HostProfile";
import { StudentProfileView } from "pages/StudentProfileView";
import { HostRooms } from "pages/HostRooms";
import { HostMatches } from "pages/HostMatches";
import { HostChats } from "pages/HostChats";
import { HostTenats } from "pages/HostTenats";
import { ProfileUserEdit } from "pages/ProfileUserEdit";
import { ChangePassword } from "pages/ChangePassword";
import { HostHouseRegistration } from "pages/HostHouseRegistration";
import {SelectedRoom} from "./selectedRoom/selectedRoom";
import {ChatPage} from "./Chat/chat";

export interface IRoute {
  readonly path: string;
  component: React.FC;
  keyLocalize: string;
}

export const publicRoutes: IRoute[] = [
  {
    path: FINDROOM_ROUTE,
    component: HostHouseRegistration,
    keyLocalize: "findroom",
  }, // FindRoom
  { path: BECOMEHOST_ROUTE, component: BecomeHost, keyLocalize: "becomehost" },
  { path: BLOG_ROUTE, component: SelectedRoom, keyLocalize: "blog" },  //Blog
  { path: CONTACT_ROUTE, component: Contact, keyLocalize: "contact" },
];

export const publicRoutesHospi: IRoute[] = [
  { path: LOGIN_ROUTE, component: Login, keyLocalize: "login" },
  { path: REGISTER_ROUTE, component: Login, keyLocalize: "register" },
  { path: HOME_ROUTE, component: Home, keyLocalize: "register" },
  { path: LOGIN_EDIT, component: ChangePassword, keyLocalize: "login" },
];

export const studentRoutes: IRoute[] = [
  {
    path: STUDENT_PROFILEVIEW_ROUTE,
    component: StudentProfileView,
    keyLocalize: "profile",
  },
  {
    path: STUDENT_PROFILE_ROUTE,
    component: StudentProfile,
    keyLocalize: "profile",
  },
  {
    path: STUDENT_PROFILEEDIT_ROUTE,
    component: ProfileUserEdit,
    keyLocalize: "profile",
  },
  { path: STUDENT_ROOMS_ROUTE, component: StudentRooms, keyLocalize: "rooms" },
  {
    path: STUDENT_MATCHES_ROUTE,
    component: StudentMatches,
    keyLocalize: "matches",
  },
  { path: STUDENT_CHATS_ROUTE, component: ChatPage, keyLocalize: "chats" },
  { path: STUDENT_HOSTS_ROUTE, component: StudentHosts, keyLocalize: "hosts" },
];

export const hostRoutes: IRoute[] = [
  {
    path: HOST_PROFILEVIEW_ROUTE,
    component: HostProfileView,
    keyLocalize: "profile",
  },
  { path: HOST_PROFILE_ROUTE, component: HostProfile, keyLocalize: "profile" },
  {
    path: HOST_PROFILEEDIT_ROUTE,
    component: ProfileUserEdit,
    keyLocalize: "profile",
  },
  { path: HOST_ROOMS_ROUTE, component: HostRooms, keyLocalize: "rooms" },
  { path: HOST_MATCHES_ROUTE, component: HostMatches, keyLocalize: "matches" },
  { path: HOST_CHATS_ROUTE, component: HostChats, keyLocalize: "chats" },
  { path: HOST_HOSTS_ROUTE, component: HostTenats, keyLocalize: "tenats" },

  // { path: FINDROOM_ROUTE, component: Blog, keyLocalize: "findroom" },
  // { path: BECOMEHOST_ROUTE, component: Blog, keyLocalize: "becomehost" },
  // { path: BLOG_ROUTE, component: Blog, keyLocalize: "blog" },
  // { path: CONTACT_ROUTE, component: Contact, keyLocalize: "contact" },
];
