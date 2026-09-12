import { ImageResponse } from "next/og";
export const dynamic = "force-static";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

const logoData = await readFile(
  join(process.cwd(), "public/images/rivixa-logo.jpeg"),
  "base64",
);
const logoSrc = `data:image/jpeg;base64,${logoData}`;

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
      }}
    >
      <img
        src={logoSrc}
        alt=""
        width={102}
        height={152}
        style={{ position: "absolute", left: -20, top: -26 }}
      />
    </div>,
    size,
  );
}
