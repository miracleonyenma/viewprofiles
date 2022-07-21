var __create = Object.create;
var __defProp = Object.defineProperty, __defProps = Object.defineProperties, __getOwnPropDesc = Object.getOwnPropertyDescriptor, __getOwnPropDescs = Object.getOwnPropertyDescriptors, __getOwnPropNames = Object.getOwnPropertyNames, __getOwnPropSymbols = Object.getOwnPropertySymbols, __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty, __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: !0, configurable: !0, writable: !0, value }) : obj[key] = value, __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    __hasOwnProp.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b))
      __propIsEnum.call(b, prop) && __defNormalProp(a, prop, b[prop]);
  return a;
}, __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b)), __markAsModule = (target) => __defProp(target, "__esModule", { value: !0 });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 == "object" || typeof module2 == "function")
    for (let key of __getOwnPropNames(module2))
      !__hasOwnProp.call(target, key) && (copyDefault || key !== "default") && __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  return target;
}, __toESM = (module2, isNodeMode) => __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: !0 } : { value: module2, enumerable: !0 })), module2), __toCommonJS = /* @__PURE__ */ ((cache) => (module2, temp) => cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp))(typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});

// node_modules/@remix-run/dev/dist/compiler/shims/react.ts
var React = __toESM(require("react"));

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_react.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node");

// app/styles/app.css
var app_default = "/build/_assets/app-GTX73DLH.css";

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\root.tsx
var import_react3 = require("@remix-run/react");

