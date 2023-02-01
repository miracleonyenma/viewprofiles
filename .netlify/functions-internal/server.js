var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-BXQ4B4JZ.css";

// app/root.tsx
var import_react3 = require("@remix-run/react");

// app/components/SiteHeader.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), SiteHeader = ({ user }) => {
  let transition = (0, import_react2.useTransition)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "site-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("figure", { className: "site-logo", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { children: "Profiles" }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 15,
      columnNumber: 52
    }, this) }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 15,
      columnNumber: 39
    }, this) }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "site-nav", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "links", children: user != null && user.id ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: `/${user == null ? void 0 : user.slug}`, children: [
        " Hey, ",
        user == null ? void 0 : user.username,
        "! "
      ] }, void 0, !0, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 23,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Form, { action: "/sign-out", method: "post", className: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { type: "submit", disabled: transition.state != "idle", children: transition.state == "idle" ? "Sign Out" : "Loading..." }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 27,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 26,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 20,
      columnNumber: 15
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/sign-in", children: "Sign In" }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 34,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 34,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Link, { to: "/register", children: "Register" }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 35,
        columnNumber: 38
      }, this) }, void 0, !1, {
        fileName: "app/components/SiteHeader.tsx",
        lineNumber: 35,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 32,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/SiteHeader.tsx",
      lineNumber: 16,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SiteHeader.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}, SiteHeader_default = SiteHeader;

// app/utils/session.server.ts
var import_node = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "userSession",
    secure: !1,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
}), createUserSession = async (userData, redirectTo) => {
  let session = await getSession();
  return session.set("userData", userData), console.log({ session }), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
}, getUserSession = (request) => getSession(request.headers.get("Cookie")), getUserData = async (request) => {
  let userData = (await getUserSession(request)).get("userData");
  return console.log({ userData }), userData || null;
};
var logout = async (request) => {
  let session = await getUserSession(request);
  return (0, import_node.redirect)("/sign-in", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
};

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Profiles | Find & connect with people",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => (0, import_node2.json)({
  userData: await getUserData(request)
});
function App() {
  let { userData } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "site-main", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(SiteHeader_default, { user: userData == null ? void 0 : userData.user }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 63,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 64,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/routes/forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action,
  default: () => forgot_password_default
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/slugify.ts
var slugify = (str) => str && str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""), slugify_default = slugify;

// app/models/profiles.server.ts
var strapiApiUrl = process.env.STRAPI_API_URL, getProfiles = async () => {
  let response = await (await fetch(`${strapiApiUrl}/users/?populate=profilePic`)).json();
  return console.log({
    response
  }), response;
}, getProfileBySlug = async (slug) => {
  let response = await (await fetch(`${strapiApiUrl}/users?populate=profilePic&filters[slug]=${slug}`)).json();
  return console.log({ response }), response[0];
}, signIn = async (data) => {
  console.log({ data });
  let response = await (await fetch(`${strapiApiUrl}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })).json();
  return console.log({ response }), response;
}, register = async (data) => {
  var _a;
  let slug = slugify_default((_a = data.username) == null ? void 0 : _a.toString());
  return data.slug = slug, await (await fetch(`${strapiApiUrl}/auth/local/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })).json();
}, updateProfile = async (data, token) => {
  let { id } = data, response = await (await fetch(`${strapiApiUrl}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  })).json();
  return console.log({ response }), response;
}, sendResetMail = async (email) => await (await fetch(`${strapiApiUrl}/auth/forgot-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ email })
})).json(), resetPass = async ({ password, passwordConfirmation, code }) => await (await fetch(`${strapiApiUrl}/auth/reset-password`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    password,
    passwordConfirmation,
    code
  })
})).json();

