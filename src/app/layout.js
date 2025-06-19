import AppwriteIcon from "../static/appwrite-icon.svg";
import "./app.css";

export const metadata = {
  title: "PunchDesk - Reduce Support Load Through Force™",
  description: "The first platform to gamify customer conflict resolution through professional combat services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={AppwriteIcon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Inter:opsz,wght@14..32,100..900&family=Poppins:wght@300;400;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/appwrite.svg" />
      </head>
      <body className={"bg-black font-[Inter] text-sm text-white"}>
        {children}
      </body>
    </html>
  );
}
