import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import {useEffect} from "react";
import { themeChange } from "theme-change";

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {

    useEffect(() => {
        themeChange(false)
        // 👆 false parameter is required for react project
    }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