// app/routes/forgot-password.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  let email = (await request.formData()).get("email"), response = await sendResetMail(email);
  return (0, import_node3.json)(response);
}, ForgotPass = () => {
  let transition = (0, import_react4.useTransition)(), data = (0, import_react4.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-4xl", children: "Forgot password" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 24,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "Click the button below to send the reset link to your registerd email" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Form, { method: "post", className: "form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "wrapper", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: data != null && data.ok ? "Link sent! Check your mail. Can't find it in the inbox? Check Spam" : "" }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "form-control", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { htmlFor: "email", children: "Email" }, void 0, !1, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("input", { id: "email", name: "email", type: "email", className: "form-input", required: !0 }, void 0, !1, {
          fileName: "app/routes/forgot-password.tsx",
          lineNumber: 33,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 31,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "cta", children: [
        " ",
        transition.state == "submitting" ? "Sending" : "Send link",
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 36,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/routes/forgot-password.tsx",
        lineNumber: 35,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/forgot-password.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/forgot-password.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}, forgot_password_default = ForgotPass;

// app/routes/reset-password.tsx
var reset_password_exports = {};
__export(reset_password_exports, {
  action: () => action2,
  default: () => reset_password_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code");
  return code ? (0, import_node4.json)({
    code
  }) : (0, import_node4.redirect)("/sign-in");
}, action2 = async ({ request }) => {
  let formData = await request.formData(), code = formData.get("code"), password = formData.get("password"), passwordConfirmation = formData.get("confirmPassword");
  if (password != passwordConfirmation)
    return (0, import_node4.json)({ confirmPassword: "Passwords should match" });
  let response = await resetPass({ password, passwordConfirmation, code });
  return console.log({
    response
  }), response.error ? (console.error(response.error), (0, import_node4.json)({ error: response.error })) : (0, import_node4.redirect)("/sign-in");
}, ResetPass = () => {
  var _a;
  let transition = (0, import_react5.useTransition)(), error = (0, import_react5.useActionData)(), { code } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-4xl", children: "Reset password" }, void 0, !1, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 69,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "Enter your new password" }, void 0, !1, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/reset-password.tsx",
      lineNumber: 68,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react5.Form, { method: "post", className: "form", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { value: code, type: "hidden", id: "code", name: "code", required: !0 }, void 0, !1, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 74,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "wrapper", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "job-title", children: "Password" }, void 0, !1, {
            fileName: "app/routes/reset-password.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              id: "password",
              name: "password",
              type: "password",
              className: "form-input",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/reset-password.tsx",
              lineNumber: 78,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("label", { htmlFor: "job-title", children: "Confirm password" }, void 0, !1, {
            fileName: "app/routes/reset-password.tsx",
            lineNumber: 87,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "input",
            {
              id: "confirmPassword",
              name: "confirmPassword",
              type: "password",
              className: "form-input",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/routes/reset-password.tsx",
              lineNumber: 88,
              columnNumber: 15
            },
            this
          ),
          error != null && error.confirmPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("em", { className: "text-red-600", children: error.confirmPassword }, void 0, !1, {
            fileName: "app/routes/reset-password.tsx",
            lineNumber: 96,
            columnNumber: 17
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 86,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { className: "cta", children: [
          " ",
          transition.state == "submitting" ? "Sending" : "Reset password",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 100,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 99,
          columnNumber: 13
        }, this),
        error != null && error.error ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("em", { className: "text-red-600", children: (_a = error.error) == null ? void 0 : _a.message }, void 0, !1, {
          fileName: "app/routes/reset-password.tsx",
          lineNumber: 108,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/reset-password.tsx",
        lineNumber: 75,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/reset-password.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/reset-password.tsx",
    lineNumber: 67,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/reset-password.tsx",
    lineNumber: 66,
    columnNumber: 5
  }, this);
}, reset_password_default = ResetPass;

// app/routes/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action3,
  default: () => register_default
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ProfileForm.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), ProfileForm = ({
  profile,
  onModifyData,
  action: action7,
  errors
}) => {
  let transition = (0, import_react6.useTransition)(), [profileData, setProfileData] = (0, import_react7.useState)(profile), [authData, setAuthData] = (0, import_react7.useState)({ email: "", password: "" }), updateField = (field) => setProfileData((value) => ({ ...value, ...field }));
  return (0, import_react7.useEffect)(() => {
    onModifyData && (action7 == "create" ? onModifyData({ ...profileData, ...authData }) : action7 == "login" ? onModifyData(authData) : onModifyData(profileData));
  }, [profileData, authData]), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react6.Form, { method: action7 == "edit" ? "put" : "post", className: "form", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("fieldset", { disabled: transition.state == "submitting", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("input", { value: profile == null ? void 0 : profile.id, type: "hidden", name: "id", required: !0 }, void 0, !1, {
      fileName: "app/components/ProfileForm.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "wrapper", children: [
      action7 != "login" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "username", children: "Name" }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                onChange: (e) => updateField({ username: e.target.value }),
                value: profileData == null ? void 0 : profileData.username,
                id: "username",
                name: "username",
                type: "text",
                className: "form-input",
                required: !0
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProfileForm.tsx",
                lineNumber: 48,
                columnNumber: 19
              },
              this
            ),
            errors != null && errors.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.username }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 58,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 46,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "twitterUsername", children: "Twitter username" }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 62,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                onChange: (e) => updateField({ twitterUsername: e.target.value }),
                value: profileData == null ? void 0 : profileData.twitterUsername,
                id: "twitterUsername",
                name: "twitterUsername",
                type: "text",
                className: "form-input",
                placeholder: "Without the @"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProfileForm.tsx",
                lineNumber: 63,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 45,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "bio", children: "Bio" }, void 0, !1, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 77,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "textarea",
            {
              onChange: (e) => updateField({ bio: e.target.value }),
              value: profileData == null ? void 0 : profileData.bio,
              name: "bio",
              id: "bio",
              cols: 30,
              rows: 3,
              className: "form-textarea"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 78,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 76,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-group", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "job-title", children: "Job title" }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                onChange: (e) => updateField({ title: e.target.value }),
                value: profileData == null ? void 0 : profileData.title,
                id: "job-title",
                name: "job-title",
                type: "text",
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProfileForm.tsx",
                lineNumber: 91,
                columnNumber: 19
              },
              this
            ),
            errors != null && errors.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.title }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 100,
              columnNumber: 21
            }, this) : null
          ] }, void 0, !0, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "website", children: "Website link" }, void 0, !1, {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 104,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
              "input",
              {
                onChange: (e) => updateField({ websiteUrl: e.target.value }),
                value: profileData == null ? void 0 : profileData.websiteUrl,
                id: "website",
                name: "website",
                type: "url",
                className: "form-input"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProfileForm.tsx",
                lineNumber: 105,
                columnNumber: 19
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 103,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileForm.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this),
      action7 != "edit" && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "job-title", children: "Email" }, void 0, !1, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 123,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({ ...data, email: e.target.value })),
              value: authData.email,
              id: "email",
              name: "email",
              type: "email",
              className: "form-input",
              required: !0
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 124,
              columnNumber: 17
            },
            this
          ),
          errors != null && errors.email ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.email }, void 0, !1, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 136,
            columnNumber: 19
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 122,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "form-control", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("label", { htmlFor: "job-title", children: "Password" }, void 0, !1, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 140,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "input",
            {
              onChange: (e) => setAuthData((data) => ({
                ...data,
                password: e.target.value
              })),
              value: authData.password,
              id: "password",
              name: "password",
              type: "password",
              className: "form-input"
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileForm.tsx",
              lineNumber: 141,
              columnNumber: 17
            },
            this
          ),
          errors != null && errors.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.password }, void 0, !1, {
            fileName: "app/components/ProfileForm.tsx",
            lineNumber: 155,
            columnNumber: 19
          }, this) : null
        ] }, void 0, !0, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this),
        errors != null && errors.ValidationError ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.ValidationError }, void 0, !1, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 159,
          columnNumber: 17
        }, this) : null,
        errors != null && errors.ApplicationError ? /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("em", { className: "text-red-600", children: errors.ApplicationError }, void 0, !1, {
          fileName: "app/components/ProfileForm.tsx",
          lineNumber: 162,
          columnNumber: 17
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/ProfileForm.tsx",
        lineNumber: 121,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "action-cont mt-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { className: "cta", children: [
        " ",
        transition.state == "submitting" ? "Submitting" : "Submit",
        " "
      ] }, void 0, !0, {
        fileName: "app/components/ProfileForm.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileForm.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("a", { href: "/forgot-password", children: "Forgot password?" }, void 0, !1, {
        fileName: "app/components/ProfileForm.tsx",
        lineNumber: 172,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileForm.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileForm.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ProfileForm.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, ProfileForm_default = ProfileForm;

// app/routes/register.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), action3 = async ({ request }) => {
  try {
    let formData = await request.formData(), email = formData.get("email"), password = formData.get("password"), username = formData.get("username"), title = formData.get("job-title"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), websiteUrl = formData.get("website"), errors = {
      email: email ? null : "Email is required",
      password: password ? null : "Password is required",
      username: username ? null : "Username is required",
      title: title ? null : "Job title is required"
    };
    if (Object.values(errors).some((errorMessage) => errorMessage))
      throw errors;
    console.log({ email, password, username, title, twitterUsername, bio, websiteUrl });
    let { jwt, user, error } = await register({ email, password, username, title, twitterUsername, bio, websiteUrl });
    if (console.log({ jwt, user, error }), error)
      throw { [error.name]: error.message };
    return createUserSession({ jwt, user }, "/");
  } catch (error) {
    return (0, import_node5.json)(error);
  }
}, Register = () => {
  let errors = (0, import_react8.useActionData)();
  return console.log({ errors }), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "text-4xl", children: "Register" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 60,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Create a new profile" }, void 0, !1, {
        fileName: "app/routes/register.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/register.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ProfileForm_default, { action: "create", errors }, void 0, !1, {
      fileName: "app/routes/register.tsx",
      lineNumber: 65,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/register.tsx",
    lineNumber: 58,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/register.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}, register_default = Register;

