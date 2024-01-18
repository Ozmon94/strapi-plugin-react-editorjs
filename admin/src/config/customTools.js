import PluginId from "../pluginId";

import Embed from "@editorjs/embed";
import Table from "@editorjs/table";
import NestedList from "@editorjs/nested-list";
import Warning from "@editorjs/warning";
import Code from "@editorjs/code";
import LinkTool from "@editorjs/link";
import Raw from "@editorjs/raw";
import Header from "@editorjs/header";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import InlineCode from "@editorjs/inline-code";
import Paragraph from "@editorjs/paragraph";

const AlignmentTuneTool = require("editorjs-text-alignment-blocktune");

const customTools = {
  embed: Embed,
  table: {
    class: Table,
    inlineToolbar: true,
  },
  list: {
    class: NestedList,
    inlineToolbar: true,
  },
  warning: {
    class: Warning,
    inlineToolbar: true,
    config: {
      titlePlaceholder: "Title",
      messagePlaceholder: "Message",
    },
  },
  code: Code,
  LinkTool: {
    class: LinkTool,
    config: {
      endpoint: `/api/${PluginId}/link`,
    },
  },
  raw: {
    class: Raw,
    inlineToolbar: true,
  },
  header: {
    class: Header,
    inlineToolbar: true,
    tunes: ["alignmentTextTune"],
  },
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
    tunes: ["alignmentTextTune"],
  },
  quote: {
    class: Quote,
    inlineToolbar: true,
    config: {
      quotePlaceholder: "Quote",
      captionPlaceholder: "Quote`s author",
    },
  },
  marker: {
    class: Marker,
    inlineToolbar: true,
  },
  checklist: {
    class: CheckList,
    inlineToolbar: true,
  },
  delimiter: Delimiter,
  inlineCode: InlineCode,
  alignmentTextTune: {
    class: AlignmentTuneTool,
    config: {
      default: "left",
      blocks: {
        header: "center",
        list: "left",
      },
    },
  },
};

export default customTools;
