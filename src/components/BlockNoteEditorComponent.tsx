import { BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { CustomFormattingToolbar } from "./CustomFormattingToolbar";
import initialData from "../data/initialData.json";

const dynamicInitialContent: string | null =
  localStorage.getItem("editorContent");
const staticInitialContent = initialData;

export default function BlockNoteEditorComponent() {
  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: dynamicInitialContent
      ? JSON.parse(dynamicInitialContent)
      : staticInitialContent,

    onEditorContentChange: (editor) => {
      localStorage.setItem(
        "editorContent",
        JSON.stringify(editor.topLevelBlocks)
      );
    },

    customElements: {
      formattingToolbar: CustomFormattingToolbar,
    },
  });

  return <BlockNoteView editor={editor} />;
}