// app/components/SiteHeader.tsx
var import_react2 = require("@remix-run/react"), SiteHeader = ({ user }) => {
  let transition = (0, import_react2.useTransition)();
  return /* @__PURE__ */ React.createElement("header", {
    className: "site-header"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "site-logo"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", null, "Profiles"))), /* @__PURE__ */ React.createElement("nav", {
    className: "site-nav"
  }, /* @__PURE__ */ React.createElement("ul", {
    className: "links"
  }, (user == null ? void 0 : user.id) ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: `/${user == null ? void 0 : user.slug}`
  }, " Hey, ", user == null ? void 0 : user.username, "! ")), /* @__PURE__ */ React.createElement(import_react2.Form, {
    action: "/sign-out",
    method: "post",
    className: "link"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    disabled: transition.state != "idle"
  }, transition.state == "idle" ? "Sign Out" : "Loading..."))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("li", {
    className: "link"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/sign-in"
  }, "Sign In")), /* @__PURE__ */ React.createElement("li", {
    className: "link"
  }, /* @__PURE__ */ React.createElement(import_react2.Link, {
    to: "/register"
  }, "Register")))))));
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

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\root.tsx
var meta = () => ({
  charset: "utf-8",
  title: "Profiles | Find & connect with people",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => (0, import_node2.json)({
  userData: await getUserData(request)
});
function App() {
  let { userData } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(import_react3.Meta, null), /* @__PURE__ */ React.createElement(import_react3.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement("main", {
    className: "site-main"
  }, /* @__PURE__ */ React.createElement(SiteHeader_default, {
    user: userData == null ? void 0 : userData.user
  }), /* @__PURE__ */ React.createElement(import_react3.Outlet, null), /* @__PURE__ */ React.createElement(import_react3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_react3.Scripts, null), /* @__PURE__ */ React.createElement(import_react3.LiveReload, null))));
}

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\forgot-password.tsx
var forgot_password_exports = {};
__export(forgot_password_exports, {
  action: () => action,
  default: () => forgot_password_default
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/slugify.ts
var slugify = (str) => str && str.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, ""), slugify_default = slugify;

// app/models/profiles.server.ts
var strapiApiUrl = process.env.STRAPI_API_URL, getProfiles = async () => await (await fetch(`${strapiApiUrl}/users/?populate=profilePic`)).json(), getProfileBySlug = async (slug) => {
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

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\forgot-password.tsx
var action = async ({ request }) => {
  let email = (await request.formData()).get("email"), response = await sendResetMail(email);
  return (0, import_node3.json)(response);
}, ForgotPass = () => {
  let transition = (0, import_react4.useTransition)(), data = (0, import_react4.useActionData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "site-section profiles-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl"
  }, "Forgot password"), /* @__PURE__ */ React.createElement("p", null, "Click the button below to send the reset link to your registerd email")), /* @__PURE__ */ React.createElement(import_react4.Form, {
    method: "post",
    className: "form"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("p", null, (data == null ? void 0 : data.ok) ? "Link sent! Check your mail. Can't find it in the inbox? Check Spam" : ""), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    id: "email",
    name: "email",
    type: "email",
    className: "form-input",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "action-cont mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cta"
  }, " ", transition.state == "submitting" ? "Sending" : "Send link", " "))))));
}, forgot_password_default = ForgotPass;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\reset-password.tsx
var reset_password_exports = {};
__export(reset_password_exports, {
  action: () => action2,
  default: () => reset_password_default,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react");
var loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code");
  return code ? (0, import_node4.json)({
    code
  }) : (0, import_node4.redirect)("/sign-in");
}, action2 = async ({ request }) => {
  let formData = await request.formData(), code = formData.get("code"), password = formData.get("password"), passwordConfirmation = formData.get("confirmPassword"), response = await resetPass({ password, passwordConfirmation, code });
  return password != passwordConfirmation ? (0, import_node4.json)({ confirmPassword: "Passwords should match" }) : (0, import_node4.json)(response);
}, ResetPass = () => {
  let transition = (0, import_react5.useTransition)(), error = (0, import_react5.useActionData)(), { code } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "site-section profiles-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl"
  }, "Reset password"), /* @__PURE__ */ React.createElement("p", null, "Enter your new password")), /* @__PURE__ */ React.createElement(import_react5.Form, {
    method: "post",
    className: "form"
  }, /* @__PURE__ */ React.createElement("input", {
    value: code,
    type: "hidden",
    id: "code",
    name: "code",
    required: !0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "job-title"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    id: "password",
    name: "password",
    type: "password",
    className: "form-input",
    required: !0
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "job-title"
  }, "Confirm password"), /* @__PURE__ */ React.createElement("input", {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    className: "form-input",
    required: !0
  }), (error == null ? void 0 : error.confirmPassword) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, error.confirmPassword) : null), /* @__PURE__ */ React.createElement("div", {
    className: "action-cont mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cta"
  }, " ", transition.state == "submitting" ? "Sending" : "Reset password", " "))))));
}, reset_password_default = ResetPass;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action3,
  default: () => register_default
});
var import_node5 = require("@remix-run/node"), import_react8 = require("@remix-run/react");

