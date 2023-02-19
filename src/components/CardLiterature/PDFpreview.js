import { Viewer, Worker } from "@react-pdf-viewer/core";
import { zoomPlugin } from "@react-pdf-viewer/zoom";
import { React } from "react";
import DownloadIcon from "@mui/icons-material/Download";

// Import react-pdf-viewer styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import "@react-pdf-viewer/zoom/lib/styles/index.css";
import { IconButton } from "@mui/material";

export default function PDFpreview(props) {
  const zoomPluginInstance = zoomPlugin();
  const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.js">
      <div
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="rpv-core__viewer"
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              backgroundColor: "#eeeeee",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "center",
              padding: "4px",
              paddingLeft: "95px",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <ZoomOutButton />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomPopover />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomInButton />
            </div>
            <IconButton href={props.url}>
              <DownloadIcon />
            </IconButton>
          </div>
          <div
            style={{
              flex: 1,
              overflow: "hidden",
            }}
          >
            <Viewer
              fileUrl={props.url}
              plugins={[zoomPluginInstance]}
            />
          </div>
        </div>
      </div>
    </Worker>
  );
}
