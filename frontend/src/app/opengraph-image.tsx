import { ImageResponse } from "next/og";
export const alt = "Rivixa Lifesciences — Advancing science. Caring for life.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px 80px",
        background: "#eff6f3",
        color: "#133764",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 64,
            height: 64,
            background: "#133764",
            color: "white",
            borderRadius: 14,
            fontSize: 45,
          }}
        >
          R
        </div>
        <span style={{ fontSize: 36, fontWeight: 700 }}>
          Rivixa Lifesciences
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 76,
          lineHeight: 1.13,
          letterSpacing: -3,
        }}
      >
        <span>Advancing science.</span>
        <span style={{ color: "#37836b" }}>Caring for life.</span>
      </div>
      <div style={{ display: "flex", gap: 40, fontSize: 23, color: "#476570" }}>
        <span>Gynaecology</span>
        <span>Ophthalmology</span>
        <span>Orthopedic</span>
      </div>
    </div>,
    size,
  );
}
