import type {MetaFunction} from "@remix-run/node";
import {Link} from "@remix-run/react";

export const meta: MetaFunction = () => {
    return [
        {title: "Remix PWA Starter"},
        {name: "description", content: "A Remix PWA starter template"},
    ];
};

export default function Index() {
    return (
        <div className="pl-4 pr-4 flex-col flex gap-4">
            <h1 className="font-bold">{`Henry's Remix PWA starter template`}</h1>
            <p>{`Normally, i don't like to ship PWAs, but there are times where it's the best option. For those times, I've created a Remix PWA starter template.`}</p>
            <h2 className="font-bold">{`Features`}</h2>
            <table className="table">
                <thead>
                <tr>
                    <th>Library</th>
                    <th>Link</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Remix</td>
                    <td>
                        <Link className="link" to="https://remix.run">https://remix.run</Link>
                    </td>
                    <td>Framework</td>
                </tr>
                <tr>
                    <td>Remix PWA</td>
                    <td><Link className="link"
                              to="https://remix-pwa.run/docs/main/quick-start">https://remix-pwa.run/docs/main/quick-start</Link>
                    </td>
                    <td>Remix PWA plugin</td>
                </tr>
                <tr>
                    <td>TailwindCSS</td>
                    <td><Link className="link" to="https://tailwindcss.com">https://tailwindcss.com</Link></td>
                    <td>Utility-first CSS framework</td>
                </tr>
                <tr>
                    <td>DaisyUI</td>
                    <td><Link className="link" to="https://daisyui.com">https://daisyui.com</Link></td>
                    <td>Component library - Write less Tailwind</td>
                </tr>
                </tbody>
            </table>
            <h2 className="font-bold">Themes</h2>
            <p>todo: Add support for switchable themes</p>
            <label className="swap swap-rotate">

                {/* this hidden checkbox controls the state */}
                <input type="checkbox" className="theme-controller" value="synthwave"/>

                {/* sun icon */}
                <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/>
                </svg>

                {/* moon icon */}
                <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                </svg>
            </label>
        </div>
    );
}