// app/routes/sign-out.tsx
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action4,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node");
var action4 = async ({ request }) => logout(request), loader3 = async () => (0, import_node6.redirect)("/");

// app/routes/sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action5,
  default: () => sign_in_default
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  try {
    let formData = await request.formData(), identifier = formData.get("email"), password = formData.get("password");
    console.log({ identifier, password });
    let errors = {
      identifier: identifier ? null : "Email is required",
      password: password ? null : "Password is required"
    }, hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
    if (console.log({ hasErrors }), hasErrors)
      throw errors;
    console.log({ identifier, password });
    let { jwt, user, error } = await signIn({ identifier, password });
    if (console.log({ jwt, user, error }), error)
      throw { [error.name]: error.message };
    return createUserSession({ jwt, user }, "/");
  } catch (error) {
    return (0, import_node7.json)(error);
  }
}, Login = () => {
  let errors = (0, import_react9.useActionData)();
  return console.log({ errors }), /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h2", { className: "text-4xl", children: "Sign in " }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 61,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "You have to log in to edit your profile" }, void 0, !1, {
        fileName: "app/routes/sign-in.tsx",
        lineNumber: 62,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 60,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(ProfileForm_default, { action: "login", errors }, void 0, !1, {
      fileName: "app/routes/sign-in.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 59,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.tsx",
    lineNumber: 58,
    columnNumber: 5
  }, this);
}, sign_in_default = Login;