// app/components/ProfileForm.tsx
var import_react6 = require("@remix-run/react"), import_react7 = require("react"), ProfileForm = ({ profile, onModifyData, action: action7, errors }) => {
  let transition = (0, import_react6.useTransition)(), [profileData, setProfileData] = (0, import_react7.useState)(profile), [authData, setAuthData] = (0, import_react7.useState)({ email: "", password: "" }), updateField = (field) => setProfileData((value) => __spreadValues(__spreadValues({}, value), field));
  return (0, import_react7.useEffect)(() => {
    onModifyData && (action7 == "create" ? onModifyData(__spreadValues(__spreadValues({}, profileData), authData)) : action7 == "login" ? onModifyData(authData) : onModifyData(profileData));
  }, [profileData, authData]), /* @__PURE__ */ React.createElement(import_react6.Form, {
    method: action7 == "edit" ? "put" : "post",
    className: "form"
  }, /* @__PURE__ */ React.createElement("fieldset", {
    disabled: transition.state == "submitting"
  }, /* @__PURE__ */ React.createElement("input", {
    value: profile == null ? void 0 : profile.id,
    type: "hidden",
    name: "id",
    required: !0
  }), /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, action7 != "login" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username"
  }, "Name"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => updateField({ username: e.target.value }),
    value: profileData == null ? void 0 : profileData.username,
    id: "username",
    name: "username",
    type: "text",
    className: "form-input",
    required: !0
  }), (errors == null ? void 0 : errors.username) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.username) : null), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "twitterUsername"
  }, "Twitter username"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => updateField({ twitterUsername: e.target.value }),
    value: profileData == null ? void 0 : profileData.twitterUsername,
    id: "twitterUsername",
    name: "twitterUsername",
    type: "text",
    className: "form-input",
    placeholder: "Without the @"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "bio"
  }, "Bio"), /* @__PURE__ */ React.createElement("textarea", {
    onChange: (e) => updateField({ bio: e.target.value }),
    value: profileData == null ? void 0 : profileData.bio,
    name: "bio",
    id: "bio",
    cols: 30,
    rows: 3,
    className: "form-textarea"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "form-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "job-title"
  }, "Job title"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => updateField({ title: e.target.value }),
    value: profileData == null ? void 0 : profileData.title,
    id: "job-title",
    name: "job-title",
    type: "text",
    className: "form-input"
  }), (errors == null ? void 0 : errors.title) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.title) : null), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "website"
  }, "Website link"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => updateField({ websiteUrl: e.target.value }),
    value: profileData == null ? void 0 : profileData.websiteUrl,
    id: "website",
    name: "website",
    type: "url",
    className: "form-input"
  })))), action7 != "edit" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "job-title"
  }, "Email"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => setAuthData((data) => __spreadProps(__spreadValues({}, data), { email: e.target.value })),
    value: authData.email,
    id: "email",
    name: "email",
    type: "email",
    className: "form-input",
    required: !0
  }), (errors == null ? void 0 : errors.email) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.email) : null), /* @__PURE__ */ React.createElement("div", {
    className: "form-control"
  }, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "job-title"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    onChange: (e) => setAuthData((data) => __spreadProps(__spreadValues({}, data), { password: e.target.value })),
    value: authData.password,
    id: "password",
    name: "password",
    type: "password",
    className: "form-input"
  }), (errors == null ? void 0 : errors.password) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.password) : null), (errors == null ? void 0 : errors.ValidationError) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.ValidationError) : null, (errors == null ? void 0 : errors.ApplicationError) ? /* @__PURE__ */ React.createElement("em", {
    className: "text-red-600"
  }, errors.ApplicationError) : null), /* @__PURE__ */ React.createElement("div", {
    className: "action-cont mt-4"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cta"
  }, " ", transition.state == "submitting" ? "Submitting" : "Submit", " ")))));
}, ProfileForm_default = ProfileForm;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\register.tsx
var action3 = async ({ request }) => {
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
  return console.log({ errors }), /* @__PURE__ */ React.createElement("section", {
    className: "site-section profiles-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl"
  }, "Register"), /* @__PURE__ */ React.createElement("p", null, "Create a new profile")), /* @__PURE__ */ React.createElement(ProfileForm_default, {
    action: "create",
    errors
  })));
}, register_default = Register;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\sign-out.tsx
var sign_out_exports = {};
__export(sign_out_exports, {
  action: () => action4,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node");
var action4 = async ({ request }) => logout(request), loader3 = async () => (0, import_node6.redirect)("/");

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\sign-in.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  action: () => action5,
  default: () => sign_in_default
});
var import_node7 = require("@remix-run/node"), import_react9 = require("@remix-run/react");
var action5 = async ({ request }) => {
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
  return console.log({ errors }), /* @__PURE__ */ React.createElement("section", {
    className: "site-section profiles-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl"
  }, "Sign in "), /* @__PURE__ */ React.createElement("p", null, "You have to log in to edit your profile")), /* @__PURE__ */ React.createElement(ProfileForm_default, {
    action: "login",
    errors
  })));
}, sign_in_default = Login;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action6,
  default: () => slug_default,
  loader: () => loader4
});
var import_node8 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_react12 = require("react");

