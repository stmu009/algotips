import * as React from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import Topics from "../../data/tips";

const topics = Object.keys(Topics);
const TableOfContents = () => {
  return (
    <TreeView
      aria-label="file system navigator"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        float: "left",
        backgroundColor: "#1a76d2",
        padding: "1rem 2rem",
        // height: 240,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
      }}
    >
      {topics.map((topic, i) => {
        return (
          <TreeItem nodeId={i} label={topic} sx={{ fontSize: "2rem" }}>
            {i === 2 ? <TreeItem nodeId={i*100} label="Calendar" /> : null}
          </TreeItem>
        );
      })}
    </TreeView>
  );
};

export default TableOfContents;