// app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action6,
  default: () => slug_default,
  loader: () => loader4
});
var import_node8 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/ProfileCard.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), getImgUrl = ({
  url,
  username
}) => url ? `${url}` : `https://ui-avatars.com/api/?name=${username == null ? void 0 : username.replace(
  " ",
  "+"
)}&background=2563eb&color=fff`, ProfileCard = ({
  profile,
  preview
}) => {
  var _a;
  return console.log({ profile }), /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("article", { className: `profile ${preview ? "preview" : ""}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "profile-pic-cont", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("figure", { className: "profile-pic img-cont", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      "img",
      {
        src: getImgUrl({
          url: (_a = profile.profilePic) == null ? void 0 : _a.formats.small.url,
          username: profile.username
        }),
        alt: `A photo of ${profile.username}`,
        className: "w-full"
      },
      void 0,
      !1,
      {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 44,
        columnNumber: 15
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/ProfileCard.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/ProfileCard.tsx",
      lineNumber: 42,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "profile-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("header", { className: "profile-header ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "username", children: profile.username }, void 0, !1, {
          fileName: "app/components/ProfileCard.tsx",
          lineNumber: 56,
          columnNumber: 15
        }, this),
        profile.twitterUsername && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "a",
          {
            href: `https://twitter.com/${profile.twitterUsername}`,
            className: "twitter link",
            children: [
              "@",
              profile.twitterUsername
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/ProfileCard.tsx",
            lineNumber: 60,
            columnNumber: 17
          },
          this
        ),
        profile.bio && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "bio", children: profile.bio }, void 0, !1, {
          fileName: "app/components/ProfileCard.tsx",
          lineNumber: 69,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 55,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { className: "links", children: [
        profile.title && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "svg",
            {
              className: "icon stroke",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProfileCard.tsx",
                  lineNumber: 82,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileCard.tsx",
              lineNumber: 75,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: [
            " ",
            profile.title,
            " "
          ] }, void 0, !0, {
            fileName: "app/components/ProfileCard.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/ProfileCard.tsx",
          lineNumber: 74,
          columnNumber: 17
        }, this),
        profile.websiteUrl && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("li", { className: "w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "svg",
            {
              className: "icon stroke",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/ProfileCard.tsx",
                  lineNumber: 102,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileCard.tsx",
              lineNumber: 95,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "a",
            {
              href: `${profile.websiteUrl}`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "link",
              children: profile.websiteUrl
            },
            void 0,
            !1,
            {
              fileName: "app/components/ProfileCard.tsx",
              lineNumber: 108,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/ProfileCard.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this),
      !preview && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("footer", { className: "grow flex items-end justify-end pt-4", children: (profile == null ? void 0 : profile.slug) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react10.Link, { to: profile == null ? void 0 : profile.slug, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { className: "cta w-icon", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { children: "View profile" }, void 0, !1, {
          fileName: "app/components/ProfileCard.tsx",
          lineNumber: 126,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "icon stroke",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: 2,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "path",
              {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                d: "M17 8l4 4m0 0l-4 4m4-4H3"
              },
              void 0,
              !1,
              {
                fileName: "app/components/ProfileCard.tsx",
                lineNumber: 135,
                columnNumber: 25
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/ProfileCard.tsx",
            lineNumber: 127,
            columnNumber: 23
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 125,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 124,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/components/ProfileCard.tsx",
        lineNumber: 122,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/ProfileCard.tsx",
      lineNumber: 54,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ProfileCard.tsx",
    lineNumber: 41,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ProfileCard.tsx",
    lineNumber: 40,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ProfileCard.tsx",
    lineNumber: 38,
    columnNumber: 5
  }, this);
}, ProfileCard_default = ProfileCard;

// app/routes/$slug.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader4 = async ({ params, request }) => (0, import_node8.json)({
  userData: await getUserData(request),
  profile: await getProfileBySlug(params.slug)
}), action6 = async ({ request }) => {
  let data = await getUserData(request), formData = await request.formData(), id = formData.get("id"), username = formData.get("username"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), title = formData.get("job-title"), websiteUrl = formData.get("website"), errors = {
    id: id ? null : "Id is required",
    username: username ? null : "username is required",
    title: title ? null : "title is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node8.json)(errors) : (await updateProfile(
    { id, username, twitterUsername, bio, title, websiteUrl },
    data == null ? void 0 : data.jwt
  ), null);
}, Profile = () => {
  var _a, _b;
  let { profile, userData } = (0, import_react11.useLoaderData)(), errors = (0, import_react11.useActionData)(), [profileData, setprofileData] = (0, import_react12.useState)(profile), [isEditing, setIsEditing] = (0, import_react12.useState)(!1);
  return console.log({ userData, profile }), /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("section", { className: "site-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "profile-cont w-full max-w-5xl m-auto", children: [
    profileData ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ProfileCard_default, { profile: profileData, preview: !0 }, void 0, !1, {
        fileName: "app/routes/$slug.tsx",
        lineNumber: 84,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("ul", { className: "actions", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("button", { className: "cta w-icon", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              className: "icon stroke",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/$slug.tsx",
                  lineNumber: 97,
                  columnNumber: 23
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/$slug.tsx",
              lineNumber: 89,
              columnNumber: 21
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: "Share" }, void 0, !1, {
            fileName: "app/routes/$slug.tsx",
            lineNumber: 103,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/$slug.tsx",
          lineNumber: 88,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/routes/$slug.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, this),
        ((_a = userData == null ? void 0 : userData.user) == null ? void 0 : _a.id) == profile.id && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "action", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "button",
          {
            onClick: () => setIsEditing(!isEditing),
            className: "cta w-icon",
            children: [
              isEditing ? /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon stroke",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/$slug.tsx",
                      lineNumber: 136,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/$slug.tsx",
                  lineNumber: 128,
                  columnNumber: 25
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: "icon stroke",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  strokeWidth: 2,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/$slug.tsx",
                      lineNumber: 121,
                      columnNumber: 27
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/$slug.tsx",
                  lineNumber: 113,
                  columnNumber: 25
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { children: isEditing ? "Cancel" : "Edit" }, void 0, !1, {
                fileName: "app/routes/$slug.tsx",
                lineNumber: 143,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/$slug.tsx",
            lineNumber: 108,
            columnNumber: 21
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/$slug.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/$slug.tsx",
        lineNumber: 86,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/$slug.tsx",
      lineNumber: 82,
      columnNumber: 13
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-center", children: "Oops, that profile doesn't exist... yet" }, void 0, !1, {
      fileName: "app/routes/$slug.tsx",
      lineNumber: 150,
      columnNumber: 13
    }, this),
    ((_b = userData == null ? void 0 : userData.user) == null ? void 0 : _b.id) == (profile == null ? void 0 : profile.id) && isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      ProfileForm_default,
      {
        errors,
        profile,
        action: "edit",
        onModifyData: (value) => setprofileData(value)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/$slug.tsx",
        lineNumber: 156,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 80,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 79,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 78,
    columnNumber: 5
  }, this);
}, slug_default = Profile;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
var import_node9 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader5 = async () => (0, import_node9.json)({
  profiles: await getProfiles()
});
function Index() {
  let { profiles } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("section", { className: "site-section profiles-section", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "wrapper", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("header", { className: "section-header", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h2", { className: "text-4xl", children: "Explore profiles" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Find and connect with amazing people all over the world!" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    profiles.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("ul", { className: "profiles-list", children: profiles.map((profile) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("li", { className: "profile-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ProfileCard_default, { profile, preview: !1 }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 36,
      columnNumber: 17
    }, this) }, profile.id, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 35,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 33,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "No profiles yet \u{1F642}" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 41,
      columnNumber: 11
    }, this),
    " "
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "70ff23eb", entry: { module: "/build/entry.client-VHN4C6MD.js", imports: ["/build/_shared/chunk-5FJQF3WU.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-HSNLZ3RJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-NACFR3JS.js", imports: ["/build/_shared/chunk-XX3N25OD.js", "/build/_shared/chunk-T5JL266V.js", "/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot-password": { id: "routes/forgot-password", parentId: "root", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password-OWDGUCEC.js", imports: ["/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-3Z35GTZ5.js", imports: ["/build/_shared/chunk-XX3N25OD.js", "/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-WQZ4EKPV.js", imports: ["/build/_shared/chunk-T5JL266V.js", "/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reset-password": { id: "routes/reset-password", parentId: "root", path: "reset-password", index: void 0, caseSensitive: void 0, module: "/build/routes/reset-password-UYYJMUD2.js", imports: ["/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-HXAF6SD6.js", imports: ["/build/_shared/chunk-T5JL266V.js", "/build/_shared/chunk-ZWFPLBR4.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-out": { id: "routes/sign-out", parentId: "root", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-out-VH7Q6NKQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-70FF23EB.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/forgot-password": {
    id: "routes/forgot-password",
    parentId: "root",
    path: "forgot-password",
    index: void 0,
    caseSensitive: void 0,
    module: forgot_password_exports
  },
  "routes/reset-password": {
    id: "routes/reset-password",
    parentId: "root",
    path: "reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: reset_password_exports
  },
  "routes/register": {
    id: "routes/register",
    parentId: "root",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/sign-out": {
    id: "routes/sign-out",
    parentId: "root",
    path: "sign-out",
    index: void 0,
    caseSensitive: void 0,
    module: sign_out_exports
  },
  "routes/sign-in": {
    id: "routes/sign-in",
    parentId: "root",
    path: "sign-in",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=server.js.map