// app/components/ProfileCard.tsx
var import_react10 = require("@remix-run/react"), getImgUrl = ({ url, username }) => url ? `${url}` : `https://ui-avatars.com/api/?name=${username == null ? void 0 : username.replace(" ", "+")}&background=2563eb&color=fff`, ProfileCard = ({ profile, preview }) => {
  var _a;
  return console.log({ profile }), /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("article", {
    className: `profile ${preview ? "preview" : ""}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "profile-pic-cont"
  }, /* @__PURE__ */ React.createElement("figure", {
    className: "profile-pic img-cont"
  }, /* @__PURE__ */ React.createElement("img", {
    src: getImgUrl({ url: (_a = profile.profilePic) == null ? void 0 : _a.formats.small.url, username: profile.username }),
    alt: `A photo of ${profile.username}`,
    className: "w-full"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "profile-content"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "profile-header "
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "username"
  }, profile.username), profile.twitterUsername && /* @__PURE__ */ React.createElement("a", {
    href: "https://twitter.com/miracleio",
    className: "twitter link"
  }, "@", profile.twitterUsername), profile.bio && /* @__PURE__ */ React.createElement("p", {
    className: "bio"
  }, profile.bio)), /* @__PURE__ */ React.createElement("ul", {
    className: "links"
  }, profile.title && /* @__PURE__ */ React.createElement("li", {
    className: "w-icon"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
  })), /* @__PURE__ */ React.createElement("span", null, " ", profile.title, " ")), profile.websiteUrl && /* @__PURE__ */ React.createElement("li", {
    className: "w-icon"
  }, /* @__PURE__ */ React.createElement("svg", {
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "http://miracleio.me",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "link"
  }, profile.websiteUrl))), !preview && /* @__PURE__ */ React.createElement("footer", {
    className: "grow flex items-end justify-end pt-4"
  }, (profile == null ? void 0 : profile.slug) && /* @__PURE__ */ React.createElement(import_react10.Link, {
    to: profile == null ? void 0 : profile.slug
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cta w-icon"
  }, /* @__PURE__ */ React.createElement("span", null, "View profile"), /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M17 8l4 4m0 0l-4 4m4-4H3"
  })))))))));
}, ProfileCard_default = ProfileCard;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\$slug.tsx
var loader4 = async ({ params, request }) => (0, import_node8.json)({
  userData: await getUserData(request),
  profile: await getProfileBySlug(params.slug)
}), action6 = async ({ request }) => {
  let data = await getUserData(request), formData = await request.formData(), id = formData.get("id"), username = formData.get("username"), twitterUsername = formData.get("twitterUsername"), bio = formData.get("bio"), title = formData.get("job-title"), websiteUrl = formData.get("website");
  console.log({ id, username, twitterUsername, bio, title, websiteUrl });
  let errors = {
    id: id ? null : "Id is required",
    username: username ? null : "username is required",
    title: title ? null : "title is required"
  };
  return Object.values(errors).some((errorMessage) => errorMessage) ? (0, import_node8.json)(errors) : (await updateProfile({ id, username, twitterUsername, bio, title, websiteUrl }, data == null ? void 0 : data.jwt), null);
}, Profile = () => {
  var _a, _b;
  let { profile, userData } = (0, import_react11.useLoaderData)(), errors = (0, import_react11.useActionData)(), [profileData, setprofileData] = (0, import_react12.useState)(profile), [isEditing, setIsEditing] = (0, import_react12.useState)(!1);
  return console.log({ userData, profile }), /* @__PURE__ */ React.createElement("section", {
    className: "site-section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "wrapper flex items-center py-16 min-h-[calc(100vh-4rem)]"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "profile-cont w-full max-w-5xl m-auto"
  }, profileData ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ProfileCard_default, {
    profile: profileData,
    preview: !0
  }), /* @__PURE__ */ React.createElement("ul", {
    className: "actions"
  }, /* @__PURE__ */ React.createElement("li", {
    className: "action"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "cta w-icon"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
  })), /* @__PURE__ */ React.createElement("span", null, "Share"))), ((_a = userData == null ? void 0 : userData.user) == null ? void 0 : _a.id) == profile.id && /* @__PURE__ */ React.createElement("li", {
    className: "action"
  }, /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsEditing(!isEditing),
    className: "cta w-icon"
  }, isEditing ? /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
  })) : /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon stroke",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: 2
  }, /* @__PURE__ */ React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
  })), /* @__PURE__ */ React.createElement("span", null, isEditing ? "Cancel" : "Edit"))))) : /* @__PURE__ */ React.createElement("p", {
    className: "text-center"
  }, "Oops, that profile doesn't exist... yet"), ((_b = userData == null ? void 0 : userData.user) == null ? void 0 : _b.id) == (profile == null ? void 0 : profile.id) && isEditing && /* @__PURE__ */ React.createElement(ProfileForm_default, {
    errors,
    profile,
    action: "edit",
    onModifyData: (value) => setprofileData(value)
  }))));
}, slug_default = Profile;

// route:C:\Users\user\Documents\otherprojs\writing\strapi\Strapi-v4-Authentication-with-Remix\remix-profiles\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader5
});
var import_node9 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var loader5 = async () => (0, import_node9.json)({
  profiles: await getProfiles()
});
function Index() {
  let { profiles } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ React.createElement("section", {
    className: "site-section profiles-section"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("header", {
    className: "section-header"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: "text-4xl"
  }, "Explore profiles"), /* @__PURE__ */ React.createElement("p", null, "Find and connect with amazing people all over the world!")), profiles.length > 0 ? /* @__PURE__ */ React.createElement("ul", {
    className: "profiles-list"
  }, profiles.map((profile) => /* @__PURE__ */ React.createElement("li", {
    key: profile.id,
    className: "profile-item"
  }, /* @__PURE__ */ React.createElement(ProfileCard_default, {
    profile,
    preview: !1
  })))) : /* @__PURE__ */ React.createElement("p", null, "No profiles yet \u{1F642}"), " "));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "7359c22c", entry: { module: "/build/entry.client-HAB2YQCN.js", imports: ["/build/_shared/chunk-4OJWVCZN.js", "/build/_shared/chunk-O6YYFGCX.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VVRFRWIV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-FYQMR4YE.js", imports: ["/build/_shared/chunk-7F3C7OWH.js", "/build/_shared/chunk-BVPJHGZZ.js", "/build/_shared/chunk-CIE5ETH3.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/forgot-password": { id: "routes/forgot-password", parentId: "root", path: "forgot-password", index: void 0, caseSensitive: void 0, module: "/build/routes/forgot-password-T22RPLY2.js", imports: ["/build/_shared/chunk-CIE5ETH3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-I7GJYIYL.js", imports: ["/build/_shared/chunk-7F3C7OWH.js", "/build/_shared/chunk-CIE5ETH3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/register": { id: "routes/register", parentId: "root", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/register-J4T7R6GJ.js", imports: ["/build/_shared/chunk-BVPJHGZZ.js", "/build/_shared/chunk-CIE5ETH3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/reset-password": { id: "routes/reset-password", parentId: "root", path: "reset-password", index: void 0, caseSensitive: void 0, module: "/build/routes/reset-password-K6PHXNEM.js", imports: ["/build/_shared/chunk-CIE5ETH3.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in": { id: "routes/sign-in", parentId: "root", path: "sign-in", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in-RD6E2KOQ.js", imports: ["/build/_shared/chunk-BVPJHGZZ.js", "/build/_shared/chunk-CIE5ETH3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-out": { id: "routes/sign-out", parentId: "root", path: "sign-out", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-out-635EOYH3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-7359C22C.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports }, routes = {
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
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
//# sourceMappingURL=server.js.map
