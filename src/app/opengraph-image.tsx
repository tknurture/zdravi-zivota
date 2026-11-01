import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt =
  "Jana Jaroš — Zdraví života, energetická a mentální rovnováha, Zlín";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const photo = await readFile(join(process.cwd(), "public/jana.jpg"), "base64");
const photoSrc = `data:image/jpeg;base64,${photo}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#faf1de",
          color: "#2c2a35",
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 64px",
          }}
        >
          <div style={{ fontSize: 28, color: "#0e9488", marginBottom: 20 }}>
            Energetická a mentální rovnováha
          </div>
          <div style={{ fontSize: 76, lineHeight: 1.05 }}>Zdraví života</div>
          <div style={{ fontSize: 44, marginTop: 12, color: "#635f72" }}>
            Jana Jaroš
          </div>
          <div style={{ fontSize: 28, marginTop: 40, color: "#635f72" }}>
            Zlín · Třída Tomáše Bati 87
          </div>
        </div>
        <img
          src={photoSrc}
          width={420}
          height={630}
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    ),
    size,
  );
}
