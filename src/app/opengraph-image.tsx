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
          alignItems: "stretch",
          background: "#09090b",
          color: "#fafafa",
          display: "flex",
          height: "100%",
          padding: "56px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid #3f3f46",
            borderRadius: "24px",
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "44px",
          }}
        >
          <div
            style={{
              color: "#a1a1aa",
              fontSize: 22,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Olivia Portfolio
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              maxWidth: "940px",
            }}
          >
            <div
              style={{
                fontSize: 68,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.06,
              }}
            >
              Olívia Lourenço | Dev FullStack
            </div>

            <div
              style={{
                color: "#a1a1aa",
                fontSize: 30,
                lineHeight: 1.35,
              }}
            >
              Next.js, TypeScript e C# aplicados a sistemas robustos e
              interfaces de alta performance.
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
