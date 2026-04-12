import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            background: "#09090b",
            border: "10px solid #3f3f46",
            borderRadius: "80px",
            color: "#fafafa",
            display: "flex",
            fontSize: 270,
            fontWeight: 700,
            height: 440,
            justifyContent: "center",
            letterSpacing: "-0.04em",
            width: 440,
          }}
        >
          OL
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
